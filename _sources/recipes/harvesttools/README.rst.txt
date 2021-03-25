:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harvesttools'
.. highlight: bash

harvesttools
============

.. conda:recipe:: harvesttools
   :replaces_section_title:
   :noindex:

   HarvestTools is a part of the Harvest software suite and provides file conversion between Gingr files and various standard text formats

   :homepage: https://github.com/marbl/harvest-tools
   :license: custom; see https://raw.githubusercontent.com/marbl/harvest-tools/master/LICENSE.txt
   :recipe: /`harvesttools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvesttools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harvesttools/meta.yaml>`_

   


.. conda:package:: harvesttools

   |downloads_harvesttools| |docker_harvesttools|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install harvesttools

   and update with::

      conda update harvesttools

   or use the docker container::

      docker pull quay.io/biocontainers/harvesttools:<tag>

   (see `harvesttools/tags`_ for valid values for ``<tag>``)


.. |downloads_harvesttools| image:: https://img.shields.io/conda/dn/bioconda/harvesttools.svg?style=flat
   :target: https://anaconda.org/bioconda/harvesttools
   :alt:   (downloads)
.. |docker_harvesttools| image:: https://quay.io/repository/biocontainers/harvesttools/status
   :target: https://quay.io/repository/biocontainers/harvesttools
.. _`harvesttools/tags`: https://quay.io/repository/biocontainers/harvesttools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harvesttools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harvesttools/README.html