:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-confessdata'
.. highlight: bash

bioconductor-confessdata
========================

.. conda:recipe:: bioconductor-confessdata
   :replaces_section_title:
   :noindex:

   Example dataset for CONFESS package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/CONFESSdata.html
   :license: GPL-2
   :recipe: /`bioconductor-confessdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confessdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confessdata/meta.yaml>`_

   Example text\-converted C01 image files for use in the CONFESS Bioconductor package.


.. conda:package:: bioconductor-confessdata

   |downloads_bioconductor-confessdata| |docker_bioconductor-confessdata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-confessdata

   and update with::

      conda update bioconductor-confessdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-confessdata:<tag>

   (see `bioconductor-confessdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-confessdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-confessdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-confessdata
   :alt:   (downloads)
.. |docker_bioconductor-confessdata| image:: https://quay.io/repository/biocontainers/bioconductor-confessdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-confessdata
.. _`bioconductor-confessdata/tags`: https://quay.io/repository/biocontainers/bioconductor-confessdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-confessdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-confessdata/README.html