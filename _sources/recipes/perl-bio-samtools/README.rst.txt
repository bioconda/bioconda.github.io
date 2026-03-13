:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-samtools'
.. highlight: bash

perl-bio-samtools
=================

.. conda:recipe:: perl-bio-samtools
   :replaces_section_title:
   :noindex:

   Read SAM\/BAM files.

   :homepage: https://metacpan.org/pod/Bio::DB::Sam
   :license: Perl_5
   :recipe: /`perl-bio-samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-samtools/meta.yaml>`_

   


.. conda:package:: perl-bio-samtools

   |downloads_perl-bio-samtools| |docker_perl-bio-samtools|

   :versions:
      
      

      ``1.43-6``,  ``1.43-5``,  ``1.43-4``,  ``1.43-3``,  ``1.43-2``,  ``1.43-1``,  ``1.43-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl-core: ``1.7.8.*``
   :depends on perl-module-build: ``0.4234.*``
   :depends on samtools: ``>=0.1.19,<0.2.0a0``

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

    pixi global install perl-bio-samtools

to add into an existing workspace instead, run::

    pixi add perl-bio-samtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-samtools

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-samtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-samtools:<tag>

(see `perl-bio-samtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-samtools| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-samtools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-samtools
   :alt:   (downloads)
.. |docker_perl-bio-samtools| image:: https://quay.io/repository/biocontainers/perl-bio-samtools/status
   :target: https://quay.io/repository/biocontainers/perl-bio-samtools
.. _`perl-bio-samtools/tags`: https://quay.io/repository/biocontainers/perl-bio-samtools?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-samtools";
        var versions = ["1.43","1.43","1.43","1.43","1.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-samtools/README.html