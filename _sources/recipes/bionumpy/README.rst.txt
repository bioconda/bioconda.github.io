:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bionumpy'
.. highlight: bash

bionumpy
========

.. conda:recipe:: bionumpy
   :replaces_section_title:
   :noindex:

   Library for working with biological sequence data as numpy arrays.

   :homepage: https://github.com/bionumpy/bionumpy
   :documentation: https://bionumpy.github.io/bionumpy
   
   :license: MIT / MIT
   :recipe: /`bionumpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bionumpy/meta.yaml>`_

   


.. conda:package:: bionumpy

   |downloads_bionumpy| |docker_bionumpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.4-0</code>,  </span></summary>
      

      ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.31-0``,  ``0.2.29-0``,  ``0.2.27-0``,  ``0.2.26-0``,  ``0.2.25-0``,  ``0.2.24-0``,  ``0.2.23-0``,  ``0.2.22-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.15-0``,  ``0.2.13-0``,  ``0.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on npstructures: ``>=0.2.15``
   :depends on numpy: ``>=1.20``
   :depends on python: ``>=3.6``

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

    pixi global install bionumpy

to add into an existing workspace instead, run::

    pixi add bionumpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bionumpy

Alternatively, to install into a new environment, run::

    conda create -n envname bionumpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bionumpy:<tag>

(see `bionumpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bionumpy| image:: https://img.shields.io/conda/dn/bioconda/bionumpy.svg?style=flat
   :target: https://anaconda.org/bioconda/bionumpy
   :alt:   (downloads)
.. |docker_bionumpy| image:: https://quay.io/repository/biocontainers/bionumpy/status
   :target: https://quay.io/repository/biocontainers/bionumpy
.. _`bionumpy/tags`: https://quay.io/repository/biocontainers/bionumpy?tab=tags


.. raw:: html

    <script>
        var package = "bionumpy";
        var versions = ["1.0.14","1.0.13","1.0.12","1.0.11","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bionumpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bionumpy/README.html