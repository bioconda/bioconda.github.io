:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-alien-libxml2'
.. highlight: bash

perl-alien-libxml2
==================

.. conda:recipe:: perl-alien-libxml2
   :replaces_section_title:
   :noindex:

   Installs the C libxml2 library on your system.

   :homepage: https://metacpan.org/pod/Alien::Libxml2
   :developer docs: https://github.com/PerlAlien/Alien-Libxml2
   :license: Perl_5
   :recipe: /`perl-alien-libxml2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-libxml2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-alien-libxml2/meta.yaml>`_

   


.. conda:package:: perl-alien-libxml2

   |downloads_perl-alien-libxml2| |docker_perl-alien-libxml2|

   :versions:
      
      

      ``0.20-0``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libiconv: ``>=1.18,<2.0a0``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libxml2: ``>=2.14.4,<2.15.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-alien-build: ``>=2.84,<3.0a0``
   :depends on perl-alien-build-plugin-download-gitlab: ``>=0.1,<0.2.0a0``
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

    pixi global install perl-alien-libxml2

to add into an existing workspace instead, run::

    pixi add perl-alien-libxml2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-alien-libxml2

Alternatively, to install into a new environment, run::

    conda create -n envname perl-alien-libxml2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-alien-libxml2:<tag>

(see `perl-alien-libxml2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-alien-libxml2| image:: https://img.shields.io/conda/dn/bioconda/perl-alien-libxml2.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-alien-libxml2
   :alt:   (downloads)
.. |docker_perl-alien-libxml2| image:: https://quay.io/repository/biocontainers/perl-alien-libxml2/status
   :target: https://quay.io/repository/biocontainers/perl-alien-libxml2
.. _`perl-alien-libxml2/tags`: https://quay.io/repository/biocontainers/perl-alien-libxml2?tab=tags


.. raw:: html

    <script>
        var package = "perl-alien-libxml2";
        var versions = ["0.20","0.17","0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-alien-libxml2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-alien-libxml2/README.html