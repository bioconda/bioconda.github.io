:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdp-readseq'
.. highlight: bash

rdp-readseq
===========

.. conda:recipe:: rdp-readseq
   :replaces_section_title:

   Java based common sequence file format reader and sequence file manipulation.

   :homepage: https://github.com/rdpstaff/ReadSeq
   :license: GPL
   :recipe: /`rdp-readseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp-readseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdp-readseq/meta.yaml>`_

   


.. conda:package:: rdp-readseq

   |downloads_rdp-readseq| |docker_rdp-readseq|

   :versions: 2.0.2-1, 2.0.2-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdp-readseq

   and update with::

      conda update rdp-readseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rdp-readseq:<tag>

   (see `rdp-readseq/tags`_ for valid values for ``<tag>``)


.. |downloads_rdp-readseq| image:: https://img.shields.io/conda/dn/bioconda/rdp-readseq.svg?style=flat
   :alt:   (downloads)
.. |docker_rdp-readseq| image:: https://quay.io/repository/biocontainers/rdp-readseq/status
   :target: https://quay.io/repository/biocontainers/rdp-readseq
.. _`rdp-readseq/tags`: https://quay.io/repository/biocontainers/rdp-readseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdp-readseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdp-readseq/README.html