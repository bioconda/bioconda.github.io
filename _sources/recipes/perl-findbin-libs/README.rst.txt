:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin-libs'
.. highlight: bash

perl-findbin-libs
=================

.. conda:recipe:: perl-findbin-libs/2.017008
   :replaces_section_title:
   :noindex:

   locate and a \'use lib\' or export directories based on \$FindBin\:\:Bin.

   :homepage: http://metacpan.org/pod/FindBin::libs
   :license: perl_5
   :recipe: /`perl-findbin-libs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs>`_/`2.017008 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-libs/2.017008/meta.yaml>`_

   


.. conda:package:: perl-findbin-libs

   |downloads_perl-findbin-libs| |docker_perl-findbin-libs|

   :versions:
      
      

      ``2.017008-2``,  ``2.017008-1``,  ``2.017008-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-file-temp: 
   :depends on perl-module-fromperlver: 
   :depends on perl-pathtools: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-test-simple: 

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

    pixi global install perl-findbin-libs

to add into an existing workspace instead, run::

    pixi add perl-findbin-libs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-findbin-libs

Alternatively, to install into a new environment, run::

    conda create -n envname perl-findbin-libs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-findbin-libs:<tag>

(see `perl-findbin-libs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-findbin-libs| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-libs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-findbin-libs
   :alt:   (downloads)
.. |docker_perl-findbin-libs| image:: https://quay.io/repository/biocontainers/perl-findbin-libs/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-libs
.. _`perl-findbin-libs/tags`: https://quay.io/repository/biocontainers/perl-findbin-libs?tab=tags


.. raw:: html

    <script>
        var package = "perl-findbin-libs";
        var versions = ["2.017008","2.017008","2.017008"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-libs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-libs/README.html