.. title:: Package Recipe 'cap-mirseq'
.. highlight: bash


cap-mirseq
==========

.. conda:recipe:: cap-mirseq
   :replaces_section_title:

   A comprehensive analysis pipeline for deep microRNA sequencing

   :homepage: http://bioinformaticstools.mayo.edu/research/cap-mirseq/
   :license: GPL
   :recipe: /`cap-mirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cap-mirseq/meta.yaml>`_

   


.. conda:package:: cap-mirseq

   |downloads_cap-mirseq| |docker_cap-mirseq|

   :versions: version

   :depends: :conda:package:`bedtools` >=2.17.0 :conda:package:`bioconductor-edger` >=3.14.0 :conda:package:`bowtie` >=1.1.2 :conda:package:`fastqc` >=0.11.5 :conda:package:`java-jdk`  :conda:package:`mirdeep2` >=2.0.0.7 :conda:package:`perl-threaded`  :conda:package:`picard` >=1.97 :conda:package:`r-base` 3.2.2* :conda:package:`r-essentials`  :conda:package:`samtools` >=0.1.19 :conda:package:`vcftools` >=0.1.11 

   :required~by: |required_by_cap-mirseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cap-mirseq

   and update with::

      conda update cap-mirseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cap-mirseq


.. |required_by_cap-mirseq| conda:required_by:: cap-mirseq
.. |downloads_cap-mirseq| image:: https://img.shields.io/conda/dn/bioconda/cap-mirseq.svg?style=flat
   :alt:   (downloads)
.. |docker_cap-mirseq| image:: https://quay.io/repository/biocontainers/cap-mirseq/status
   :target: https://quay.io/repository/biocontainers/cap-mirseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cap-mirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cap-mirseq/README.html

