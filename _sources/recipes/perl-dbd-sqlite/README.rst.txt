:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-dbd-sqlite'
.. highlight: bash

perl-dbd-sqlite
===============

.. conda:recipe:: perl-dbd-sqlite
   :replaces_section_title:
   :noindex:

   Self Contained RDBMS in a DBI Driver.

   :homepage: https://metacpan.org/pod/DBD::SQLite
   :license: Perl_5
   :recipe: /`perl-dbd-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbd-sqlite/meta.yaml>`_

   


.. conda:package:: perl-dbd-sqlite

   |downloads_perl-dbd-sqlite| |docker_perl-dbd-sqlite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78-0</code>,  <code>1.76-2</code>,  <code>1.76-1</code>,  <code>1.76-0</code>,  <code>1.72-2</code>,  <code>1.72-1</code>,  <code>1.72-0</code>,  <code>1.70-2</code>,  <code>1.70-1</code>,  </span></summary>
      

      ``1.78-0``,  ``1.76-2``,  ``1.76-1``,  ``1.76-0``,  ``1.72-2``,  ``1.72-1``,  ``1.72-0``,  ``1.70-2``,  ``1.70-1``,  ``1.70-0``,  ``1.64-1``,  ``1.64-0``,  ``1.62-1``,  ``1.62-0``,  ``1.60-0``,  ``1.58-0``,  ``1.50-3``,  ``1.50-2``,  ``1.50-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-dbi: 

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

    pixi global install perl-dbd-sqlite

to add into an existing workspace instead, run::

    pixi add perl-dbd-sqlite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-dbd-sqlite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-dbd-sqlite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-dbd-sqlite:<tag>

(see `perl-dbd-sqlite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-dbd-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-dbd-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-dbd-sqlite
   :alt:   (downloads)
.. |docker_perl-dbd-sqlite| image:: https://quay.io/repository/biocontainers/perl-dbd-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-dbd-sqlite
.. _`perl-dbd-sqlite/tags`: https://quay.io/repository/biocontainers/perl-dbd-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-dbd-sqlite";
        var versions = ["1.78","1.76","1.76","1.76","1.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbd-sqlite/README.html