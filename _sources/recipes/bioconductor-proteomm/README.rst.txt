:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteomm'
.. highlight: bash

bioconductor-proteomm
=====================

.. conda:recipe:: bioconductor-proteomm
   :replaces_section_title:
   :noindex:

   Multi\-Dataset Model\-based Differential Expression Proteomics Analysis Platform

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/ProteoMM.html
   :license: MIT
   :recipe: /`bioconductor-proteomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm/meta.yaml>`_

   ProteoMM is a statistical method to perform model\-based peptide\-level differential expression analysis of single or multiple datasets. For multiple datasets ProteoMM produces a single fold change and p\-value for each protein across multiple datasets. ProteoMM provides functionality for normalization\, missing value imputation and differential expression. Model\-based peptide\-level imputation and differential expression analysis component of package follows the analysis described in “A statistical framework for protein quantitation in bottom\-up MS based proteomics\" \(Karpievitch et al. Bioinformatics 2009\). EigenMS normalisation is implemented as described in \"Normalization of peak intensities in bottom\-up MS\-based proteomics using singular value decomposition.\" \(Karpievitch et al. Bioinformatics 2009\).


.. conda:package:: bioconductor-proteomm

   |downloads_bioconductor-proteomm| |docker_bioconductor-proteomm|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gdata: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gtools: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proteomm

   and update with::

      conda update bioconductor-proteomm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proteomm:<tag>

   (see `bioconductor-proteomm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proteomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteomm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-proteomm
   :alt:   (downloads)
.. |docker_bioconductor-proteomm| image:: https://quay.io/repository/biocontainers/bioconductor-proteomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteomm
.. _`bioconductor-proteomm/tags`: https://quay.io/repository/biocontainers/bioconductor-proteomm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-proteomm";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteomm/README.html