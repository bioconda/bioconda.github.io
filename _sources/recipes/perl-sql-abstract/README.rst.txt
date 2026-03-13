:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-abstract'
.. highlight: bash

perl-sql-abstract
=================

.. conda:recipe:: perl-sql-abstract
   :replaces_section_title:
   :noindex:

   Generate SQL from Perl data structures

   :homepage: http://metacpan.org/pod/SQL-Abstract
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-sql-abstract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-abstract/meta.yaml>`_

   


.. conda:package:: perl-sql-abstract

   |downloads_perl-sql-abstract| |docker_perl-sql-abstract|

   :versions:
      
      

      ``2.000001-0``

      

   
   :depends on perl: ``>5.32*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-data-dumper: 
   :depends on perl-data-dumper-concise: 
   :depends on perl-hash-merge: 
   :depends on perl-module-runtime: 
   :depends on perl-moo: 
   :depends on perl-mro-compat: 
   :depends on perl-sub-quote: 
   :depends on perl-test-deep: 
   :depends on perl-test-exception: 
   :depends on perl-test-warn: 

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

    pixi global install perl-sql-abstract

to add into an existing workspace instead, run::

    pixi add perl-sql-abstract

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sql-abstract

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sql-abstract

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sql-abstract:<tag>

(see `perl-sql-abstract/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sql-abstract| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-abstract.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-abstract
   :alt:   (downloads)
.. |docker_perl-sql-abstract| image:: https://quay.io/repository/biocontainers/perl-sql-abstract/status
   :target: https://quay.io/repository/biocontainers/perl-sql-abstract
.. _`perl-sql-abstract/tags`: https://quay.io/repository/biocontainers/perl-sql-abstract?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-abstract";
        var versions = ["2.000001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-abstract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-abstract/README.html