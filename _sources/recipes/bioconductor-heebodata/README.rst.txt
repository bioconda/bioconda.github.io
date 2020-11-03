:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-heebodata'
.. highlight: bash

bioconductor-heebodata
======================

.. conda:recipe:: bioconductor-heebodata
   :replaces_section_title:
   :noindex:

   HEEBO set and HEEBO controls.

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/HEEBOdata.html
   :license: LGPL
   :recipe: /`bioconductor-heebodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heebodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-heebodata/meta.yaml>`_

   R objects describing the HEEBO oligo set.


.. conda:package:: bioconductor-heebodata

   |downloads_bioconductor-heebodata| |docker_bioconductor-heebodata|

   :versions:
      
      

      ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-heebodata

   and update with::

      conda update bioconductor-heebodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-heebodata:<tag>

   (see `bioconductor-heebodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-heebodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-heebodata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-heebodata
   :alt:   (downloads)
.. |docker_bioconductor-heebodata| image:: https://quay.io/repository/biocontainers/bioconductor-heebodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-heebodata
.. _`bioconductor-heebodata/tags`: https://quay.io/repository/biocontainers/bioconductor-heebodata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-heebodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-heebodata/README.html