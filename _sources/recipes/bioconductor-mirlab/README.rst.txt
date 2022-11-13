:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirlab'
.. highlight: bash

bioconductor-mirlab
===================

.. conda:recipe:: bioconductor-mirlab
   :replaces_section_title:
   :noindex:

   Dry lab for exploring miRNA\-mRNA relationships

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/miRLAB.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-mirlab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirlab/meta.yaml>`_

   Provide tools exploring miRNA\-mRNA relationships\, including popular miRNA target prediction methods\, ensemble methods that integrate individual methods\, functions to get data from online resources\, functions to validate the results\, and functions to conduct enrichment analyses.


.. conda:package:: bioconductor-mirlab

   |downloads_bioconductor-mirlab| |docker_bioconductor-mirlab|

   :versions:
      
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      

   
   :depends bioconductor-category: ``>=2.64.0,<2.65.0``
   :depends bioconductor-ctc: ``>=1.72.0,<1.73.0``
   :depends bioconductor-gostats: ``>=2.64.0,<2.65.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-limma: ``>=3.54.0,<3.55.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-tcgabiolinks: ``>=2.25.0,<2.26.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-energy: 
   :depends r-entropy: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-httr: 
   :depends r-invariantcausalprediction: 
   :depends r-pcalg: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirlab

   and update with::

      conda update bioconductor-mirlab

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirlab:<tag>

   (see `bioconductor-mirlab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirlab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirlab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirlab
   :alt:   (downloads)
.. |docker_bioconductor-mirlab| image:: https://quay.io/repository/biocontainers/bioconductor-mirlab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirlab
.. _`bioconductor-mirlab/tags`: https://quay.io/repository/biocontainers/bioconductor-mirlab?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirlab";
        var versions = ["1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirlab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirlab/README.html