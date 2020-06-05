:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gigseadata'
.. highlight: bash

bioconductor-gigseadata
=======================

.. conda:recipe:: bioconductor-gigseadata
   :replaces_section_title:
   :noindex:

   Gene set collections for the GIGSEA package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/GIGSEAdata.html
   :license: LGPL-3
   :recipe: /`bioconductor-gigseadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigseadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gigseadata/meta.yaml>`_

   The gene set collection used for the GIGSEA package.


.. conda:package:: bioconductor-gigseadata

   |downloads_bioconductor-gigseadata| |docker_bioconductor-gigseadata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gigseadata

   and update with::

      conda update bioconductor-gigseadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gigseadata:<tag>

   (see `bioconductor-gigseadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gigseadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gigseadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gigseadata
   :alt:   (downloads)
.. |docker_bioconductor-gigseadata| image:: https://quay.io/repository/biocontainers/bioconductor-gigseadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gigseadata
.. _`bioconductor-gigseadata/tags`: https://quay.io/repository/biocontainers/bioconductor-gigseadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gigseadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gigseadata/README.html