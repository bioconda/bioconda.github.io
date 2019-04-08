:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipandmerge'
.. highlight: bash

clipandmerge
============

.. conda:recipe:: clipandmerge
   :replaces_section_title:

   Clip\&Merge is a tool to clip off adapters from sequencing reads and merge overlapping paired end reads together.

   :homepage: https://github.com/apeltzer/ClipAndMerge
   :license: GPLv3
   :recipe: /`clipandmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipandmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipandmerge/meta.yaml>`_

   


.. conda:package:: clipandmerge

   |downloads_clipandmerge| |docker_clipandmerge|

   :versions: 1.7.8-1, 1.7.8-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clipandmerge

   and update with::

      conda update clipandmerge

   or use the docker container::

      docker pull quay.io/biocontainers/clipandmerge:<tag>

   (see `clipandmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_clipandmerge| image:: https://img.shields.io/conda/dn/bioconda/clipandmerge.svg?style=flat
   :alt:   (downloads)
.. |docker_clipandmerge| image:: https://quay.io/repository/biocontainers/clipandmerge/status
   :target: https://quay.io/repository/biocontainers/clipandmerge
.. _`clipandmerge/tags`: https://quay.io/repository/biocontainers/clipandmerge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipandmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipandmerge/README.html