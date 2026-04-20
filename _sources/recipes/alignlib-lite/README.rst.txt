:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alignlib-lite'
.. highlight: bash

alignlib-lite
=============

.. conda:recipe:: alignlib-lite
   :replaces_section_title:
   :noindex:

   Simple wrapper around alignlib C\+\+ library for sequence alignment.

   :homepage: https://github.com/AndreasHeger/alignlib
   :documentation: https://sourceforge.net/projects/alignlib
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`alignlib-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alignlib-lite/meta.yaml>`_

   


.. conda:package:: alignlib-lite

   |downloads_alignlib-lite| |docker_alignlib-lite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3-9</code>,  <code>0.3-8</code>,  <code>0.3-6</code>,  <code>0.3-5</code>,  <code>0.3-4</code>,  <code>0.3-3</code>,  <code>0.3-2</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  </span></summary>
      

      ``0.3-9``,  ``0.3-8``,  ``0.3-6``,  ``0.3-5``,  ``0.3-4``,  ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install alignlib-lite

to add into an existing workspace instead, run::

    pixi add alignlib-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alignlib-lite

Alternatively, to install into a new environment, run::

    conda create -n envname alignlib-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alignlib-lite:<tag>

(see `alignlib-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alignlib-lite| image:: https://img.shields.io/conda/dn/bioconda/alignlib-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/alignlib-lite
   :alt:   (downloads)
.. |docker_alignlib-lite| image:: https://quay.io/repository/biocontainers/alignlib-lite/status
   :target: https://quay.io/repository/biocontainers/alignlib-lite
.. _`alignlib-lite/tags`: https://quay.io/repository/biocontainers/alignlib-lite?tab=tags


.. raw:: html

    <script>
        var package = "alignlib-lite";
        var versions = ["0.3","0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alignlib-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alignlib-lite/README.html