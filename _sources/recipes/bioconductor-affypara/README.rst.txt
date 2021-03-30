:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affypara'
.. highlight: bash

bioconductor-affypara
=====================

.. conda:recipe:: bioconductor-affypara
   :replaces_section_title:
   :noindex:

   Parallelized preprocessing methods for Affymetrix Oligonucleotide Arrays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/affyPara.html
   :license: GPL-3
   :recipe: /`bioconductor-affypara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affypara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affypara/meta.yaml>`_

   The package contains parallelized functions for exploratory oligonucleotide array analysis. The package is designed for large numbers of microarray data.


.. conda:package:: bioconductor-affypara

   |downloads_bioconductor-affypara| |docker_bioconductor-affypara|

   :versions:
      
      

      ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.42.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-affyio: ``>=1.60.0,<1.61.0``
   :depends bioconductor-vsn: ``>=3.58.0,<3.59.0``
   :depends r-aplpack: ``>=1.1.1``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-snow: ``>=0.2-3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affypara

   and update with::

      conda update bioconductor-affypara

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affypara:<tag>

   (see `bioconductor-affypara/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affypara| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affypara.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affypara
   :alt:   (downloads)
.. |docker_bioconductor-affypara| image:: https://quay.io/repository/biocontainers/bioconductor-affypara/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affypara
.. _`bioconductor-affypara/tags`: https://quay.io/repository/biocontainers/bioconductor-affypara?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affypara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affypara/README.html