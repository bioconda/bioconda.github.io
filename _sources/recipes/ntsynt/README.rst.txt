:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntsynt'
.. highlight: bash

ntsynt
======

.. conda:recipe:: ntsynt
   :replaces_section_title:
   :noindex:

   Detecting multi\-genome synteny blocks using minimizer graph mapping.

   :homepage: https://github.com/bcgsc/ntsynt
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ntsynt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt/meta.yaml>`_

   


.. conda:package:: ntsynt

   |downloads_ntsynt| |docker_ntsynt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  </span></summary>
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on btllib: ``>=1.7.1``
   :depends on btllib: ``>=1.7.5,<2.0a0``
   :depends on intervaltree: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on ncls: 
   :depends on pybedtools: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 
   :depends on seqtk: 
   :depends on snakemake-minimal: 

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

    pixi global install ntsynt

to add into an existing workspace instead, run::

    pixi add ntsynt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ntsynt

Alternatively, to install into a new environment, run::

    conda create -n envname ntsynt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ntsynt:<tag>

(see `ntsynt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ntsynt| image:: https://img.shields.io/conda/dn/bioconda/ntsynt.svg?style=flat
   :target: https://anaconda.org/bioconda/ntsynt
   :alt:   (downloads)
.. |docker_ntsynt| image:: https://quay.io/repository/biocontainers/ntsynt/status
   :target: https://quay.io/repository/biocontainers/ntsynt
.. _`ntsynt/tags`: https://quay.io/repository/biocontainers/ntsynt?tab=tags


.. raw:: html

    <script>
        var package = "ntsynt";
        var versions = ["1.0.5","1.0.4","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntsynt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntsynt/README.html