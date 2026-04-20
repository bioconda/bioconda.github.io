:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aster'
.. highlight: bash

aster
=====

.. conda:recipe:: aster
   :replaces_section_title:
   :noindex:

   Accurate Species Tree EstimatoR series\; a family of optimation algorithms for species tree inference implemented in C\+\+.

   :homepage: https://github.com/chaoszhang/ASTER
   :documentation: https://github.com/chaoszhang/ASTER/blob/v1.23/README.md
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`aster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster/meta.yaml>`_

   


.. conda:package:: aster

   |downloads_aster| |docker_aster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23-0</code>,  <code>1.22-1</code>,  <code>1.22-0</code>,  <code>1.19-2</code>,  <code>1.19-1</code>,  <code>1.19-0</code>,  <code>1.16-2</code>,  <code>1.16-1</code>,  <code>1.16-0</code>,  </span></summary>
      

      ``1.23-0``,  ``1.22-1``,  ``1.22-0``,  ``1.19-2``,  ``1.19-1``,  ``1.19-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``,  ``1.15-2``,  ``1.15-1``,  ``1.15-0``,  ``1.13-1``,  ``1.13-0``,  ``1.10-0``,  ``1.3-1``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
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

    pixi global install aster

to add into an existing workspace instead, run::

    pixi add aster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aster

Alternatively, to install into a new environment, run::

    conda create -n envname aster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aster:<tag>

(see `aster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aster| image:: https://img.shields.io/conda/dn/bioconda/aster.svg?style=flat
   :target: https://anaconda.org/bioconda/aster
   :alt:   (downloads)
.. |docker_aster| image:: https://quay.io/repository/biocontainers/aster/status
   :target: https://quay.io/repository/biocontainers/aster
.. _`aster/tags`: https://quay.io/repository/biocontainers/aster?tab=tags


.. raw:: html

    <script>
        var package = "aster";
        var versions = ["1.23","1.22","1.22","1.19","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aster/README.html