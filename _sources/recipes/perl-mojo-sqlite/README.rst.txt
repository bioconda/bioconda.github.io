:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mojo-sqlite'
.. highlight: bash

perl-mojo-sqlite
================

.. conda:recipe:: perl-mojo-sqlite
   :replaces_section_title:
   :noindex:

   A tiny Mojolicious wrapper for SQLite

   :homepage: https://github.com/Grinnz/Mojo-SQLite
   :license: Artistic-2.0
   :recipe: /`perl-mojo-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mojo-sqlite/meta.yaml>`_

   


.. conda:package:: perl-mojo-sqlite

   |downloads_perl-mojo-sqlite| |docker_perl-mojo-sqlite|

   :versions:
      
      

      ``3.009-0``

      

   
   :depends on perl: ``>5.32*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-mojolicious: 
   :depends on perl-sql-abstract-pg: 
   :depends on perl-uri: 
   :depends on perl-uri-db: 

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

    pixi global install perl-mojo-sqlite

to add into an existing workspace instead, run::

    pixi add perl-mojo-sqlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mojo-sqlite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mojo-sqlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mojo-sqlite:<tag>

(see `perl-mojo-sqlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mojo-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-mojo-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mojo-sqlite
   :alt:   (downloads)
.. |docker_perl-mojo-sqlite| image:: https://quay.io/repository/biocontainers/perl-mojo-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-mojo-sqlite
.. _`perl-mojo-sqlite/tags`: https://quay.io/repository/biocontainers/perl-mojo-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-mojo-sqlite";
        var versions = ["3.009"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mojo-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mojo-sqlite/README.html