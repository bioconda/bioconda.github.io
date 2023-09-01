:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-expressionatlas'
.. highlight: bash

bioconductor-expressionatlas
============================

.. conda:recipe:: bioconductor-expressionatlas
   :replaces_section_title:
   :noindex:

   Download datasets from EMBL\-EBI Expression Atlas

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ExpressionAtlas.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-expressionatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas/meta.yaml>`_

   This package is for searching for datasets in EMBL\-EBI Expression Atlas\, and downloading them into R for further analysis. Each Expression Atlas dataset is represented as a SimpleList object with one element per platform. Sequencing data is contained in a SummarizedExperiment object\, while microarray data is contained in an ExpressionSet or MAList object.


.. conda:package:: bioconductor-expressionatlas

   |downloads_bioconductor-expressionatlas| |docker_bioconductor-expressionatlas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocstyle: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-xml: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-expressionatlas

   and update with::

      mamba update bioconductor-expressionatlas

  To create a new environment, run::

      mamba create --name myenvname bioconductor-expressionatlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-expressionatlas:<tag>

   (see `bioconductor-expressionatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-expressionatlas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-expressionatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-expressionatlas
   :alt:   (downloads)
.. |docker_bioconductor-expressionatlas| image:: https://quay.io/repository/biocontainers/bioconductor-expressionatlas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-expressionatlas
.. _`bioconductor-expressionatlas/tags`: https://quay.io/repository/biocontainers/bioconductor-expressionatlas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-expressionatlas";
        var versions = ["1.28.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html