:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmap-fusion'
.. highlight: bash

gmap-fusion
===========

.. conda:recipe:: gmap-fusion
   :replaces_section_title:

   GMAP\-fusion is a utility for identifying candidate fusion transcripts based on transcript sequences reconstructed via RNA\-Seq de novo transcriptome assembly.

   :homepage: https://github.com/GMAP-fusion/GMAP-fusion
   :license: BSD-3-Clause
   :recipe: /`gmap-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap-fusion/meta.yaml>`_

   


.. conda:package:: gmap-fusion

   |downloads_gmap-fusion| |docker_gmap-fusion|

   :versions: 0.4.0-2, 0.4.0-0, 0.3.0-1
   
   :depends bowtie2: >=2.1
   :depends gmap: >=2017.11.15
   :depends perl: 
   :depends perl-db-file: 
   :depends perl-set-intervaltree: 
   :depends samtools: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmap-fusion

   and update with::

      conda update gmap-fusion

   or use the docker container::

      docker pull quay.io/biocontainers/gmap-fusion:<tag>

   (see `gmap-fusion/tags`_ for valid values for ``<tag>``)


.. |downloads_gmap-fusion| image:: https://img.shields.io/conda/dn/bioconda/gmap-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/gmap-fusion
   :alt:   (downloads)
.. |docker_gmap-fusion| image:: https://quay.io/repository/biocontainers/gmap-fusion/status
   :target: https://quay.io/repository/biocontainers/gmap-fusion
.. _`gmap-fusion/tags`: https://quay.io/repository/biocontainers/gmap-fusion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap-fusion/README.html