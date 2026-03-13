:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-uri-db'
.. highlight: bash

perl-uri-db
===========

.. conda:recipe:: perl-uri-db
   :replaces_section_title:
   :noindex:

   Database URIs

   :homepage: https://search.cpan.org/dist/URI-db/
   :license: GPL-1.0-or-later OR Artistic-1.0-Perl
   :recipe: /`perl-uri-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-uri-db/meta.yaml>`_

   


.. conda:package:: perl-uri-db

   |downloads_perl-uri-db| |docker_perl-uri-db|

   :versions:
      
      

      ``0.23-0``,  ``0.22-0``,  ``0.21-0``

      

   
   :depends on perl: ``>5.32*``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-uri: 
   :depends on perl-uri-nested: 

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

    pixi global install perl-uri-db

to add into an existing workspace instead, run::

    pixi add perl-uri-db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-uri-db

Alternatively, to install into a new environment, run::

    conda create -n envname perl-uri-db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-uri-db:<tag>

(see `perl-uri-db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-uri-db| image:: https://img.shields.io/conda/dn/bioconda/perl-uri-db.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-uri-db
   :alt:   (downloads)
.. |docker_perl-uri-db| image:: https://quay.io/repository/biocontainers/perl-uri-db/status
   :target: https://quay.io/repository/biocontainers/perl-uri-db
.. _`perl-uri-db/tags`: https://quay.io/repository/biocontainers/perl-uri-db?tab=tags


.. raw:: html

    <script>
        var package = "perl-uri-db";
        var versions = ["0.23","0.22","0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-uri-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-uri-db/README.html