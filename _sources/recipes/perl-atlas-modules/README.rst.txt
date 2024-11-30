:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-atlas-modules'
.. highlight: bash

perl-atlas-modules
==================

.. conda:recipe:: perl-atlas-modules
   :replaces_section_title:
   :noindex:

   A package exporting in\-house perl functions and classes used in the data production of EMBL\-EBI Expression Atlas data.

   :homepage: https://github.com/ebi-gene-expression-group/perl-atlas-modules
   :license: APACHE / Apache Software License
   :recipe: /`perl-atlas-modules <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-atlas-modules>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-atlas-modules/meta.yaml>`_

   


.. conda:package:: perl-atlas-modules

   |downloads_perl-atlas-modules| |docker_perl-atlas-modules|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.1-5</code>,  <code>0.3.1-4</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  <code>0.1.6-2</code>,  <code>0.1.6-1</code>,  </span></summary>
      

      ``0.3.1-5``,  ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``5.26.2.*``
   :depends perl-algorithm-diff: 
   :depends perl-archive-extract: 
   :depends perl-archive-zip: 
   :depends perl-array-compare: 
   :depends perl-array-utils: 
   :depends perl-base: 
   :depends perl-capture-tiny: 
   :depends perl-carp: 
   :depends perl-carp-clan: 
   :depends perl-class-accessor: 
   :depends perl-class-std: 
   :depends perl-clone: 
   :depends perl-data-compare: 
   :depends perl-data-dumper: 
   :depends perl-date-manip: 
   :depends perl-datetime: 
   :depends perl-datetime-format-strptime: 
   :depends perl-dbd-mysql: 
   :depends perl-dbd-pg: 
   :depends perl-dbi: ``<1.642``
   :depends perl-devel-symdump: 
   :depends perl-extutils-cbuilder: 
   :depends perl-extutils-config: 
   :depends perl-extutils-helpers: 
   :depends perl-extutils-installpaths: 
   :depends perl-file-spec: 
   :depends perl-graphviz: 
   :depends perl-io-scalar: 
   :depends perl-io-stringy: 
   :depends perl-ipc-cmd: 
   :depends perl-ipc-run3: 
   :depends perl-json: 
   :depends perl-json-parse: 
   :depends perl-list-moreutils: 
   :depends perl-log-log4perl: 
   :depends perl-lwp-protocol-https: 
   :depends perl-lwp-simple: 
   :depends perl-mailtools: 
   :depends perl-mime-lite: 
   :depends perl-module-build: 
   :depends perl-module-build-tiny: 
   :depends perl-module-pluggable: 
   :depends perl-moose: 
   :depends perl-moosex-types: 
   :depends perl-params-coerce: 
   :depends perl-params-validate: 
   :depends perl-parse-recdescent: 
   :depends perl-path-tiny: 
   :depends perl-readonly: 
   :depends perl-scalar-list-utils: 
   :depends perl-spiffy: 
   :depends perl-sub-exporter-formethods: 
   :depends perl-sub-uplevel: 
   :depends perl-test-exception: 
   :depends perl-test-inter: 
   :depends perl-test-needs: 
   :depends perl-test-nowarnings: 
   :depends perl-test-pod: 
   :depends perl-test-pod-coverage: 
   :depends perl-test-warn: 
   :depends perl-text-csv: 
   :depends perl-text-csv_xs: 
   :depends perl-text-diff: 
   :depends perl-tie-ixhash: 
   :depends perl-timedate: 
   :depends perl-uri: 
   :depends perl-xml-parser: 
   :depends perl-xml-simple: 
   :depends perl-xml-writer: 
   :depends perl-yaml: 
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

      mamba install perl-atlas-modules

   and update with::

      mamba update perl-atlas-modules

  To create a new environment, run::

      mamba create --name myenvname perl-atlas-modules

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-atlas-modules:<tag>

   (see `perl-atlas-modules/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-atlas-modules| image:: https://img.shields.io/conda/dn/bioconda/perl-atlas-modules.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-atlas-modules
   :alt:   (downloads)
.. |docker_perl-atlas-modules| image:: https://quay.io/repository/biocontainers/perl-atlas-modules/status
   :target: https://quay.io/repository/biocontainers/perl-atlas-modules
.. _`perl-atlas-modules/tags`: https://quay.io/repository/biocontainers/perl-atlas-modules?tab=tags


.. raw:: html

    <script>
        var package = "perl-atlas-modules";
        var versions = ["0.3.1","0.3.1","0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-atlas-modules/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-atlas-modules/README.html