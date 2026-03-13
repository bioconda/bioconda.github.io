:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'veryfasttree'
.. highlight: bash

veryfasttree
============

.. conda:recipe:: veryfasttree
   :replaces_section_title:
   :noindex:

   VeryFastTree \-\- speeding up the estimation of phylogenies for large alignments through parallelization and vectorization strategies.

   :homepage: https://github.com/citiususc/veryfasttree
   :documentation: https://github.com/citiususc/veryfasttree/blob/v4.0.5/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`veryfasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa582`, doi: :doi:`10.1093/gigascience/giae055`, biotools: :biotools:`veryfasttree`

   VeryFastTree is a highly\-tuned implementation of the FastTree\-2 tool that takes advantage of parallelization and vectorization strategies 
   to speed up the inference of phylogenies for huge alignments.



.. conda:package:: veryfasttree

   |downloads_veryfasttree| |docker_veryfasttree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.5-0</code>,  <code>4.0.4-1</code>,  <code>4.0.4-0</code>,  <code>4.0.03-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0-0</code>,  <code>3.2.1-2</code>,  <code>3.2.1-1</code>,  </span></summary>
      

      ``4.0.5-0``,  ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.03-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0-0``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install veryfasttree

to add into an existing workspace instead, run::

    pixi add veryfasttree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install veryfasttree

Alternatively, to install into a new environment, run::

    conda create -n envname veryfasttree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/veryfasttree:<tag>

(see `veryfasttree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_veryfasttree| image:: https://img.shields.io/conda/dn/bioconda/veryfasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/veryfasttree
   :alt:   (downloads)
.. |docker_veryfasttree| image:: https://quay.io/repository/biocontainers/veryfasttree/status
   :target: https://quay.io/repository/biocontainers/veryfasttree
.. _`veryfasttree/tags`: https://quay.io/repository/biocontainers/veryfasttree?tab=tags


.. raw:: html

    <script>
        var package = "veryfasttree";
        var versions = ["4.0.5","4.0.4","4.0.4","4.0.03","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/veryfasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/veryfasttree/README.html