:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqmap'
.. highlight: bash

seqmap
======

.. conda:recipe:: seqmap
   :replaces_section_title:

   SeqMap is a tool for mapping large amount of oligonucleotide to the genome.

   :homepage: http://www-personal.umich.edu/~jianghui/seqmap/
   :license: Custom OSS
   :recipe: /`seqmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmap/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1093/bioinformatics/btn429`

   


.. conda:package:: seqmap

   |downloads_seqmap| |docker_seqmap|

   :versions: 1.0.13-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqmap

   and update with::

      conda update seqmap

   or use the docker container::

      docker pull quay.io/biocontainers/seqmap:<tag>

   (see `seqmap/tags`_ for valid values for ``<tag>``)


.. |downloads_seqmap| image:: https://img.shields.io/conda/dn/bioconda/seqmap.svg?style=flat
   :target: https://anaconda.org/bioconda/seqmap
   :alt:   (downloads)
.. |docker_seqmap| image:: https://quay.io/repository/biocontainers/seqmap/status
   :target: https://quay.io/repository/biocontainers/seqmap
.. _`seqmap/tags`: https://quay.io/repository/biocontainers/seqmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqmap/README.html