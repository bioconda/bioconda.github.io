:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kcsmart'
.. highlight: bash

bioconductor-kcsmart
====================

.. conda:recipe:: bioconductor-kcsmart
   :replaces_section_title:
   :noindex:

   Multi sample aCGH analysis package using kernel convolution

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/KCsmart.html
   :license: GPL-3
   :recipe: /`bioconductor-kcsmart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kcsmart/meta.yaml>`_
   :links: biotools: :biotools:`kcsmart`, doi: :doi:`10.1186/1756-0500-3-298`

   Multi sample aCGH analysis package using kernel convolution


.. conda:package:: bioconductor-kcsmart

   |downloads_bioconductor-kcsmart| |docker_bioconductor-kcsmart|

   :versions:
      
      

      ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-multtest: ``>=2.44.0,<2.45.0``
   :depends bioconductor-siggenes: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-kernsmooth: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kcsmart

   and update with::

      conda update bioconductor-kcsmart

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kcsmart:<tag>

   (see `bioconductor-kcsmart/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kcsmart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kcsmart.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kcsmart
   :alt:   (downloads)
.. |docker_bioconductor-kcsmart| image:: https://quay.io/repository/biocontainers/bioconductor-kcsmart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kcsmart
.. _`bioconductor-kcsmart/tags`: https://quay.io/repository/biocontainers/bioconductor-kcsmart?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kcsmart/README.html