.. title:: Package Recipe 'perl-pcap'
.. highlight: bash


perl-pcap
=========

.. conda:recipe:: perl-pcap
   :replaces_section_title:

   NGS reference implementations and helper code for the IGCG\/TCGA Pan\-Cancer Analysis Project

   :homepage: https://github.com/ICGC-TCGA-PanCancer/PCAP-core
   :license: GPLv3
   :recipe: /`perl-pcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap/meta.yaml>`_

   


.. conda:package:: perl-pcap

   |downloads_perl-pcap| |docker_perl-pcap|

   :versions: 1.11.1

   :depends: :conda:package:`perl-bio-db-sam`  :conda:package:`perl-bioperl`  :conda:package:`perl-encode-locale`  :conda:package:`perl-encode-locale`  :conda:package:`perl-gd`  :conda:package:`perl-ipc-system-simple`  :conda:package:`perl-lwp-simple`  :conda:package:`perl-sanger-cgp-vcf`  :conda:package:`perl-threaded`  :conda:package:`perl-xml-parser`  

   :required~by: |required_by_perl-pcap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pcap

   and update with::

      conda update perl-pcap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pcap


.. |required_by_perl-pcap| conda:required_by:: perl-pcap
.. |downloads_perl-pcap| image:: https://img.shields.io/conda/dn/bioconda/perl-pcap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pcap| image:: https://quay.io/repository/biocontainers/perl-pcap/status
   :target: https://quay.io/repository/biocontainers/perl-pcap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pcap/README.html

