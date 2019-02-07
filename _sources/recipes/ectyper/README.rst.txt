.. title:: Package Recipe 'ectyper'
.. highlight: bash


ectyper
=======

.. conda:recipe:: ectyper
   :replaces_section_title:

   ECTyper is a python program for serotyping E. coli genomes

   :homepage: https://github.com/phac-nml/ecoli_serotyping
   :license: Apache 2
   :recipe: /`ectyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ectyper/meta.yaml>`_

   


.. conda:package:: ectyper

   |downloads_ectyper| |docker_ectyper|

   :versions: 0.8.1, 0.5.4, 0.1

   :depends: :conda:package:`bcftools` >=1.8 :conda:package:`biopython` >=1.7.1 :conda:package:`blast` >=2.7.1 :conda:package:`bowtie2` >=2.3.4.1 :conda:package:`mash` >=2.0 :conda:package:`pandas` >=0.23.1 :conda:package:`pytest` >=3.5 :conda:package:`python` >=3.5 :conda:package:`samtools` >=1.8 :conda:package:`seqtk` >=1.2 

   :required~by: |required_by_ectyper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ectyper

   and update with::

      conda update ectyper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ectyper


.. |required_by_ectyper| conda:required_by:: ectyper
.. |downloads_ectyper| image:: https://img.shields.io/conda/dn/bioconda/ectyper.svg?style=flat
   :alt:   (downloads)
.. |docker_ectyper| image:: https://quay.io/repository/biocontainers/ectyper/status
   :target: https://quay.io/repository/biocontainers/ectyper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ectyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ectyper/README.html

