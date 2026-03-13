:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-local-lib'
.. highlight: bash

perl-local-lib
==============

.. conda:recipe:: perl-local-lib
   :replaces_section_title:
   :noindex:

   create and use a local lib\/ for perl modules with PERL5LIB

   :homepage: http://metacpan.org/pod/local::lib
   :license: perl_5
   :recipe: /`perl-local-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib/meta.yaml>`_

   


.. conda:package:: perl-local-lib

   |downloads_perl-local-lib| |docker_perl-local-lib|

   :versions:
      
      

      ``2.000029-0``,  ``2.000028-0``,  ``2.000024-1``,  ``2.000024-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-extutils-makemaker: 
   :depends on perl-module-build: 

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

    pixi global install perl-local-lib

to add into an existing workspace instead, run::

    pixi add perl-local-lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-local-lib

Alternatively, to install into a new environment, run::

    conda create -n envname perl-local-lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-local-lib:<tag>

(see `perl-local-lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-local-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-local-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-local-lib
   :alt:   (downloads)
.. |docker_perl-local-lib| image:: https://quay.io/repository/biocontainers/perl-local-lib/status
   :target: https://quay.io/repository/biocontainers/perl-local-lib
.. _`perl-local-lib/tags`: https://quay.io/repository/biocontainers/perl-local-lib?tab=tags


.. raw:: html

    <script>
        var package = "perl-local-lib";
        var versions = ["2.000029","2.000028","2.000024","2.000024"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-local-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-local-lib/README.html