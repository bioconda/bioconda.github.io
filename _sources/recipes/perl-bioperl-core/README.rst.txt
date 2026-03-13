:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl-core'
.. highlight: bash

perl-bioperl-core
=================

.. conda:recipe:: perl-bioperl-core
   :replaces_section_title:
   :noindex:

   Perl modules for biology

   :homepage: https://metacpan.org/release/BioPerl
   :license: perl_5
   :recipe: /`perl-bioperl-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-core/meta.yaml>`_

   


.. conda:package:: perl-bioperl-core

   |downloads_perl-bioperl-core| |docker_perl-bioperl-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.007002-3</code>,  <code>1.007002-2</code>,  <code>1.007002-1</code>,  <code>1.007002-0</code>,  <code>1.7.8-1</code>,  <code>1.7.8-0</code>,  <code>1.7.2-3</code>,  <code>1.6.924-2</code>,  <code>1.6.924-1</code>,  </span></summary>
      

      ``1.007002-3``,  ``1.007002-2``,  ``1.007002-1``,  ``1.007002-0``,  ``1.7.8-1``,  ``1.7.8-0``,  ``1.7.2-3``,  ``1.6.924-2``,  ``1.6.924-1``,  ``1.6.924-0``

      
      .. raw:: html

         </details>
      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-aceperl: 
   :depends on perl-algorithm-munkres: 
   :depends on perl-array-compare: 
   :depends on perl-bio-phylo: 
   :depends on perl-clone: 
   :depends on perl-convert-binary-c: 
   :depends on perl-data-stag: 
   :depends on perl-db-file: 
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-error: 
   :depends on perl-gd: 
   :depends on perl-graphviz: 
   :depends on perl-html-tableextract: 
   :depends on perl-io-string: 
   :depends on perl-io-stringy: 
   :depends on perl-list-moreutils: 
   :depends on perl-postscript: 
   :depends on perl-set-scalar: 
   :depends on perl-soap-lite: 
   :depends on perl-sort-naturally: 
   :depends on perl-spreadsheet-parseexcel: 
   :depends on perl-svg: 
   :depends on perl-svg-graph: 
   :depends on perl-xml-dom: 
   :depends on perl-xml-dom-xpath: 
   :depends on perl-xml-sax-writer: 
   :depends on perl-xml-simple: 
   :depends on perl-xml-twig: 
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

    pixi global install perl-bioperl-core

to add into an existing workspace instead, run::

    pixi add perl-bioperl-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bioperl-core

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bioperl-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bioperl-core:<tag>

(see `perl-bioperl-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bioperl-core| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-core.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl-core
   :alt:   (downloads)
.. |docker_perl-bioperl-core| image:: https://quay.io/repository/biocontainers/perl-bioperl-core/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-core
.. _`perl-bioperl-core/tags`: https://quay.io/repository/biocontainers/perl-bioperl-core?tab=tags


.. raw:: html

    <script>
        var package = "perl-bioperl-core";
        var versions = ["1.007002","1.007002","1.007002","1.007002","1.7.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-core/README.html