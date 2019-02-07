.. title:: Package Recipe 'vcfkit'
.. highlight: bash


vcfkit
======

.. conda:recipe:: vcfkit
   :replaces_section_title:

   Assorted utilities for the variant call format

   :homepage: https://github.com/AndersenLab/VCF-kit
   :license: MIT / MIT License
   :recipe: /`vcfkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfkit/meta.yaml>`_

   


.. conda:package:: vcfkit

   |downloads_vcfkit| |docker_vcfkit|

   :versions: 0.1.6, 0.0.4

   :depends: :conda:package:`awesome-slugify`  :conda:package:`biopython`  :conda:package:`clint`  :conda:package:`cython`  :conda:package:`cyvcf2` >=0.1.9 :conda:package:`docopt`  :conda:package:`intervaltree`  :conda:package:`jinja2`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pytest-runner`  :conda:package:`python` 2.7* :conda:package:`requests`  :conda:package:`scipy`  :conda:package:`tabulate`  :conda:package:`yahmm`  :conda:package:`yahmm`  

   :required~by: |required_by_vcfkit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcfkit

   and update with::

      conda update vcfkit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcfkit


.. |required_by_vcfkit| conda:required_by:: vcfkit
.. |downloads_vcfkit| image:: https://img.shields.io/conda/dn/bioconda/vcfkit.svg?style=flat
   :alt:   (downloads)
.. |docker_vcfkit| image:: https://quay.io/repository/biocontainers/vcfkit/status
   :target: https://quay.io/repository/biocontainers/vcfkit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfkit/README.html

