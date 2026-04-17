:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacprune'
.. highlight: bash

bacprune
========

.. conda:recipe:: bacprune
   :replaces_section_title:
   :noindex:

   Fast LD pruning of haploid genotype matrices

   :homepage: https://github.com/bacpop/BacPrune-Rust
   :license: MIT
   :recipe: /`bacprune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacprune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacprune/meta.yaml>`_

   BacPrune\-Rust prunes a haploid genotype matrix by linkage disequilibrium
   \(LD\) threshold. Three modes are available\:

     \-\-r       Greedy pruning by r² \(Pearson r\-squared\) threshold \(default\).
     \-\-dprime  Greedy pruning by \|D\'\| threshold.
     \-\-dedup   Hash\-based exact\-duplicate removal only \(O\(n·v\)\, no pairwise
               LD calculation\).

   All modes first remove exact duplicate variant columns via hashing before
   any threshold\-based pruning.  Output includes the pruned genotype matrix\,
   a pruning summary\, and a per\-variant correlation\-direction file.



.. conda:package:: bacprune

   |downloads_bacprune| |docker_bacprune|

   :versions:
      
      

      ``0.9.0-0``

      

   

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

    pixi global install bacprune

to add into an existing workspace instead, run::

    pixi add bacprune

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bacprune

Alternatively, to install into a new environment, run::

    conda create -n envname bacprune

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bacprune:<tag>

(see `bacprune/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bacprune| image:: https://img.shields.io/conda/dn/bioconda/bacprune.svg?style=flat
   :target: https://anaconda.org/bioconda/bacprune
   :alt:   (downloads)
.. |docker_bacprune| image:: https://quay.io/repository/biocontainers/bacprune/status
   :target: https://quay.io/repository/biocontainers/bacprune
.. _`bacprune/tags`: https://quay.io/repository/biocontainers/bacprune?tab=tags


.. raw:: html

    <script>
        var package = "bacprune";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacprune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacprune/README.html