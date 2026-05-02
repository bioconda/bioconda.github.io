:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checklib'
.. highlight: bash

perl-devel-checklib
===================

.. conda:recipe:: perl-devel-checklib
   :replaces_section_title:
   :noindex:

   Check that a library is available.

   :homepage: https://metacpan.org/pod/Devel::CheckLib
   :developer docs: https://github.com/mattn/p5-Devel-CheckLib
   :license: Perl_5
   :recipe: /`perl-devel-checklib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checklib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checklib/meta.yaml>`_

   


.. conda:package:: perl-devel-checklib

   |downloads_perl-devel-checklib| |docker_perl-devel-checklib|

   :versions:
      
      

      ``1.16-1``,  ``1.16-0``,  ``1.14-1``,  ``1.14-0``

      

   
   :depends on gcc_linux-64: ``13.*``
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``

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

    pixi global install perl-devel-checklib

to add into an existing workspace instead, run::

    pixi add perl-devel-checklib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-devel-checklib

Alternatively, to install into a new environment, run::

    conda create -n envname perl-devel-checklib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-devel-checklib:<tag>

(see `perl-devel-checklib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-devel-checklib| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checklib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checklib
   :alt:   (downloads)
.. |docker_perl-devel-checklib| image:: https://quay.io/repository/biocontainers/perl-devel-checklib/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checklib
.. _`perl-devel-checklib/tags`: https://quay.io/repository/biocontainers/perl-devel-checklib?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checklib";
        var versions = ["1.16","1.16","1.14","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checklib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checklib/README.html