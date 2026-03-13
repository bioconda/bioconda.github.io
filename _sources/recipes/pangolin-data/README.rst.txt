:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolin-data'
.. highlight: bash

pangolin-data
=============

.. conda:recipe:: pangolin-data
   :replaces_section_title:
   :noindex:

   Repository for storing latest model\, protobuf\, designation hash and alias files for pangolin assignments

   :homepage: https://github.com/cov-lineages/pangolin-data
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pangolin-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolin-data/meta.yaml>`_

   


.. conda:package:: pangolin-data

   |downloads_pangolin-data| |docker_pangolin-data|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.37.1-0</code>,  <code>1.37-0</code>,  <code>1.36-0</code>,  <code>1.35-0</code>,  <code>1.34-0</code>,  <code>1.33-0</code>,  <code>1.32-0</code>,  <code>1.31-0</code>,  <code>1.30-0</code>,  </span></summary>
      

      ``1.37.1-0``,  ``1.37-0``,  ``1.36-0``,  ``1.35-0``,  ``1.34-0``,  ``1.33-0``,  ``1.32-0``,  ``1.31-0``,  ``1.30-0``,  ``1.29-0``,  ``1.28.1-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25.1-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23.1-0``,  ``1.23-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18.1.1-0``,  ``1.18.1-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-1``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.6-0``,  ``1.3-0``,  ``1.2.133.2-0``,  ``1.2.133-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install pangolin-data

to add into an existing workspace instead, run::

    pixi add pangolin-data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangolin-data

Alternatively, to install into a new environment, run::

    conda create -n envname pangolin-data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangolin-data:<tag>

(see `pangolin-data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangolin-data| image:: https://img.shields.io/conda/dn/bioconda/pangolin-data.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolin-data
   :alt:   (downloads)
.. |docker_pangolin-data| image:: https://quay.io/repository/biocontainers/pangolin-data/status
   :target: https://quay.io/repository/biocontainers/pangolin-data
.. _`pangolin-data/tags`: https://quay.io/repository/biocontainers/pangolin-data?tab=tags


.. raw:: html

    <script>
        var package = "pangolin-data";
        var versions = ["1.37.1","1.37","1.36","1.35","1.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolin-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolin-data/README.html