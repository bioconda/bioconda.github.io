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
      
      

      ``2025.04.04-1``,  ``2025.04.04-0``,  ``2020.02.29-1``,  ``2020.02.29-0``,  ``2020.02.28-0``,  ``2020.01.04-0``

      

   
   :depends on bioconductor-qvalue: 
   :depends on d3: 
   :depends on ghostscript: 
   :depends on httplib2: 
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libpq: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on opencv: 
   :depends on openssl: ``3.5.4.*``
   :depends on perl: 
   :depends on perl-algorithm-cluster: 
   :depends on perl-app-cpanminus: 
   :depends on perl-bio-das: 
   :depends on perl-cgi: 
   :depends on perl-class-std-fast: 
   :depends on perl-data-dumper: 
   :depends on perl-db_file: 
   :depends on perl-dbd-mysql: 
   :depends on perl-dbi: 
   :depends on perl-email-simple: 
   :depends on perl-ensembl-genomes: 
   :depends on perl-file-spec: 
   :depends on perl-http-tiny: 
   :depends on perl-io-all: 
   :depends on perl-json: 
   :depends on perl-libwww-perl: 
   :depends on perl-lockfile-simple: 
   :depends on perl-log-log4perl: 
   :depends on perl-lwp-simple: 
   :depends on perl-math-cdf: 
   :depends on perl-mce-shared: 
   :depends on perl-net-http: ``>=6.18``
   :depends on perl-net-ssleay: 
   :depends on perl-number-format: 
   :depends on perl-object-insideout: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-posix: 
   :depends on perl-postscript-simple: 
   :depends on perl-readonly: 
   :depends on perl-statistics-distributions: 
   :depends on perl-xml-parser: 
   :depends on perl-yaml: 
   :depends on pygraphviz: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on r-base: ``4.2.3.*``
   :depends on r-data.table: 
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-dynamictreecut: 
   :depends on r-egg: 
   :depends on r-flux: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-jpeg: 
   :depends on r-png: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rjsonio: 
   :depends on r-zoo: 
   :depends on scipy: 
   :depends on seqlogo: 
   :depends on snakemake: ``>=7.0``
   :depends on weblogo: 
   :depends on zlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install rsat-core

to add into an existing workspace instead, run::

    pixi add rsat-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rsat-core

Alternatively, to install into a new environment, run::

    conda create -n envname rsat-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rsat-core:<tag>

(see `rsat-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rsat-core| image:: https://img.shields.io/conda/dn/bioconda/rsat-core.svg?style=flat
   :target: https://anaconda.org/bioconda/rsat-core
   :alt:   (downloads)
.. |docker_rsat-core| image:: https://quay.io/repository/biocontainers/rsat-core/status
   :target: https://quay.io/repository/biocontainers/rsat-core
.. _`rsat-core/tags`: https://quay.io/repository/biocontainers/rsat-core?tab=tags


.. raw:: html

    <script>
        var package = "rsat-core";
        var versions = ["2025.04.04","2025.04.04","2020.02.29","2020.02.29","2020.02.28"];
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