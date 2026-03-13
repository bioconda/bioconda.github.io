:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sql-statement'
.. highlight: bash

perl-sql-statement
==================

.. conda:recipe:: perl-sql-statement
   :replaces_section_title:
   :noindex:

   SQL parsing and processing engine

   :homepage: https://metacpan.org/release/SQL-Statement
   :license: perl_5
   :recipe: /`perl-sql-statement <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sql-statement/meta.yaml>`_

   


.. conda:package:: perl-sql-statement

   |downloads_perl-sql-statement| |docker_perl-sql-statement|

   :versions:
      
      

      ``1.414-0``,  ``1.412-1``,  ``1.412-0``,  ``1.407-1``,  ``1.407-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-clone: 
   :depends on perl-math-base-convert: 
   :depends on perl-module-runtime: 
   :depends on perl-params-util: 
   :depends on perl-text-soundex: 

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

    pixi global install perl-sql-statement

to add into an existing workspace instead, run::

    pixi add perl-sql-statement

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sql-statement

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sql-statement

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sql-statement:<tag>

(see `perl-sql-statement/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sql-statement| image:: https://img.shields.io/conda/dn/bioconda/perl-sql-statement.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sql-statement
   :alt:   (downloads)
.. |docker_perl-sql-statement| image:: https://quay.io/repository/biocontainers/perl-sql-statement/status
   :target: https://quay.io/repository/biocontainers/perl-sql-statement
.. _`perl-sql-statement/tags`: https://quay.io/repository/biocontainers/perl-sql-statement?tab=tags


.. raw:: html

    <script>
        var package = "perl-sql-statement";
        var versions = ["1.414","1.412","1.412","1.407","1.407"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sql-statement/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sql-statement/README.html