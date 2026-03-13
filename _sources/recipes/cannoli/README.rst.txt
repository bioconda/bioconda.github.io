:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cannoli'
.. highlight: bash

cannoli
=======

.. conda:recipe:: cannoli
   :replaces_section_title:
   :noindex:

   Distributed execution of bioinformatics tools on Apache Spark

   :homepage: https://github.com/bigdatagenomics/cannoli
   :license: Apache-2.0
   :recipe: /`cannoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli/meta.yaml>`_

   


.. conda:package:: cannoli

   |downloads_cannoli| |docker_cannoli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.11.1-0</code>,  <code>0.10.0-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=8``
   :depends on pyspark: ``>=3.2.1``

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

    pixi global install cannoli

to add into an existing workspace instead, run::

    pixi add cannoli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cannoli

Alternatively, to install into a new environment, run::

    conda create -n envname cannoli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cannoli:<tag>

(see `cannoli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cannoli| image:: https://img.shields.io/conda/dn/bioconda/cannoli.svg?style=flat
   :target: https://anaconda.org/bioconda/cannoli
   :alt:   (downloads)
.. |docker_cannoli| image:: https://quay.io/repository/biocontainers/cannoli/status
   :target: https://quay.io/repository/biocontainers/cannoli
.. _`cannoli/tags`: https://quay.io/repository/biocontainers/cannoli?tab=tags


.. raw:: html

    <script>
        var package = "cannoli";
        var versions = ["1.0.1","1.0","0.15.0","0.14.0","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cannoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cannoli/README.html