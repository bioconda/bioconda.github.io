:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexmadata'
.. highlight: bash

bioconductor-dexmadata
======================

.. conda:recipe:: bioconductor-dexmadata
   :replaces_section_title:
   :noindex:

   Data package for DExMA package

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/DExMAdata.html
   :license: GPL-2
   :recipe: /`bioconductor-dexmadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata/meta.yaml>`_

   Data objects needed to allSameID\(\) function of DExMA package. There are also some objects that are necessary to be able to apply the examples of the DExMA package\, which illustrate package functionality.


.. conda:package:: bioconductor-dexmadata

   |downloads_bioconductor-dexmadata| |docker_bioconductor-dexmadata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dexmadata

   and update with::

      conda update bioconductor-dexmadata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dexmadata:<tag>

   (see `bioconductor-dexmadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dexmadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexmadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexmadata
   :alt:   (downloads)
.. |docker_bioconductor-dexmadata| image:: https://quay.io/repository/biocontainers/bioconductor-dexmadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexmadata
.. _`bioconductor-dexmadata/tags`: https://quay.io/repository/biocontainers/bioconductor-dexmadata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html