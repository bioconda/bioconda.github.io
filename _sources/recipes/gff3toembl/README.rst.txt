.. title:: Package Recipe 'gff3toembl'
.. highlight: bash


gff3toembl
==========

.. conda:recipe:: gff3toembl
   :replaces_section_title:

   Submitting annotated genomes to EMBL is a very difficult and time consuming process. This software converts GFF3 files from the most commonly use prokaryote annotation tool Prokka into a format that is suitable for submission to EMBL. It has been used to prepare more than 30\% of all annotated genomes in EMBL\/GenBank.

   :homepage: https://github.com/sanger-pathogens/gff3toembl/
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`gff3toembl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toembl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3toembl/meta.yaml>`_

   


.. conda:package:: gff3toembl

   |downloads_gff3toembl| |docker_gff3toembl|

   :versions: 1.1.4

   :depends: :conda:package:`genometools-genometools`  :conda:package:`python` 2.7* :conda:package:`six`  

   :required~by: |required_by_gff3toembl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gff3toembl

   and update with::

      conda update gff3toembl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gff3toembl


.. |required_by_gff3toembl| conda:required_by:: gff3toembl
.. |downloads_gff3toembl| image:: https://img.shields.io/conda/dn/bioconda/gff3toembl.svg?style=flat
   :alt:   (downloads)
.. |docker_gff3toembl| image:: https://quay.io/repository/biocontainers/gff3toembl/status
   :target: https://quay.io/repository/biocontainers/gff3toembl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3toembl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3toembl/README.html

