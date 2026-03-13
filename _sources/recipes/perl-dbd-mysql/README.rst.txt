:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-mysql'
.. highlight: bash

perl-dbd-mysql
==============

.. conda:recipe:: perl-dbd-mysql
   :replaces_section_title:
   :noindex:

   A MySQL driver for the Perl5 Database Interface \(DBI\).

   :homepage: https://dbi.perl.org
   :license: Perl_5
   :recipe: /`perl-dbd-mysql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-mysql/meta.yaml>`_
   :links: biotools: :biotools:`dbd`, doi: :doi:`10.1093/nar/gkm964`

   


.. conda:package:: perl-dbd-mysql

   |downloads_perl-dbd-mysql| |docker_perl-dbd-mysql|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.013-0</code>,  <code>4.050-3</code>,  <code>4.050-2</code>,  <code>4.050-1</code>,  <code>4.050-0</code>,  <code>4.046-4</code>,  <code>4.046-3</code>,  <code>4.046-2</code>,  <code>4.046-1</code>,  </span></summary>
      

      ``5.013-0``,  ``4.050-3``,  ``4.050-2``,  ``4.050-1``,  ``4.050-0``,  ``4.046-4``,  ``4.046-3``,  ``4.046-2``,  ``4.046-1``,  ``4.046-0``,  ``4.033-3``,  ``4.033-2``,  ``4.033-1``,  ``4.033-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on mysql: ``<9``
   :depends on mysql-common: ``<9``
   :depends on mysql-libs: ``<9``
   :depends on openssl: ``>=3.5.2,<4.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-dbi: 
   :depends on perl-devel-checklib: ``>=1.16,<2.0a0``
   :depends on perl-time-hires: ``>=1.9764,<2.0a0``
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install perl-dbd-mysql

to add into an existing workspace instead, run::

    pixi add perl-dbd-mysql

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-dbd-mysql

Alternatively, to install into a new environment, run::

    conda create -n envname perl-dbd-mysql

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-dbd-mysql:<tag>

(see `perl-dbd-mysql/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-dbd-mysql| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-mysql.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-mysql
   :alt:   (downloads)
.. |docker_perl-dbd-mysql| image:: https://quay.io/repository/biocontainers/perl-dbd-mysql/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-mysql
.. _`perl-dbd-mysql/tags`: https://quay.io/repository/biocontainers/perl-dbd-mysql?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-mysql";
        var versions = ["5.013","4.050","4.050","4.050","4.050"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-mysql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-mysql/README.html