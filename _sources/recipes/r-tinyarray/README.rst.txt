:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tinyarray'
.. highlight: bash

r-tinyarray
===========

.. conda:recipe:: r-tinyarray
   :replaces_section_title:
   :noindex:

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas\(TCGA\) are common bioinformatics public databases. We integrate the regular analysis and charts for expression data\, to analyze and display the data concisely and intuitively.

   :homepage: https://github.com/xjsun1221/tinyarray
   :license: MIT / MIT
   :recipe: /`r-tinyarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tinyarray/meta.yaml>`_

   


.. conda:package:: r-tinyarray

   |downloads_r-tinyarray| |docker_r-tinyarray|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-1``,  ``2.2.7-0``

      

   
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-tinyarray

   and update with::

      conda update r-tinyarray

   or use the docker container::

      docker pull quay.io/biocontainers/r-tinyarray:<tag>

   (see `r-tinyarray/tags`_ for valid values for ``<tag>``)


.. |downloads_r-tinyarray| image:: https://img.shields.io/conda/dn/bioconda/r-tinyarray.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tinyarray
   :alt:   (downloads)
.. |docker_r-tinyarray| image:: https://quay.io/repository/biocontainers/r-tinyarray/status
   :target: https://quay.io/repository/biocontainers/r-tinyarray
.. _`r-tinyarray/tags`: https://quay.io/repository/biocontainers/r-tinyarray?tab=tags


.. raw:: html

    <script>
        var package = "r-tinyarray";
        var versions = ["2.3.1","2.3.0","2.3.0","2.2.9","2.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tinyarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tinyarray/README.html