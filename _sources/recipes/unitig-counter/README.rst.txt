:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitig-counter'
.. highlight: bash

unitig-counter
==============

.. conda:recipe:: unitig-counter
   :replaces_section_title:

   Uses a compressed de Bruijn graph \(implemented in GATB\) to count unitigs in bacterial populations.

   :homepage: https://github.com/johnlees/unitig-counter
   :license: AGPL / GNU Affero General Public License
   :recipe: /`unitig-counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitig-counter/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pgen.1007758`

   


.. conda:package:: unitig-counter

   |downloads_unitig-counter| |docker_unitig-counter|

   :versions: 1.0.4-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pthread-stubs: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unitig-counter

   and update with::

      conda update unitig-counter

   or use the docker container::

      docker pull quay.io/biocontainers/unitig-counter:<tag>

   (see `unitig-counter/tags`_ for valid values for ``<tag>``)


.. |downloads_unitig-counter| image:: https://img.shields.io/conda/dn/bioconda/unitig-counter.svg?style=flat
   :target: https://anaconda.org/bioconda/unitig-counter
   :alt:   (downloads)
.. |docker_unitig-counter| image:: https://quay.io/repository/biocontainers/unitig-counter/status
   :target: https://quay.io/repository/biocontainers/unitig-counter
.. _`unitig-counter/tags`: https://quay.io/repository/biocontainers/unitig-counter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitig-counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitig-counter/README.html