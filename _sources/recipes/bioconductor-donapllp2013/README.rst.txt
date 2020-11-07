:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-donapllp2013'
.. highlight: bash

bioconductor-donapllp2013
=========================

.. conda:recipe:: bioconductor-donapllp2013
   :replaces_section_title:
   :noindex:

   Supplementary data package for Dona et al. \(2013\) containing example images and tables

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/DonaPLLP2013.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-donapllp2013 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-donapllp2013>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-donapllp2013/meta.yaml>`_

   An experiment data package associated with the publication Dona et al. \(2013\). Package contains runnable vignettes showing an example image segmentation for one posterior lateral line primordium\, and also the data table and code used to analyze tissue\-scale lifetime\-ratio statistics.


.. conda:package:: bioconductor-donapllp2013

   |downloads_bioconductor-donapllp2013| |docker_bioconductor-donapllp2013|

   :versions:
      
      

      ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.32.0,<4.33.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-donapllp2013

   and update with::

      conda update bioconductor-donapllp2013

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-donapllp2013:<tag>

   (see `bioconductor-donapllp2013/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-donapllp2013| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-donapllp2013.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-donapllp2013
   :alt:   (downloads)
.. |docker_bioconductor-donapllp2013| image:: https://quay.io/repository/biocontainers/bioconductor-donapllp2013/status
   :target: https://quay.io/repository/biocontainers/bioconductor-donapllp2013
.. _`bioconductor-donapllp2013/tags`: https://quay.io/repository/biocontainers/bioconductor-donapllp2013?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-donapllp2013/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-donapllp2013/README.html