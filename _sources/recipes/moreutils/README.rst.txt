:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moreutils'
.. highlight: bash

moreutils
=========

.. conda:recipe:: moreutils
   :replaces_section_title:

   a growing collection of the unix tools that nobody thought to write long ago when unix was young

   :homepage: http://joeyh.name/code/moreutils/
   :license: GPLv2
   :recipe: /`moreutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moreutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moreutils/meta.yaml>`_

   


.. conda:package:: moreutils

   |downloads_moreutils| |docker_moreutils|

   :versions: 0.5.7-1, 0.5.7-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moreutils

   and update with::

      conda update moreutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/moreutils:<tag>

   (see `moreutils/tags`_ for valid values for ``<tag>``)


.. |downloads_moreutils| image:: https://img.shields.io/conda/dn/bioconda/moreutils.svg?style=flat
   :alt:   (downloads)
.. |docker_moreutils| image:: https://quay.io/repository/biocontainers/moreutils/status
   :target: https://quay.io/repository/biocontainers/moreutils
.. _`moreutils/tags`: https://quay.io/repository/biocontainers/moreutils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moreutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moreutils/README.html