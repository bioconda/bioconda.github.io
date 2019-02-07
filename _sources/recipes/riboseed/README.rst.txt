.. title:: Package Recipe 'riboseed'
.. highlight: bash


riboseed
========

.. conda:recipe:: riboseed
   :replaces_section_title:

   riboSeed\: assemble across rDNA regions

   :homepage: https://github.com/nickp60/riboSeed
   :license: MIT / MIT License
   :recipe: /`riboseed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseed/meta.yaml>`_

   Genome assembly polisher to bridge rDNA gaps


.. conda:package:: riboseed

   |downloads_riboseed| |docker_riboseed|

   :versions: 0.4.73, 0.4.71, 0.4.70, 0.4.68, 0.4.67, 0.4.65, 0.4.47, 0.4.16

   :depends: :conda:package:`barrnap` 0.7 :conda:package:`bcftools` 1.5 :conda:package:`biopython` 1.68 :conda:package:`bwa` 0.7.8 :conda:package:`coverage` 4.4.1 :conda:package:`emboss`  :conda:package:`jenkspy` 0.1.4 :conda:package:`mafft`  :conda:package:`matplotlib` 1.5.3 :conda:package:`networkx` 2.1 :conda:package:`nose` 1.3.7 :conda:package:`pandas` 0.20.1 :conda:package:`prank`  :conda:package:`pyaml` 17.8.0 :conda:package:`pysam` 0.11.2.2 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools` 1.4.1 :conda:package:`spades` 3.9.0 

   :required~by: |required_by_riboseed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboseed

   and update with::

      conda update riboseed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/riboseed


.. |required_by_riboseed| conda:required_by:: riboseed
.. |downloads_riboseed| image:: https://img.shields.io/conda/dn/bioconda/riboseed.svg?style=flat
   :alt:   (downloads)
.. |docker_riboseed| image:: https://quay.io/repository/biocontainers/riboseed/status
   :target: https://quay.io/repository/biocontainers/riboseed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseed/README.html

