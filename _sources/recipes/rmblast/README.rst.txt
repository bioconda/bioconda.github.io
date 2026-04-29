:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmblast'
.. highlight: bash

rmblast
=======

.. conda:recipe:: rmblast
   :replaces_section_title:
   :noindex:

   RMBlast is a RepeatMasker compatible version of the standard NCBI BLAST\+ suite.

   :homepage: https://www.repeatmasker.org/rmblast
   :license: OSL-2.1
   :recipe: /`rmblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmblast/meta.yaml>`_
   :links: biotools: :biotools:`rmblast`

   


.. conda:package:: rmblast

   |downloads_rmblast| |docker_rmblast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.1-2</code>,  <code>2.14.1-1</code>,  <code>2.14.1-0</code>,  <code>2.14.0-2</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.13.0-1</code>,  <code>2.13.0-0</code>,  <code>2.11.0-0</code>,  </span></summary>
      

      ``2.14.1-2``,  ``2.14.1-1``,  ``2.14.1-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.6.0-0``,  ``2.2.28-4``,  ``2.2.28-3``,  ``2.2.28-2``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on entrez-direct: ``>=22.4,<23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.49.1,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on ncbi-vdb: ``>=3.2.1,<4.0a0``
   :depends on perl: 
   :depends on perl-archive-tar: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: 
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

    pixi global install rmblast

to add into an existing workspace instead, run::

    pixi add rmblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmblast

Alternatively, to install into a new environment, run::

    conda create -n envname rmblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmblast:<tag>

(see `rmblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmblast| image:: https://img.shields.io/conda/dn/bioconda/rmblast.svg?style=flat
   :target: https://anaconda.org/bioconda/rmblast
   :alt:   (downloads)
.. |docker_rmblast| image:: https://quay.io/repository/biocontainers/rmblast/status
   :target: https://quay.io/repository/biocontainers/rmblast
.. _`rmblast/tags`: https://quay.io/repository/biocontainers/rmblast?tab=tags


.. raw:: html

    <script>
        var package = "rmblast";
        var versions = ["2.14.1","2.14.1","2.14.1","2.14.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmblast/README.html