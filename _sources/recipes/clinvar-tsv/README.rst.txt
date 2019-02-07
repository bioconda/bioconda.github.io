.. title:: Package Recipe 'clinvar-tsv'
.. highlight: bash


clinvar-tsv
===========

.. conda:recipe:: clinvar-tsv
   :replaces_section_title:

   A Snakemake\-based program to download ClinVar and convert to easy\-to\-use TSV files.

   :homepage: https://github.com/bihealth/clinvar-tsv
   :license: MIT
   :recipe: /`clinvar-tsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-tsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinvar-tsv/meta.yaml>`_

   


.. conda:package:: clinvar-tsv

   |downloads_clinvar-tsv| |docker_clinvar-tsv|

   :versions: 0.1.0

   :depends: :conda:package:`pysam` >=0.15.1 :conda:package:`python` >=3.5 :conda:package:`snakemake-minimal` >=5.3.0 

   :required~by: |required_by_clinvar-tsv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clinvar-tsv

   and update with::

      conda update clinvar-tsv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/clinvar-tsv


.. |required_by_clinvar-tsv| conda:required_by:: clinvar-tsv
.. |downloads_clinvar-tsv| image:: https://img.shields.io/conda/dn/bioconda/clinvar-tsv.svg?style=flat
   :alt:   (downloads)
.. |docker_clinvar-tsv| image:: https://quay.io/repository/biocontainers/clinvar-tsv/status
   :target: https://quay.io/repository/biocontainers/clinvar-tsv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinvar-tsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinvar-tsv/README.html

