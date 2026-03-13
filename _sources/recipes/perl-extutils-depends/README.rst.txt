:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-depends'
.. highlight: bash

perl-extutils-depends
=====================

.. conda:recipe:: perl-extutils-depends
   :replaces_section_title:
   :noindex:

   Easily build XS extensions that depend on XS extensions.

   :homepage: http://gtk2-perl.sourceforge.net
   :license: perl_5
   :recipe: /`perl-extutils-depends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-depends/meta.yaml>`_

   


.. conda:package:: perl-extutils-depends

   |downloads_perl-extutils-depends| |docker_perl-extutils-depends|

   :versions:
      
      

      ``0.8002-0``,  ``0.8001-0``,  ``0.8000-1``,  ``0.8000-0``,  ``0.405-2``,  ``0.405-1``,  ``0.405-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-data-dumper: 
   :depends on perl-pathtools: 

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

    pixi global install perl-extutils-depends

to add into an existing workspace instead, run::

    pixi add perl-extutils-depends

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-extutils-depends

Alternatively, to install into a new environment, run::

    conda create -n envname perl-extutils-depends

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-extutils-depends:<tag>

(see `perl-extutils-depends/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-extutils-depends| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-depends.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-depends
   :alt:   (downloads)
.. |docker_perl-extutils-depends| image:: https://quay.io/repository/biocontainers/perl-extutils-depends/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-depends
.. _`perl-extutils-depends/tags`: https://quay.io/repository/biocontainers/perl-extutils-depends?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-depends";
        var versions = ["0.8002","0.8001","0.8000","0.8000","0.405"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-depends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-depends/README.html