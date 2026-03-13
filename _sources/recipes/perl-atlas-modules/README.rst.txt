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
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on perl: ``5.26.2.*``
   :depends on perl-algorithm-diff: 
   :depends on perl-archive-extract: 
   :depends on perl-archive-zip: 
   :depends on perl-array-compare: 
   :depends on perl-array-utils: 
   :depends on perl-base: 
   :depends on perl-capture-tiny: 
   :depends on perl-carp: 
   :depends on perl-carp-clan: 
   :depends on perl-class-accessor: 
   :depends on perl-class-std: 
   :depends on perl-clone: 
   :depends on perl-data-compare: 
   :depends on perl-data-dumper: 
   :depends on perl-date-manip: 
   :depends on perl-datetime: 
   :depends on perl-datetime-format-strptime: 
   :depends on perl-dbd-mysql: 
   :depends on perl-dbd-pg: 
   :depends on perl-dbi: ``<1.642``
   :depends on perl-devel-symdump: 
   :depends on perl-extutils-cbuilder: 
   :depends on perl-extutils-config: 
   :depends on perl-extutils-helpers: 
   :depends on perl-extutils-installpaths: 
   :depends on perl-file-spec: 
   :depends on perl-graphviz: 
   :depends on perl-io-scalar: 
   :depends on perl-io-stringy: 
   :depends on perl-ipc-cmd: 
   :depends on perl-ipc-run3: 
   :depends on perl-json: 
   :depends on perl-json-parse: 
   :depends on perl-list-moreutils: 
   :depends on perl-log-log4perl: 
   :depends on perl-lwp-protocol-https: 
   :depends on perl-lwp-simple: 
   :depends on perl-mailtools: 
   :depends on perl-mime-lite: 
   :depends on perl-module-build: 
   :depends on perl-module-build-tiny: 
   :depends on perl-module-pluggable: 
   :depends on perl-moose: 
   :depends on perl-moosex-types: 
   :depends on perl-params-coerce: 
   :depends on perl-params-validate: 
   :depends on perl-parse-recdescent: 
   :depends on perl-path-tiny: 
   :depends on perl-readonly: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-spiffy: 
   :depends on perl-sub-exporter-formethods: 
   :depends on perl-sub-uplevel: 
   :depends on perl-test-exception: 
   :depends on perl-test-inter: 
   :depends on perl-test-needs: 
   :depends on perl-test-nowarnings: 
   :depends on perl-test-pod: 
   :depends on perl-test-pod-coverage: 
   :depends on perl-test-warn: 
   :depends on perl-text-csv: 
   :depends on perl-text-csv_xs: 
   :depends on perl-text-diff: 
   :depends on perl-tie-ixhash: 
   :depends on perl-timedate: 
   :depends on perl-uri: 
   :depends on perl-xml-parser: 
   :depends on perl-xml-simple: 
   :depends on perl-xml-writer: 
   :depends on perl-yaml: 

   :additional platforms:
      

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

    pixi global install perl-atlas-modules

to add into an existing workspace instead, run::

    pixi add perl-atlas-modules

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-atlas-modules

Alternatively, to install into a new environment, run::

    conda create -n envname perl-atlas-modules

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-atlas-modules:<tag>

(see `perl-atlas-modules/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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