.. title:: Package Recipe 'trimmomatic'
.. highlight: bash


trimmomatic
===========

.. conda:recipe:: trimmomatic
   :replaces_section_title:

   A flexible read trimming tool for Illumina NGS data

   :homepage: http://www.usadellab.org/cms/?page=trimmomatic
   :license: GPLv3
   :recipe: /`trimmomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic/meta.yaml>`_
   :links: biotools: :biotools:`trimmomatic`, doi: :doi:`10.1093/bioinformatics/btu170`

   


.. conda:package:: trimmomatic

   |downloads_trimmomatic| |docker_trimmomatic|

   :versions: 0.38, 0.36, 0.35, 0.33, 0.32

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_trimmomatic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trimmomatic

   and update with::

      conda update trimmomatic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trimmomatic


.. |required_by_trimmomatic| conda:required_by:: trimmomatic
.. |downloads_trimmomatic| image:: https://img.shields.io/conda/dn/bioconda/trimmomatic.svg?style=flat
   :alt:   (downloads)
.. |docker_trimmomatic| image:: https://quay.io/repository/biocontainers/trimmomatic/status
   :target: https://quay.io/repository/biocontainers/trimmomatic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimmomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimmomatic/README.html

