:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gagedata'
.. highlight: bash

bioconductor-gagedata
=====================

.. conda:recipe:: bioconductor-gagedata
   :replaces_section_title:
   :noindex:

   Auxillary data for gage package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/gageData.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-gagedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gagedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gagedata/meta.yaml>`_

   This is a supportive data package for the software package\, gage. However\, the data supplied here are also useful for gene set or pathway analysis or microarray data analysis in general. In this package\, we provide two demo microarray dataset\: GSE16873 \(a breast cancer dataset from GEO\) and BMP6 \(originally published as an demo dataset for GAGE\, also registered as GSE13604 in GEO\). This package also includes commonly used gene set data based on KEGG pathways and GO terms for major research species\, including human\, mouse\, rat and budding yeast. Mapping data between common gene IDs for budding yeast are also included.


.. conda:package:: bioconductor-gagedata

   |downloads_bioconductor-gagedata| |docker_bioconductor-gagedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.48.0-0</code>,  <code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.35.0-0</code>,  <code>2.32.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  </span></summary>
      

      ``2.48.0-0``,  ``2.44.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.35.0-0``,  ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-gagedata

to add into an existing workspace instead, run::

    pixi add bioconductor-gagedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gagedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gagedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gagedata:<tag>

(see `bioconductor-gagedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gagedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gagedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gagedata
   :alt:   (downloads)
.. |docker_bioconductor-gagedata| image:: https://quay.io/repository/biocontainers/bioconductor-gagedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gagedata
.. _`bioconductor-gagedata/tags`: https://quay.io/repository/biocontainers/bioconductor-gagedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gagedata";
        var versions = ["2.48.0","2.44.0","2.40.0","2.38.0","2.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gagedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gagedata/README.html