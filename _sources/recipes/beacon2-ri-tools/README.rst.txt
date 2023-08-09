:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beacon2-ri-tools'
.. highlight: bash

beacon2-ri-tools
================

.. conda:recipe:: beacon2-ri-tools
   :replaces_section_title:
   :noindex:

   Script to parse a VCF having SnepEff\/SnpSift annotations

   :homepage: https://github.com/EGA-archive/beacon2-ri-tools/tree/main
   :license: GPL-3.0-only
   :recipe: /`beacon2-ri-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools/meta.yaml>`_

   Beacon v2 Reference Implementation \(Data ingestion tools\)


.. conda:package:: beacon2-ri-tools

   |downloads_beacon2-ri-tools| |docker_beacon2-ri-tools|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends json_schema_validator: 
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-autodie: 
   :depends perl-data-dumper: 
   :depends perl-data-structure-util: 
   :depends perl-date-calc: 
   :depends perl-encode: 
   :depends perl-excel-writer-xlsx: 
   :depends perl-file-which: 
   :depends perl-json-validator: 
   :depends perl-json-xs: 
   :depends perl-list-moreutils: 
   :depends perl-minion: 
   :depends perl-minion-backend-sqlite: 
   :depends perl-mojolicious: 
   :depends perl-path-tiny: 
   :depends perl-perldoc: 
   :depends perl-perlio-gzip: 
   :depends perl-text-csv_xs: 
   :depends perl-text-unidecode: 
   :depends perl-yaml-libyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install beacon2-ri-tools

   and update with::

      conda update beacon2-ri-tools

   or use the docker container::

      docker pull quay.io/biocontainers/beacon2-ri-tools:<tag>

   (see `beacon2-ri-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_beacon2-ri-tools| image:: https://img.shields.io/conda/dn/bioconda/beacon2-ri-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/beacon2-ri-tools
   :alt:   (downloads)
.. |docker_beacon2-ri-tools| image:: https://quay.io/repository/biocontainers/beacon2-ri-tools/status
   :target: https://quay.io/repository/biocontainers/beacon2-ri-tools
.. _`beacon2-ri-tools/tags`: https://quay.io/repository/biocontainers/beacon2-ri-tools?tab=tags


.. raw:: html

    <script>
        var package = "beacon2-ri-tools";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beacon2-ri-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beacon2-ri-tools/README.html