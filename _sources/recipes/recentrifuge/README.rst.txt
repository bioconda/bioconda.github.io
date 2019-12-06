:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recentrifuge'
.. highlight: bash

recentrifuge
============

.. conda:recipe:: recentrifuge
   :replaces_section_title:

   Robust comparative analysis and contamination removal for metagenomics

   :homepage: https://github.com/khyox/recentrifuge
   :license: GPLv3
   :recipe: /`recentrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge/meta.yaml>`_

   


.. conda:package:: recentrifuge

   |downloads_recentrifuge| |docker_recentrifuge|

   :versions: 0.28.14-0, 0.28.13-0
   
   :depends biopython: >=1.68
   :depends matplotlib: >3.0
   :depends numpy: >1.15
   :depends openpyxl: >0.9.0
   :depends pandas: >=0.23.2
   :depends python: >=3
   :depends xlrd: >=0.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install recentrifuge

   and update with::

      conda update recentrifuge

   or use the docker container::

      docker pull quay.io/biocontainers/recentrifuge:<tag>

   (see `recentrifuge/tags`_ for valid values for ``<tag>``)


.. |downloads_recentrifuge| image:: https://img.shields.io/conda/dn/bioconda/recentrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/recentrifuge
   :alt:   (downloads)
.. |docker_recentrifuge| image:: https://quay.io/repository/biocontainers/recentrifuge/status
   :target: https://quay.io/repository/biocontainers/recentrifuge
.. _`recentrifuge/tags`: https://quay.io/repository/biocontainers/recentrifuge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recentrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recentrifuge/README.html