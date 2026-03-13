:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-sharedir-install'
.. highlight: bash

perl-file-sharedir-install
==========================

.. conda:recipe:: perl-file-sharedir-install
   :replaces_section_title:
   :noindex:

   Install shared files.

   :homepage: https://github.com/Perl-Toolchain-Gang/File-ShareDir-Install
   :license: perl_5
   :recipe: /`perl-file-sharedir-install <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-sharedir-install/meta.yaml>`_

   


.. conda:package:: perl-file-sharedir-install

   |downloads_perl-file-sharedir-install| |docker_perl-file-sharedir-install|

   :versions:
      
      

      ``0.14-0``,  ``0.13-1``,  ``0.13-0``,  ``0.10-4``,  ``0.10-3``,  ``0.10-2``,  ``0.10-1``,  ``0.10-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 

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

    pixi global install perl-file-sharedir-install

to add into an existing workspace instead, run::

    pixi add perl-file-sharedir-install

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-file-sharedir-install

Alternatively, to install into a new environment, run::

    conda create -n envname perl-file-sharedir-install

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-file-sharedir-install:<tag>

(see `perl-file-sharedir-install/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-file-sharedir-install| image:: https://img.shields.io/conda/dn/bioconda/perl-file-sharedir-install.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-sharedir-install
   :alt:   (downloads)
.. |docker_perl-file-sharedir-install| image:: https://quay.io/repository/biocontainers/perl-file-sharedir-install/status
   :target: https://quay.io/repository/biocontainers/perl-file-sharedir-install
.. _`perl-file-sharedir-install/tags`: https://quay.io/repository/biocontainers/perl-file-sharedir-install?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-sharedir-install";
        var versions = ["0.14","0.13","0.13","0.10","0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-sharedir-install/README.html