:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnablueprint'
.. highlight: bash

rnablueprint
============

.. conda:recipe:: rnablueprint
   :replaces_section_title:
   :noindex:

   The RNAblueprint library solves the problem of uniformly sampling RNA\/DNA sequences compatible to multiple structural constraints and sequence constraints.

   :homepage: https://github.com/ViennaRNA/RNAblueprint
   :documentation: https://viennarna.github.io/RNAblueprint
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rnablueprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint/meta.yaml>`_
   :links: biotools: :biotools:`rnablueprint`, doi: :doi:`10.1093/bioinformatics/btx263`

   


.. conda:package:: rnablueprint

   |downloads_rnablueprint| |docker_rnablueprint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-0</code>,  <code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.0-1</code>,  </span></summary>
      

      ``1.3.3-0``,  ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on gmp: ``>=6.3.0,<7.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install rnablueprint

to add into an existing workspace instead, run::

    pixi add rnablueprint

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnablueprint

Alternatively, to install into a new environment, run::

    conda create -n envname rnablueprint

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnablueprint:<tag>

(see `rnablueprint/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnablueprint| image:: https://img.shields.io/conda/dn/bioconda/rnablueprint.svg?style=flat
   :target: https://anaconda.org/bioconda/rnablueprint
   :alt:   (downloads)
.. |docker_rnablueprint| image:: https://quay.io/repository/biocontainers/rnablueprint/status
   :target: https://quay.io/repository/biocontainers/rnablueprint
.. _`rnablueprint/tags`: https://quay.io/repository/biocontainers/rnablueprint?tab=tags


.. raw:: html

    <script>
        var package = "rnablueprint";
        var versions = ["1.3.3","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnablueprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnablueprint/README.html