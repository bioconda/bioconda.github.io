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
      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-aceperl: 
   :depends perl-algorithm-munkres: 
   :depends perl-array-compare: 
   :depends perl-bio-phylo: 
   :depends perl-clone: 
   :depends perl-convert-binary-c: 
   :depends perl-data-stag: 
   :depends perl-db-file: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-error: 
   :depends perl-gd: 
   :depends perl-graphviz: 
   :depends perl-html-tableextract: 
   :depends perl-io-string: 
   :depends perl-io-stringy: 
   :depends perl-list-moreutils: 
   :depends perl-postscript: 
   :depends perl-set-scalar: 
   :depends perl-soap-lite: 
   :depends perl-sort-naturally: 
   :depends perl-spreadsheet-parseexcel: 
   :depends perl-svg: 
   :depends perl-svg-graph: 
   :depends perl-xml-dom: 
   :depends perl-xml-dom-xpath: 
   :depends perl-xml-sax-writer: 
   :depends perl-xml-simple: 
   :depends perl-xml-twig: 
   :depends perl-xml-writer: 
   :depends perl-yaml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-bioperl-core

   and update with::

      mamba update perl-bioperl-core

  To create a new environment, run::

      mamba create --name myenvname perl-bioperl-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bioperl-core:<tag>

   (see `perl-bioperl-core/tags`_ for valid values for ``<tag>``)


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