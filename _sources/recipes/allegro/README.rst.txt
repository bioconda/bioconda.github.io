:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'allegro'
.. highlight: bash

allegro
=======

.. conda:recipe:: allegro
   :replaces_section_title:

   A fast linkage and haplotype analysis utility making use of MTBDD to reduce complexity.

   :homepage: http://www.nature.com/ng/journal/v37/n10/full/ng1005-1015.html?foxtrotcallback=true
   :license: INDIVIDUAL
   :recipe: /`allegro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/allegro/meta.yaml>`_

   


.. conda:package:: allegro

   |downloads_allegro| |docker_allegro|

   :versions: 3-2, 3-1, 2-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install allegro

   and update with::

      conda update allegro

   or use the docker container::

      docker pull quay.io/biocontainers/allegro:<tag>

   (see `allegro/tags`_ for valid values for ``<tag>``)


.. |downloads_allegro| image:: https://img.shields.io/conda/dn/bioconda/allegro.svg?style=flat
   :alt:   (downloads)
.. |docker_allegro| image:: https://quay.io/repository/biocontainers/allegro/status
   :target: https://quay.io/repository/biocontainers/allegro
.. _`allegro/tags`: https://quay.io/repository/biocontainers/allegro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/allegro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/allegro/README.html