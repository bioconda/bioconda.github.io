:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-getdee2'
.. highlight: bash

bioconductor-getdee2
====================

.. conda:recipe:: bioconductor-getdee2
   :replaces_section_title:
   :noindex:

   Programmatic access to the DEE2 RNA expression dataset

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/getDEE2.html
   :license: GPL-3
   :recipe: /`bioconductor-getdee2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-getdee2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-getdee2/meta.yaml>`_

   Digital Expression Explorer 2 \(or DEE2 for short\) is a repository of processed RNA\-seq data in the form of counts. It was designed so that researchers could undertake re\-analysis and meta\-analysis of published RNA\-seq studies quickly and easily. As of April 2020\, over 1 million SRA datasets have been processed. This package provides an R interface to access these expression data. More information about the DEE2 project can be found at the project homepage \(http\:\/\/dee2.io\) and main publication \(https\:\/\/doi.org\/10.1093\/gigascience\/giz022\).


.. conda:package:: bioconductor-getdee2

   |downloads_bioconductor-getdee2| |docker_bioconductor-getdee2|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-htm2txt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-getdee2

   and update with::

      conda update bioconductor-getdee2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-getdee2:<tag>

   (see `bioconductor-getdee2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-getdee2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-getdee2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-getdee2
   :alt:   (downloads)
.. |docker_bioconductor-getdee2| image:: https://quay.io/repository/biocontainers/bioconductor-getdee2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-getdee2
.. _`bioconductor-getdee2/tags`: https://quay.io/repository/biocontainers/bioconductor-getdee2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-getdee2";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-getdee2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-getdee2/README.html