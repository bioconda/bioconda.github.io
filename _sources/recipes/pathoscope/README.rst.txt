.. title:: Package Recipe 'pathoscope'
.. highlight: bash


pathoscope
==========

.. conda:recipe:: pathoscope
   :replaces_section_title:

   Species identification and strain attribution with unassembled sequencing data

   :homepage: https://github.com/PathoScope/PathoScope
   :license: GPLv3
   :recipe: /`pathoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope/meta.yaml>`_

   


.. conda:package:: pathoscope

   |downloads_pathoscope| |docker_pathoscope|

   :versions: 2.0.6

   :depends: :conda:package:`bowtie2`  :conda:package:`python` 2.7* :conda:package:`samtools` <1.0 

   :required~by: |required_by_pathoscope|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathoscope

   and update with::

      conda update pathoscope

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pathoscope


.. |required_by_pathoscope| conda:required_by:: pathoscope
.. |downloads_pathoscope| image:: https://img.shields.io/conda/dn/bioconda/pathoscope.svg?style=flat
   :alt:   (downloads)
.. |docker_pathoscope| image:: https://quay.io/repository/biocontainers/pathoscope/status
   :target: https://quay.io/repository/biocontainers/pathoscope







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathoscope/README.html

