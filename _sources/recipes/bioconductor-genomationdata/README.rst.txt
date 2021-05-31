:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomationdata'
.. highlight: bash

bioconductor-genomationdata
===========================

.. conda:recipe:: bioconductor-genomationdata
   :replaces_section_title:
   :noindex:

   Experimental data for showing functionalities of the genomation package

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/genomationData.html
   :license: GPL-3
   :recipe: /`bioconductor-genomationdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomationdata/meta.yaml>`_

   The package contains Chip Seq\, Methylation and Cage data\, downloaded from Encode


.. conda:package:: bioconductor-genomationdata

   |downloads_bioconductor-genomationdata| |docker_bioconductor-genomationdata|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomationdata

   and update with::

      conda update bioconductor-genomationdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomationdata:<tag>

   (see `bioconductor-genomationdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomationdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomationdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomationdata
   :alt:   (downloads)
.. |docker_bioconductor-genomationdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomationdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomationdata
.. _`bioconductor-genomationdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomationdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomationdata/README.html