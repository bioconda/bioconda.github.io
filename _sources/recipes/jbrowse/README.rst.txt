.. title:: Package Recipe 'jbrowse'
.. highlight: bash


jbrowse
=======

.. conda:recipe:: jbrowse
   :replaces_section_title:

   The JBrowse Genome Browser

   :homepage: https://jbrowse.org/
   :license: LGPL
   :recipe: /`jbrowse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jbrowse/meta.yaml>`_
   :links: biotools: :biotools:`jbrowse`, doi: :doi:`10.1101/gr.094607.109`

   


.. conda:package:: jbrowse

   |downloads_jbrowse| |docker_jbrowse|

   :versions: 1.16.1, 1.15.4, 1.15.1, 1.15.0, 1.12.5, 1.12.3, 1.12.1

   :depends: :conda:package:`perl`  :conda:package:`perl-bio-featureio`  :conda:package:`perl-bio-gff3`  :conda:package:`perl-bioperl`  :conda:package:`perl-capture-tiny`  :conda:package:`perl-db-file`  :conda:package:`perl-devel-size`  :conda:package:`perl-digest-crc32`  :conda:package:`perl-exporter-tiny`  :conda:package:`perl-file-copy-recursive`  :conda:package:`perl-file-next`  :conda:package:`perl-hash-merge`  :conda:package:`perl-heap-simple`  :conda:package:`perl-io-uncompress-gunzip`  :conda:package:`perl-json`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-local-lib`  :conda:package:`perl-perlio-gzip`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-test-deep`  :conda:package:`perl-test-simple`  :conda:package:`perl-test-warn`  :conda:package:`perl-uri`  

   :required~by: |required_by_jbrowse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jbrowse

   and update with::

      conda update jbrowse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/jbrowse


.. |required_by_jbrowse| conda:required_by:: jbrowse
.. |downloads_jbrowse| image:: https://img.shields.io/conda/dn/bioconda/jbrowse.svg?style=flat
   :alt:   (downloads)
.. |docker_jbrowse| image:: https://quay.io/repository/biocontainers/jbrowse/status
   :target: https://quay.io/repository/biocontainers/jbrowse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jbrowse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jbrowse/README.html

