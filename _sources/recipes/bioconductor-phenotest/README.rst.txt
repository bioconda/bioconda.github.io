:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenotest'
.. highlight: bash

bioconductor-phenotest
======================

.. conda:recipe:: bioconductor-phenotest
   :replaces_section_title:
   :noindex:

   Tools to test association between gene expression and phenotype in a way that is efficient\, structured\, fast and scalable. We also provide tools to do GSEA \(Gene set enrichment analysis\) and copy number variation.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/phenoTest.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-phenotest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenotest/meta.yaml>`_

   Tools to test correlation between gene expression and phenotype in a way that is efficient\, structured\, fast and scalable. GSEA is also provided.


.. conda:package:: bioconductor-phenotest

   |downloads_bioconductor-phenotest| |docker_bioconductor-phenotest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-category: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-heatplus: ``>=3.8.0,<3.9.0``
   :depends bioconductor-hgu133a.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-hopach: ``>=2.60.0,<2.61.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bma: 
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-mgcv: 
   :depends r-survival: 
   :depends r-xtable: 
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

      mamba install bioconductor-phenotest

   and update with::

      mamba update bioconductor-phenotest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phenotest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenotest:<tag>

   (see `bioconductor-phenotest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenotest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenotest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenotest
   :alt:   (downloads)
.. |docker_bioconductor-phenotest| image:: https://quay.io/repository/biocontainers/bioconductor-phenotest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenotest
.. _`bioconductor-phenotest/tags`: https://quay.io/repository/biocontainers/bioconductor-phenotest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenotest";
        var versions = ["1.48.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenotest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenotest/README.html