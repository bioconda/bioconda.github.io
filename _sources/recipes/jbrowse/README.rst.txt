:orphan:  .. only available via index, not via toctree

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

   :versions: 1.16.2-5, 1.16.2-4, 1.16.1-4, 1.16.1-3, 1.16.1-2, 1.16.1-1, 1.16.1-0, 1.15.4-0, 1.15.1-0, 1.15.0-0, 1.12.5-2, 1.12.5-0, 1.12.3-0, 1.12.1-3, 1.12.1-2, 1.12.1-1, 1.12.1-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-bio-featureio: 
   
   :depends perl-bio-gff3: 
   
   :depends perl-bioperl: 
   
   :depends perl-capture-tiny: 
   
   :depends perl-db-file: 
   
   :depends perl-devel-size: 
   
   :depends perl-digest-crc32: 
   
   :depends perl-exporter-tiny: 
   
   :depends perl-file-copy-recursive: 
   
   :depends perl-file-next: 
   
   :depends perl-hash-merge: 
   
   :depends perl-heap-simple: 
   
   :depends perl-io-uncompress-gunzip: 
   
   :depends perl-json: 
   
   :depends perl-list-moreutils: 
   
   :depends perl-local-lib: 
   
   :depends perl-perlio-gzip: 
   
   :depends perl-scalar-list-utils: 
   
   :depends perl-test-deep: 
   
   :depends perl-test-simple: 
   
   :depends perl-test-warn: 
   
   :depends perl-uri: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jbrowse

   and update with::

      conda update jbrowse

   or use the docker container::

      docker pull quay.io/biocontainers/jbrowse:<tag>

   (see `jbrowse/tags`_ for valid values for ``<tag>``)


.. |downloads_jbrowse| image:: https://img.shields.io/conda/dn/bioconda/jbrowse.svg?style=flat
   :alt:   (downloads)
.. |docker_jbrowse| image:: https://quay.io/repository/biocontainers/jbrowse/status
   :target: https://quay.io/repository/biocontainers/jbrowse
.. _`jbrowse/tags`: https://quay.io/repository/biocontainers/jbrowse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jbrowse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jbrowse/README.html