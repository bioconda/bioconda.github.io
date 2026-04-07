:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkcompiler'
.. highlight: bash

perl-devel-checkcompiler
========================

.. conda:recipe:: perl-devel-checkcompiler
   :replaces_section_title:
   :noindex:

   Check the compiler\'s availability.

   :homepage: https://github.com/tokuhirom/Devel-CheckCompiler
   :license: Perl_5
   :recipe: /`perl-devel-checkcompiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkcompiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkcompiler/meta.yaml>`_

   


.. conda:package:: perl-devel-checkcompiler

   |downloads_perl-devel-checkcompiler| |docker_perl-devel-checkcompiler|

   :versions:
      
      

      ``0.07-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-devel-checkcompiler

to add into an existing workspace instead, run::

    pixi add perl-devel-checkcompiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-devel-checkcompiler

Alternatively, to install into a new environment, run::

    conda create -n envname perl-devel-checkcompiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-devel-checkcompiler:<tag>

(see `perl-devel-checkcompiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-devel-checkcompiler| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkcompiler.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkcompiler
   :alt:   (downloads)
.. |docker_perl-devel-checkcompiler| image:: https://quay.io/repository/biocontainers/perl-devel-checkcompiler/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkcompiler
.. _`perl-devel-checkcompiler/tags`: https://quay.io/repository/biocontainers/perl-devel-checkcompiler?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checkcompiler";
        var versions = ["0.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkcompiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkcompiler/README.html