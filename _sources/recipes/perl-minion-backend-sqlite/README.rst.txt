:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-minion-backend-sqlite'
.. highlight: bash

perl-minion-backend-sqlite
==========================

.. conda:recipe:: perl-minion-backend-sqlite
   :replaces_section_title:
   :noindex:

   SQLite backend for Minion job queue

   :homepage: https://github.com/Grinnz/Minion-Backend-SQLite
   :license: Artistic-2.0
   :recipe: /`perl-minion-backend-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite/meta.yaml>`_

   


.. conda:package:: perl-minion-backend-sqlite

   |downloads_perl-minion-backend-sqlite| |docker_perl-minion-backend-sqlite|

   :versions:
      
      

      ``5.0.7-0``

      

   
   :depends on perl: ``>5.32*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-minion: 
   :depends on perl-mojo-sqlite: 
   :depends on perl-mojolicious: 

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

    pixi global install perl-minion-backend-sqlite

to add into an existing workspace instead, run::

    pixi add perl-minion-backend-sqlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-minion-backend-sqlite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-minion-backend-sqlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-minion-backend-sqlite:<tag>

(see `perl-minion-backend-sqlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-minion-backend-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-minion-backend-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-minion-backend-sqlite
   :alt:   (downloads)
.. |docker_perl-minion-backend-sqlite| image:: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite
.. _`perl-minion-backend-sqlite/tags`: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-minion-backend-sqlite";
        var versions = ["5.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html