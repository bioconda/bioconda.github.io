:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-fromperlver'
.. highlight: bash

perl-module-fromperlver
=======================

.. conda:recipe:: perl-module-fromperlver/0.008002
   :replaces_section_title:
   :noindex:

   install modules compatible with the running perl.

   :homepage: http://metacpan.org/pod/Module::FromPerlVer
   :license: perl_5
   :recipe: /`perl-module-fromperlver <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver>`_/`0.008002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-fromperlver/0.008002/meta.yaml>`_

   


.. conda:package:: perl-module-fromperlver

   |downloads_perl-module-fromperlver| |docker_perl-module-fromperlver|

   :versions:
      
      

      ``0.008002-2``,  ``0.008002-1``,  ``0.008002-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-archive-tar: 
   :depends on perl-carp: 
   :depends on perl-file-copy-recursive: 
   :depends on perl-lib: 
   :depends on perl-list-moreutils: 
   :depends on perl-parent: 
   :depends on perl-pathtools: 
   :depends on perl-perl-version: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-test-deep: 
   :depends on perl-test-simple: 
   :depends on perl-version-next: 

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

    pixi global install perl-module-fromperlver

to add into an existing workspace instead, run::

    pixi add perl-module-fromperlver

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-module-fromperlver

Alternatively, to install into a new environment, run::

    conda create -n envname perl-module-fromperlver

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-module-fromperlver:<tag>

(see `perl-module-fromperlver/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-module-fromperlver| image:: https://img.shields.io/conda/dn/bioconda/perl-module-fromperlver.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-fromperlver
   :alt:   (downloads)
.. |docker_perl-module-fromperlver| image:: https://quay.io/repository/biocontainers/perl-module-fromperlver/status
   :target: https://quay.io/repository/biocontainers/perl-module-fromperlver
.. _`perl-module-fromperlver/tags`: https://quay.io/repository/biocontainers/perl-module-fromperlver?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-fromperlver";
        var versions = ["0.008002","0.008002","0.008002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-fromperlver/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-fromperlver/README.html