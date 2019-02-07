.. title:: Package Recipe 'repenrich'
.. highlight: bash


repenrich
=========

.. conda:recipe:: repenrich
   :replaces_section_title:

   RepEnrich is a method to estimate repetitive element enrichment using high\-throughput sequencing data.

   :homepage: https://github.com/nskvir/RepEnrich
   :license: Custom OSS
   :recipe: /`repenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repenrich/meta.yaml>`_

   


.. conda:package:: repenrich

   |downloads_repenrich| |docker_repenrich|

   :versions: 1.2

   :depends: :conda:package:`bedtools` <2.24.0 :conda:package:`biopython`  :conda:package:`bowtie`  :conda:package:`python` 2.7* :conda:package:`samtools`  

   :required~by: |required_by_repenrich|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repenrich

   and update with::

      conda update repenrich

   or use the docker container::

      docker pull quay.io/repository/biocontainers/repenrich


.. |required_by_repenrich| conda:required_by:: repenrich
.. |downloads_repenrich| image:: https://img.shields.io/conda/dn/bioconda/repenrich.svg?style=flat
   :alt:   (downloads)
.. |docker_repenrich| image:: https://quay.io/repository/biocontainers/repenrich/status
   :target: https://quay.io/repository/biocontainers/repenrich







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repenrich/README.html

