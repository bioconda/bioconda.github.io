:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easyreporting'
.. highlight: bash

bioconductor-easyreporting
==========================

.. conda:recipe:: bioconductor-easyreporting
   :replaces_section_title:
   :noindex:

   Helps creating report for improving Reproducible computational Research

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/easyreporting.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-easyreporting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyreporting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easyreporting/meta.yaml>`_

   An S4 class for facilitating the automated creation of rmarkdown files inside other packages\/software\, even without knowing rmarkdown language. Best if implemented in functions as \"recursive\" style programming.


.. conda:package:: bioconductor-easyreporting

   |downloads_bioconductor-easyreporting| |docker_bioconductor-easyreporting|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-easyreporting

   and update with::

      conda update bioconductor-easyreporting

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-easyreporting:<tag>

   (see `bioconductor-easyreporting/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-easyreporting| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easyreporting.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easyreporting
   :alt:   (downloads)
.. |docker_bioconductor-easyreporting| image:: https://quay.io/repository/biocontainers/bioconductor-easyreporting/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easyreporting
.. _`bioconductor-easyreporting/tags`: https://quay.io/repository/biocontainers/bioconductor-easyreporting?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easyreporting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easyreporting/README.html