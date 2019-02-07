.. title:: Package Recipe 'relocate2'
.. highlight: bash


relocate2
=========

.. conda:recipe:: relocate2
   :replaces_section_title:

   a high resolution transposable element insertion sites mapping tool for population resequencing

   :homepage: https://github.com/stajichlab/RelocaTE2
   :license: unknown
   :recipe: /`relocate2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relocate2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/relocate2/meta.yaml>`_

   


.. conda:package:: relocate2

   |downloads_relocate2| |docker_relocate2|

   :versions: 2.0.1, 2.0.0

   :depends: :conda:package:`bedtools` ==2.26.0-0 :conda:package:`blat` ==35 :conda:package:`bowtie2` ==2.2.8 :conda:package:`bwa` ==0.6.2-0 :conda:package:`perl` >=5.10.0 :conda:package:`pysam` ==0.9.0 :conda:package:`python` ==2.7.5 :conda:package:`samtools` ==1.3-0 :conda:package:`seqtk` ==1.2-0 

   :required~by: |required_by_relocate2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install relocate2

   and update with::

      conda update relocate2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/relocate2


.. |required_by_relocate2| conda:required_by:: relocate2
.. |downloads_relocate2| image:: https://img.shields.io/conda/dn/bioconda/relocate2.svg?style=flat
   :alt:   (downloads)
.. |docker_relocate2| image:: https://quay.io/repository/biocontainers/relocate2/status
   :target: https://quay.io/repository/biocontainers/relocate2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/relocate2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/relocate2/README.html

