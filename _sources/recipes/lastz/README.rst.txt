:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lastz'
.. highlight: bash

lastz
=====

.. conda:recipe:: lastz
   :replaces_section_title:
   :noindex:

   LASTZ is a program for aligning DNA sequences\, a pairwise aligner.

   :homepage: https://www.bx.psu.edu/~rsharris/lastz
   :documentation: https://lastz.github.io/lastz
   
   :developer docs: https://github.com/lastz/lastz
   :license: MIT / MIT
   :recipe: /`lastz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz/meta.yaml>`_
   :links: biotools: :biotools:`lastz`

   


.. conda:package:: lastz

   |downloads_lastz| |docker_lastz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.04.52-1</code>,  <code>1.04.52-0</code>,  <code>1.04.45-0</code>,  <code>1.04.41-0</code>,  <code>1.04.22-2</code>,  <code>1.04.22-1</code>,  <code>1.04.22-0</code>,  <code>1.04.15-3</code>,  <code>1.04.15-2</code>,  </span></summary>
      

      ``1.04.52-1``,  ``1.04.52-0``,  ``1.04.45-0``,  ``1.04.41-0``,  ``1.04.22-2``,  ``1.04.22-1``,  ``1.04.22-0``,  ``1.04.15-3``,  ``1.04.15-2``,  ``1.04.15-1``,  ``1.04.15-0``,  ``1.0.4-5``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``

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

    pixi global install lastz

to add into an existing workspace instead, run::

    pixi add lastz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lastz

Alternatively, to install into a new environment, run::

    conda create -n envname lastz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lastz:<tag>

(see `lastz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lastz| image:: https://img.shields.io/conda/dn/bioconda/lastz.svg?style=flat
   :target: https://anaconda.org/bioconda/lastz
   :alt:   (downloads)
.. |docker_lastz| image:: https://quay.io/repository/biocontainers/lastz/status
   :target: https://quay.io/repository/biocontainers/lastz
.. _`lastz/tags`: https://quay.io/repository/biocontainers/lastz?tab=tags


.. raw:: html

    <script>
        var package = "lastz";
        var versions = ["1.04.52","1.04.52","1.04.45","1.04.41","1.04.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lastz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lastz/README.html