:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsat-core'
.. highlight: bash

rsat-core
=========

.. conda:recipe:: rsat-core
   :replaces_section_title:
   :noindex:

   Regulatory Sequence Analysis Tools \(RSAT\)

   :homepage: http://rsat.eu
   :license: GNU Affero General Public License v3
   :recipe: /`rsat-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsat-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsat-core/meta.yaml>`_
   :links: biotools: :biotools:`rsat`, doi: :doi:`10.1093/nar/gky317`

   Detection and analysis of regulatory signals in non\-coding sequences.


.. conda:package:: rsat-core

   |downloads_rsat-core| |docker_rsat-core|

   :versions:
      
      

      ``2025.04.04-0``,  ``2020.02.29-1``,  ``2020.02.29-0``,  ``2020.02.28-0``,  ``2020.01.04-0``

      

   
   :depends bedtools: 
   :depends bioconductor-ctc: 
   :depends bioconductor-qvalue: 
   :depends blast: 
   :depends d3: 
   :depends ghostscript: 
   :depends gnuplot: 
   :depends httplib2: 
   :depends libcxx: ``>=18``
   :depends libgfortran: ``5.*``
   :depends libgfortran5: ``>=13.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends opencv: 
   :depends perl: 
   :depends perl-algorithm-cluster: 
   :depends perl-app-cpanminus: 
   :depends perl-bio-das: 
   :depends perl-bioperl: 
   :depends perl-cgi: 
   :depends perl-class-std-fast: 
   :depends perl-data-dumper: 
   :depends perl-db_file: 
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
   :depends perl-parallel-forkmanager: 
   :depends perl-posix: 
   :depends perl-postscript-simple: 
   :depends perl-readonly: 
   :depends perl-rest-client: 
   :depends perl-soap-lite: 
   :depends perl-statistics-distributions: 
   :depends perl-util-properties: 
   :depends perl-xml-dom: 
   :depends perl-xml-libxml: 
   :depends perl-xml-parser: 
   :depends perl-yaml: 
   :depends pygraphviz: 
   :depends python: 
   :depends pyyaml: 
   :depends r-amap: 
   :depends r-base: 
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

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rsat-core

   and update with::

      mamba update rsat-core

  To create a new environment, run::

      mamba create --name myenvname rsat-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rsat-core:<tag>

   (see `rsat-core/tags`_ for valid values for ``<tag>``)


.. |downloads_rsat-core| image:: https://img.shields.io/conda/dn/bioconda/rsat-core.svg?style=flat
   :target: https://anaconda.org/bioconda/rsat-core
   :alt:   (downloads)
.. |docker_rsat-core| image:: https://quay.io/repository/biocontainers/rsat-core/status
   :target: https://quay.io/repository/biocontainers/rsat-core
.. _`rsat-core/tags`: https://quay.io/repository/biocontainers/rsat-core?tab=tags


.. raw:: html

    <script>
        var package = "rsat-core";
        var versions = ["2025.04.04","2020.02.29","2020.02.29","2020.02.28","2020.01.04"];
    </script>





Notes
-----
This package installs RSAT tools to analyse cis\-regulatory elements\, supporting\:
\* motif discovery \(support genome\-wide data sets like ChIP\-seq\)
\* transcription factor binding motif analysis \(quality assessment\, comparisons and clustering\)
\* comparative genomics
\* analysis of regulatory variations

Documentation can be found at https\:\/\/rsa\-tools.github.io\/installing\-RSAT

Note that this package does not include genome sequences nor DNA motif collections\, 
please check https\:\/\/rsa\-tools.github.io\/installing\-RSAT\/RSAT\-Docker\/RSAT\-Docker\-tuto.html
to learn how to add them in your system.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsat-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsat-core/README.html