.. title:: Package Recipe 'shovill'
.. highlight: bash


shovill
=======

.. conda:recipe:: shovill
   :replaces_section_title:

   Microbial assembly pipeline for Illumina paired\-end reads

   :homepage: https://github.com/tseemann/shovill
   :license: GPL2
   :recipe: /`shovill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill/meta.yaml>`_

   


.. conda:package:: shovill

   |downloads_shovill| |docker_shovill|

   :versions: 1.0.4, 1.0.1, 1.0.0, 0.9.0, 0.8.0, 0.7.1

   :depends: :conda:package:`bwa` >=0.7.17 :conda:package:`flash` >=1.2 :conda:package:`lighter` >=1.1 :conda:package:`mash` >=2.1 :conda:package:`megahit` >=1.1 :conda:package:`perl`  :conda:package:`perl-file-spec`  :conda:package:`perl-findbin`  :conda:package:`pigz`  :conda:package:`pilon` >=1.22 :conda:package:`samclip` >=0.2 :conda:package:`samtools` >=1.8 :conda:package:`seqtk` >=1.3 :conda:package:`skesa` >=2.2 :conda:package:`spades` >=3.6 :conda:package:`trimmomatic` >=0.36 :conda:package:`velvet` >=1.2.10 

   :required~by: |required_by_shovill|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shovill

   and update with::

      conda update shovill

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shovill


.. |required_by_shovill| conda:required_by:: shovill
.. |downloads_shovill| image:: https://img.shields.io/conda/dn/bioconda/shovill.svg?style=flat
   :alt:   (downloads)
.. |docker_shovill| image:: https://quay.io/repository/biocontainers/shovill/status
   :target: https://quay.io/repository/biocontainers/shovill







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill/README.html

