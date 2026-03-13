:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rust-ncbitaxonomy'
.. highlight: bash

rust-ncbitaxonomy
=================

.. conda:recipe:: rust-ncbitaxonomy
   :replaces_section_title:
   :noindex:

   A Rust crate for working with a local copy of the NCBI Taxonomy database\, which provides utilities for taxonomic filtering.


   :homepage: https://github.com/pvanheus/ncbitaxonomy
   :documentation: https://docs.rs/crate/ncbitaxonomy/1.0.7
   
   :license: MIT
   :recipe: /`rust-ncbitaxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-ncbitaxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rust-ncbitaxonomy/meta.yaml>`_

   


.. conda:package:: rust-ncbitaxonomy

   |downloads_rust-ncbitaxonomy| |docker_rust-ncbitaxonomy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-6</code>,  <code>1.0.7-5</code>,  <code>1.0.7-4</code>,  <code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.5-0</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libsqlite: ``>=3.47.2,<4.0a0``
   :depends on sqlite: 

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

    pixi global install rust-ncbitaxonomy

to add into an existing workspace instead, run::

    pixi add rust-ncbitaxonomy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rust-ncbitaxonomy

Alternatively, to install into a new environment, run::

    conda create -n envname rust-ncbitaxonomy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rust-ncbitaxonomy:<tag>

(see `rust-ncbitaxonomy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rust-ncbitaxonomy| image:: https://img.shields.io/conda/dn/bioconda/rust-ncbitaxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/rust-ncbitaxonomy
   :alt:   (downloads)
.. |docker_rust-ncbitaxonomy| image:: https://quay.io/repository/biocontainers/rust-ncbitaxonomy/status
   :target: https://quay.io/repository/biocontainers/rust-ncbitaxonomy
.. _`rust-ncbitaxonomy/tags`: https://quay.io/repository/biocontainers/rust-ncbitaxonomy?tab=tags


.. raw:: html

    <script>
        var package = "rust-ncbitaxonomy";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rust-ncbitaxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rust-ncbitaxonomy/README.html