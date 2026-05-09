:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnashapes'
.. highlight: bash

rnashapes
=========

.. conda:recipe:: rnashapes
   :replaces_section_title:
   :noindex:

   RNAshape abstraction maps structures to a tree\-like domain of shapes\, retaining adjacency and nesting of structural features\, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms\, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non\-heuristic and complete account of properties of the molecule\'s folding space.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnashapes
   :documentation: https://bibiserv.cebitec.uni-bielefeld.de/fold-grammars
   
   :developer docs: https://github.com/jlab/fold-grammars
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rnashapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnashapes

   |downloads_rnashapes| |docker_rnashapes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-3</code>,  <code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.2-3</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.3.0-7</code>,  </span></summary>
      

      ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.2-3``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.0-7``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-0``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bellmans-gapc: ``>=2024.01.12``
   :depends on bellmans-gapc: ``>=2024.1.12``
   :depends on libgcc: ``>=13``
   :depends on libopenblas: ``>=0.3.30,<1.0a0``
   :depends on libstdcxx: ``>=13``
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

    pixi global install rnashapes

to add into an existing workspace instead, run::

    pixi add rnashapes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnashapes

Alternatively, to install into a new environment, run::

    conda create -n envname rnashapes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnashapes:<tag>

(see `rnashapes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnashapes| image:: https://img.shields.io/conda/dn/bioconda/rnashapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rnashapes
   :alt:   (downloads)
.. |docker_rnashapes| image:: https://quay.io/repository/biocontainers/rnashapes/status
   :target: https://quay.io/repository/biocontainers/rnashapes
.. _`rnashapes/tags`: https://quay.io/repository/biocontainers/rnashapes?tab=tags


.. raw:: html

    <script>
        var package = "rnashapes";
        var versions = ["3.4.0","3.4.0","3.4.0","3.4.0","3.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnashapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnashapes/README.html