:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop2'
.. highlight: bash

scallop2
========

.. conda:recipe:: scallop2
   :replaces_section_title:
   :noindex:

   A reference\-based transcript assembler optimized for paired\-\/multiple\-end RNA\-seq data.

   :homepage: https://github.com/Shao-Group/scallop2
   :license: BSD / BSD-3-Clause
   :recipe: /`scallop2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2/meta.yaml>`_

   


.. conda:package:: scallop2

   |downloads_scallop2| |docker_scallop2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-8</code>,  <code>1.1.2-7</code>,  <code>1.1.2-6</code>,  <code>1.1.2-5</code>,  <code>1.1.2-4</code>,  <code>1.1.2-3</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  </span></summary>
      

      ``1.1.2-8``,  ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libxcrypt: ``>=4.4.36``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install scallop2

to add into an existing workspace instead, run::

    pixi add scallop2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scallop2

Alternatively, to install into a new environment, run::

    conda create -n envname scallop2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scallop2:<tag>

(see `scallop2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scallop2| image:: https://img.shields.io/conda/dn/bioconda/scallop2.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop2
   :alt:   (downloads)
.. |docker_scallop2| image:: https://quay.io/repository/biocontainers/scallop2/status
   :target: https://quay.io/repository/biocontainers/scallop2
.. _`scallop2/tags`: https://quay.io/repository/biocontainers/scallop2?tab=tags


.. raw:: html

    <script>
        var package = "scallop2";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop2/README.html