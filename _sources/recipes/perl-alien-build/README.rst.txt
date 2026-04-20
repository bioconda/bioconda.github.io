:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-build'
.. highlight: bash

perl-alien-build
================

.. conda:recipe:: perl-alien-build
   :replaces_section_title:
   :noindex:

   Build external dependencies for use in CPAN

   :homepage: https://metacpan.org/pod/Alien::Build
   :license: perl_5
   :recipe: /`perl-alien-build <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-build/meta.yaml>`_

   


.. conda:package:: perl-alien-build

   |downloads_perl-alien-build| |docker_perl-alien-build|

   :versions:
      
      

      ``2.84-1``,  ``2.84-0``,  ``2.53-0``,  ``2.51-0``,  ``2.50-0``,  ``2.49-0``,  ``2.48-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-capture-tiny: 
   :depends on perl-ffi-checklib: ``0.28.*``
   :depends on perl-file-chdir: 
   :depends on perl-file-which: 
   :depends on perl-path-tiny: 
   :depends on perl-test2-suite: ``0.000163.*``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install perl-alien-build

to add into an existing workspace instead, run::

    pixi add perl-alien-build

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-alien-build

Alternatively, to install into a new environment, run::

    conda create -n envname perl-alien-build

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-alien-build:<tag>

(see `perl-alien-build/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-alien-build| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-build.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-build
   :alt:   (downloads)
.. |docker_perl-alien-build| image:: https://quay.io/repository/biocontainers/perl-alien-build/status
   :target: https://quay.io/repository/biocontainers/perl-alien-build
.. _`perl-alien-build/tags`: https://quay.io/repository/biocontainers/perl-alien-build?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-build";
        var versions = ["2.84","2.84","2.53","2.51","2.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-build/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-build/README.html