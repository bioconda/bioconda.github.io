:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msnid'
.. highlight: bash

bioconductor-msnid
==================

.. conda:recipe:: bioconductor-msnid
   :replaces_section_title:
   :noindex:

   Utilities for Exploration and Assessment of Confidence of LC\-MSn Proteomics Identifications

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSnID.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msnid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msnid/meta.yaml>`_
   :links: biotools: :biotools:`msnid`, doi: :doi:`10.1038/nmeth.3252`

   Extracts MS\/MS ID data from mzIdentML \(leveraging mzID package\) or text files. After collating the search results from multiple datasets it assesses their identification quality and optimize filtering criteria to achieve the maximum number of identifications while not exceeding a specified false discovery rate. Also contains a number of utilities to explore the MS\/MS results and assess missed and irregular enzymatic cleavages\, mass measurement accuracy\, etc.


.. conda:package:: bioconductor-msnid

   |downloads_bioconductor-msnid| |docker_bioconductor-msnid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.12.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-msmstests: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-msmstests: ``>=1.48.0,<1.49.0a0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-mzid: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-mzid: ``>=1.48.0,<1.49.0a0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-iterators: 
   :depends on r-purrr: 
   :depends on r-r.cache: 
   :depends on r-rcpp: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-runit: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-xtable: 

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

    pixi global install bioconductor-msnid

to add into an existing workspace instead, run::

    pixi add bioconductor-msnid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msnid

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msnid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msnid:<tag>

(see `bioconductor-msnid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msnid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msnid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msnid
   :alt:   (downloads)
.. |docker_bioconductor-msnid| image:: https://quay.io/repository/biocontainers/bioconductor-msnid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msnid
.. _`bioconductor-msnid/tags`: https://quay.io/repository/biocontainers/bioconductor-msnid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msnid";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msnid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msnid/README.html