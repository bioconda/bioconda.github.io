:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pcap'
.. highlight: bash

perl-pcap
=========

.. conda:recipe:: perl-pcap
   :replaces_section_title:
   :noindex:

   NGS reference implementations and helper code for the IGCG\/TCGA Pan\-Cancer Analysis Project

   :homepage: https://github.com/ICGC-TCGA-PanCancer/PCAP-core
   :license: GPLv3
   :recipe: /`perl-pcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pcap/meta.yaml>`_

   


.. conda:package:: perl-pcap

   |downloads_perl-pcap| |docker_perl-pcap|

   :versions:
      
      

      ``3.5.2-1``,  ``3.5.2-0``,  ``1.11.1-2``,  ``1.11.1-1``,  ``1.11.1-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-db-hts: 
   :depends perl-bio-samtools: 
   :depends perl-bioperl: 
   :depends perl-encode-locale: 
   :depends perl-gd: 
   :depends perl-ipc-system-simple: 
   :depends perl-lwp-simple: 
   :depends perl-sanger-cgp-vcf: 
   :depends perl-xml-parser: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pcap

   and update with::

      conda update perl-pcap

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pcap:<tag>

   (see `perl-pcap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pcap| image:: https://img.shields.io/conda/dn/bioconda/perl-pcap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pcap
   :alt:   (downloads)
.. |docker_perl-pcap| image:: https://quay.io/repository/biocontainers/perl-pcap/status
   :target: https://quay.io/repository/biocontainers/perl-pcap
.. _`perl-pcap/tags`: https://quay.io/repository/biocontainers/perl-pcap?tab=tags


.. raw:: html

    <script>
        var package = "perl-pcap";
        var versions = ["3.5.2","3.5.2","1.11.1","1.11.1","1.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pcap/README.html