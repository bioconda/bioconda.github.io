:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pal2nal'
.. highlight: bash

pal2nal
=======

.. conda:recipe:: pal2nal
   :replaces_section_title:

   robust conversion of protein sequence alignments into the corresponding codon alignments

   :homepage: http://www.bork.embl.de/pal2nal/
   :license: GPL / GPLv2.0
   :recipe: /`pal2nal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pal2nal/meta.yaml>`_
   :links: biotools: :biotools:`pal2nal`

   


.. conda:package:: pal2nal

   |downloads_pal2nal| |docker_pal2nal|

   :versions: 14.1-1, 14.1-0, 14-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-getopt-long: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pal2nal

   and update with::

      conda update pal2nal

   or use the docker container::

      docker pull quay.io/biocontainers/pal2nal:<tag>

   (see `pal2nal/tags`_ for valid values for ``<tag>``)


.. |downloads_pal2nal| image:: https://img.shields.io/conda/dn/bioconda/pal2nal.svg?style=flat
   :target: https://anaconda.org/bioconda/pal2nal
   :alt:   (downloads)
.. |docker_pal2nal| image:: https://quay.io/repository/biocontainers/pal2nal/status
   :target: https://quay.io/repository/biocontainers/pal2nal
.. _`pal2nal/tags`: https://quay.io/repository/biocontainers/pal2nal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pal2nal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pal2nal/README.html