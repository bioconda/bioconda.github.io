:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsat-core'
.. highlight: bash

rsat-core
=========

.. conda:recipe:: rsat-core
   :replaces_section_title:
   :noindex:

   Detection of regulatory signals in non\-coding sequences.

   :homepage: http://rsat.eu/
   :license: AGPL-3
   :recipe: /`rsat-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsat-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsat-core/meta.yaml>`_
   :links: biotools: :biotools:`rsat`, doi: :doi:`10.1093/nar/gky317`

   


.. conda:package:: rsat-core

   |downloads_rsat-core| |docker_rsat-core|

   :versions:
      
      

      ``2020.02.29-1``,  ``2020.02.29-0``,  ``2020.02.28-0``,  ``2020.01.04-0``

      

   
   :depends bedtools: 
   :depends bioconductor-ctc: 
   :depends bioconductor-qvalue: 
   :depends blast: 
   :depends d3: 
   :depends ghostscript: 
   :depends gnuplot: 
   :depends httplib2: 
   :depends libcxx: ``>=9.0.1``
   :depends libgfortran: ``>=4.0.0,<5.0.0.a0``
   :depends matplotlib: 
   :depends numpy: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-algorithm-cluster: 
   :depends perl-bio-das: 
   :depends perl-bioperl: 
   :depends perl-cgi: 
   :depends perl-class-std-fast: 
   :depends perl-data-dumper: 
   :depends perl-db-file: 
   :depends perl-dbd-mysql: 
   :depends perl-dbi: 
   :depends perl-digest-md5-file: 
   :depends perl-email-simple: 
   :depends perl-ensembl-api: 
   :depends perl-ensembl-genomes: 
   :depends perl-file-spec: 
   :depends perl-gd: 
   :depends perl-http-tiny: 
   :depends perl-io-all: 
   :depends perl-json: 
   :depends perl-lockfile-simple: 
   :depends perl-log-log4perl: 
   :depends perl-lwp-simple: 
   :depends perl-math-cdf: 
   :depends perl-mce-shared: 
   :depends perl-number-format: 
   :depends perl-object-insideout: 
   :depends perl-ole-storage_lite: 
   :depends perl-parallel-forkmanager: 
   :depends perl-posix: 
   :depends perl-readonly: 
   :depends perl-rest-client: 
   :depends perl-soap-lite: 
   :depends perl-spreadsheet-writeexcel: 
   :depends perl-statistics-distributions: 
   :depends perl-util-properties: 
   :depends perl-xml-dom: 
   :depends perl-xml-libxml: 
   :depends perl-xml-parser: 
   :depends perl-yaml: 
   :depends pygraphviz: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: 
   :depends r-amap: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-egg: 
   :depends r-flux: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-jpeg: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rjsonio: 
   :depends r-zoo: 
   :depends scipy: 
   :depends seqlogo: 
   :depends snakemake: 
   :depends vmatch: 
   :depends weblogo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rsat-core

   and update with::

      conda update rsat-core

   or use the docker container::

      docker pull quay.io/biocontainers/rsat-core:<tag>

   (see `rsat-core/tags`_ for valid values for ``<tag>``)


.. |downloads_rsat-core| image:: https://img.shields.io/conda/dn/bioconda/rsat-core.svg?style=flat
   :target: https://anaconda.org/bioconda/rsat-core
   :alt:   (downloads)
.. |docker_rsat-core| image:: https://quay.io/repository/biocontainers/rsat-core/status
   :target: https://quay.io/repository/biocontainers/rsat-core
.. _`rsat-core/tags`: https://quay.io/repository/biocontainers/rsat-core?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsat-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsat-core/README.html