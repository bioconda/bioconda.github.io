:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selectfasta'
.. highlight: bash

selectfasta
===========

.. conda:recipe:: selectfasta
   :replaces_section_title:

   FASTA or FASTQ select from a list of header names

   :homepage: https://github.com/andvides/selectFasta/
   :license: GPL / GPL-3.0
   :recipe: /`selectfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectfasta/meta.yaml>`_

   


.. conda:package:: selectfasta

   |downloads_selectfasta| |docker_selectfasta|

   :versions: 1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selectfasta

   and update with::

      conda update selectfasta

   or use the docker container::

      docker pull quay.io/biocontainers/selectfasta:<tag>

   (see `selectfasta/tags`_ for valid values for ``<tag>``)


.. |downloads_selectfasta| image:: https://img.shields.io/conda/dn/bioconda/selectfasta.svg?style=flat
   :target: https://anaconda.org/bioconda/selectfasta
   :alt:   (downloads)
.. |docker_selectfasta| image:: https://quay.io/repository/biocontainers/selectfasta/status
   :target: https://quay.io/repository/biocontainers/selectfasta
.. _`selectfasta/tags`: https://quay.io/repository/biocontainers/selectfasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selectfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selectfasta/README.html