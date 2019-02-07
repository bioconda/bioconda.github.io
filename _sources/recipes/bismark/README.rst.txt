.. title:: Package Recipe 'bismark'
.. highlight: bash


bismark
=======

.. conda:recipe:: bismark
   :replaces_section_title:

   Bismark is a program to map bisulfite treated sequencing reads to a genome of interest and perform methylation calls in a single step. The output can be easily imported into a genome viewer\, such as SeqMonk\, and enables a researcher to analyse the methylation levels of their samples straight away.

   :homepage: https://www.bioinformatics.babraham.ac.uk/projects/bismark/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`bismark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bismark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bismark/meta.yaml>`_
   :links: biotools: :biotools:`bismark`

   


.. conda:package:: bismark

   |downloads_bismark| |docker_bismark|

   :versions: 0.20.0, 0.19.1, 0.19.0, 0.18.1, 0.17.0

   :depends: :conda:package:`bowtie2`  :conda:package:`perl`  :conda:package:`samtools`  

   :required~by: |required_by_bismark|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bismark

   and update with::

      conda update bismark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bismark


.. |required_by_bismark| conda:required_by:: bismark
.. |downloads_bismark| image:: https://img.shields.io/conda/dn/bioconda/bismark.svg?style=flat
   :alt:   (downloads)
.. |docker_bismark| image:: https://quay.io/repository/biocontainers/bismark/status
   :target: https://quay.io/repository/biocontainers/bismark







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bismark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bismark/README.html

