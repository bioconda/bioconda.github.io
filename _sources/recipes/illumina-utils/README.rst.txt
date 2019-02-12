:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-utils'
.. highlight: bash

illumina-utils
==============

.. conda:recipe:: illumina-utils
   :replaces_section_title:

   A library and collection of scripts to work with Illumina paired\-end data \(for CASAVA 1.8\+\).

   :homepage: https://github.com/meren/illumina-utils
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`illumina-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils/meta.yaml>`_

   


.. conda:package:: illumina-utils

   |downloads_illumina-utils| |docker_illumina-utils|

   :versions: 2.6-0, 2.5-0, 2.4.1-0
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends python: >=3
   
   :depends python-levenshtein: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install illumina-utils

   and update with::

      conda update illumina-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/illumina-utils:<tag>

   (see `illumina-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_illumina-utils| image:: https://img.shields.io/conda/dn/bioconda/illumina-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_illumina-utils| image:: https://quay.io/repository/biocontainers/illumina-utils/status
   :target: https://quay.io/repository/biocontainers/illumina-utils
.. _`illumina-utils/tags`: https://quay.io/repository/biocontainers/illumina-utils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-utils/README.html