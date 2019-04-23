:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsm-lite'
.. highlight: bash

fsm-lite
========

.. conda:recipe:: fsm-lite
   :replaces_section_title:

   Frequency\-based String Mining \(lite\)

   :homepage: https://github.com/nvalimak/fsm-lite
   :license: GPL / GPL-3
   :recipe: /`fsm-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite/meta.yaml>`_
   :links: doi: :doi:`10.1038/ncomms12797`

   A single\-core implemetation of frequency\-based substring mining. Used to
   count k\-mers in populations of genomes \(supplied as fasta files\).



.. conda:package:: fsm-lite

   |downloads_fsm-lite| |docker_fsm-lite|

   :versions: 1.0-0
   
   :depends sdsl-lite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fsm-lite

   and update with::

      conda update fsm-lite

   or use the docker container::

      docker pull quay.io/biocontainers/fsm-lite:<tag>

   (see `fsm-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_fsm-lite| image:: https://img.shields.io/conda/dn/bioconda/fsm-lite.svg?style=flat
   :alt:   (downloads)
.. |docker_fsm-lite| image:: https://quay.io/repository/biocontainers/fsm-lite/status
   :target: https://quay.io/repository/biocontainers/fsm-lite
.. _`fsm-lite/tags`: https://quay.io/repository/biocontainers/fsm-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsm-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsm-lite/README.html