:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-pg'
.. highlight: bash

perl-dbd-pg
===========

.. conda:recipe:: perl-dbd-pg
   :replaces_section_title:
   :noindex:

   DBI PostgreSQL interface.

   :homepage: https://metacpan.org/pod/DBD::Pg
   :license: Perl_5
   :recipe: /`perl-dbd-pg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-pg/meta.yaml>`_

   


.. conda:package:: perl-dbd-pg

   |downloads_perl-dbd-pg| |docker_perl-dbd-pg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.18.0-3</code>,  <code>3.18.0-2</code>,  <code>3.18.0-1</code>,  <code>3.18.0-0</code>,  <code>3.16.0-3</code>,  <code>3.16.0-2</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  <code>3.15.1-1</code>,  </span></summary>
      

      ``3.18.0-3``,  ``3.18.0-2``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-3``,  ``3.16.0-2``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.15.1-1``,  ``3.15.1-0``,  ``3.15.0-2``,  ``3.15.0-1``,  ``3.15.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.4-0``,  ``3.5.3-1``,  ``3.5.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libpq: ``>=16.10,<17.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-dbi: 
   :depends on postgresql: 

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

    pixi global install perl-dbd-pg

to add into an existing workspace instead, run::

    pixi add perl-dbd-pg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-dbd-pg

Alternatively, to install into a new environment, run::

    conda create -n envname perl-dbd-pg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-dbd-pg:<tag>

(see `perl-dbd-pg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-dbd-pg| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-pg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-pg
   :alt:   (downloads)
.. |docker_perl-dbd-pg| image:: https://quay.io/repository/biocontainers/perl-dbd-pg/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-pg
.. _`perl-dbd-pg/tags`: https://quay.io/repository/biocontainers/perl-dbd-pg?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-pg";
        var versions = ["3.18.0","3.18.0","3.18.0","3.18.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-pg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-pg/README.html