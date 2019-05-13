:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hotspot3d'
.. highlight: bash

hotspot3d
=========

.. conda:recipe:: hotspot3d
   :replaces_section_title:

   This 3D proximity tool can be used to identify mutation hotspots from linear protein sequence and correlate the hotspots with known or potentially interacting domains\, mutations\, or drugs. Mutation\-mutation and mutation\-drug clusters can also be identified and viewed.

   :homepage: https://github.com/ding-lab/hotspot3d
   :license: GPL / GPLv3
   :recipe: /`hotspot3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hotspot3d/meta.yaml>`_

   


.. conda:package:: hotspot3d

   |downloads_hotspot3d| |docker_hotspot3d|

   :versions: 1.8.2-0, 0.6.0-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-archive-extract: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-list-util: 
   :depends perl-lwp-simple: 
   :depends perl-parallel-forkmanager: 
   :depends perl-test-most: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hotspot3d

   and update with::

      conda update hotspot3d

   or use the docker container::

      docker pull quay.io/biocontainers/hotspot3d:<tag>

   (see `hotspot3d/tags`_ for valid values for ``<tag>``)


.. |downloads_hotspot3d| image:: https://img.shields.io/conda/dn/bioconda/hotspot3d.svg?style=flat
   :target: https://anaconda.org/bioconda/hotspot3d
   :alt:   (downloads)
.. |docker_hotspot3d| image:: https://quay.io/repository/biocontainers/hotspot3d/status
   :target: https://quay.io/repository/biocontainers/hotspot3d
.. _`hotspot3d/tags`: https://quay.io/repository/biocontainers/hotspot3d?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hotspot3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hotspot3d/README.html