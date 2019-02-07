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

   :versions: 0.4.0, 0.3.0

   :depends: :conda:package:`bowtie2` >=2.1 :conda:package:`gmap` >=2017.11.15 :conda:package:`perl` 5.22.0* :conda:package:`perl-db-file`  :conda:package:`perl-set-intervaltree`  :conda:package:`samtools` >=1.3 

   :required~by: |required_by_gmap-fusion|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gmap-fusion

   and update with::

      conda update gmap-fusion

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gmap-fusion


.. |required_by_gmap-fusion| conda:required_by:: gmap-fusion
.. |downloads_gmap-fusion| image:: https://img.shields.io/conda/dn/bioconda/gmap-fusion.svg?style=flat
   :alt:   (downloads)
.. |docker_gmap-fusion| image:: https://quay.io/repository/biocontainers/gmap-fusion/status
   :target: https://quay.io/repository/biocontainers/gmap-fusion







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap-fusion/README.html

