:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmap'
.. highlight: bash

rmap
====

.. conda:recipe:: rmap
   :replaces_section_title:

   rmap is a short reads mapper for next\-generation sequencing data

   :homepage: http://smithlabresearch.org/software/rmap/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmap/meta.yaml>`_
   :links: biotools: :biotools:`rmap`

   


.. conda:package:: rmap

   |downloads_rmap| |docker_rmap|

   :versions: 2.1-1, 2.1-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmap

   and update with::

      conda update rmap

   or use the docker container::

      docker pull quay.io/biocontainers/rmap:<tag>

   (see `rmap/tags`_ for valid values for ``<tag>``)


.. |downloads_rmap| image:: https://img.shields.io/conda/dn/bioconda/rmap.svg?style=flat
   :target: https://anaconda.org/bioconda/rmap
   :alt:   (downloads)
.. |docker_rmap| image:: https://quay.io/repository/biocontainers/rmap/status
   :target: https://quay.io/repository/biocontainers/rmap
.. _`rmap/tags`: https://quay.io/repository/biocontainers/rmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmap/README.html