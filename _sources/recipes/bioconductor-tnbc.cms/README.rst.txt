:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tnbc.cms'
.. highlight: bash

bioconductor-tnbc.cms
=====================

.. conda:recipe:: bioconductor-tnbc.cms
   :replaces_section_title:
   :noindex:

   TNBC.CMS\: Prediction of TNBC Consensus Molecular Subtypes

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TNBC.CMS.html
   :license: GPL-3
   :recipe: /`bioconductor-tnbc.cms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms/meta.yaml>`_

   This package implements a machine learning\-based classifier for the assignment of consensus molecular subtypes to TNBC samples. It also provides functions to summarize genomic and clinical characteristics.


.. conda:package:: bioconductor-tnbc.cms

   |downloads_bioconductor-tnbc.cms| |docker_bioconductor-tnbc.cms|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-gsva: ``>=1.42.0,<1.43.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-forestplot: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-pheatmap: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tnbc.cms

   and update with::

      conda update bioconductor-tnbc.cms

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tnbc.cms:<tag>

   (see `bioconductor-tnbc.cms/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tnbc.cms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnbc.cms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tnbc.cms
   :alt:   (downloads)
.. |docker_bioconductor-tnbc.cms| image:: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms
.. _`bioconductor-tnbc.cms/tags`: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tnbc.cms";
        var versions = ["1.10.0","1.8.0","1.6.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html