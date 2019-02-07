.. title:: Package Recipe 'metaxa'
.. highlight: bash


metaxa
======

.. conda:recipe:: metaxa
   :replaces_section_title:

   Improved Identification and Taxonomic Classification of Small and Large Subunit rRNA in Metagenomic Data.

   :homepage: http://microbiology.se/software/metaxa2/
   :license: GPL3
   :recipe: /`metaxa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaxa/meta.yaml>`_
   :links: biotools: :biotools:`metaxa`, doi: :doi:`10.1111/1755-0998.12399`, doi: :doi:`10.1093/bioinformatics/bty482`

   


.. conda:package:: metaxa

   |downloads_metaxa| |docker_metaxa|

   :versions: 2.2

   :depends: :conda:package:`blast` 2.2.* :conda:package:`hmmer` 3.1.* :conda:package:`mafft` 7.* :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`vsearch` 2.7.0.* 

   :required~by: |required_by_metaxa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaxa

   and update with::

      conda update metaxa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaxa


.. |required_by_metaxa| conda:required_by:: metaxa
.. |downloads_metaxa| image:: https://img.shields.io/conda/dn/bioconda/metaxa.svg?style=flat
   :alt:   (downloads)
.. |docker_metaxa| image:: https://quay.io/repository/biocontainers/metaxa/status
   :target: https://quay.io/repository/biocontainers/metaxa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaxa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaxa/README.html

