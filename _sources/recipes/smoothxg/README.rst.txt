:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoothxg'
.. highlight: bash

smoothxg
========

.. conda:recipe:: smoothxg
   :replaces_section_title:
   :noindex:

   Local reconstruction of variation graphs using partial order alignment.

   :homepage: https://github.com/pangenome/smoothxg
   :documentation: https://github.com/pangenome/smoothxg/blob/v0.8.2/README.md
   
   :license: MIT / MIT
   :recipe: /`smoothxg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-024-02430-3`

   


.. conda:package:: smoothxg

   |downloads_smoothxg| |docker_smoothxg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.8-0``,  ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``* *_llvm``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on jemalloc: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on llvm-openmp: ``>=21.1.4``
   :depends on odgi: ``>=0.9.3,<0.10.0a0``
   :depends on sdsl-lite: 
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install smoothxg

to add into an existing workspace instead, run::

    pixi add smoothxg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smoothxg

Alternatively, to install into a new environment, run::

    conda create -n envname smoothxg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smoothxg:<tag>

(see `smoothxg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smoothxg| image:: https://img.shields.io/conda/dn/bioconda/smoothxg.svg?style=flat
   :target: https://anaconda.org/bioconda/smoothxg
   :alt:   (downloads)
.. |docker_smoothxg| image:: https://quay.io/repository/biocontainers/smoothxg/status
   :target: https://quay.io/repository/biocontainers/smoothxg
.. _`smoothxg/tags`: https://quay.io/repository/biocontainers/smoothxg?tab=tags


.. raw:: html

    <script>
        var package = "smoothxg";
        var versions = ["0.8.2","0.8.2","0.8.1","0.8.0","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoothxg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoothxg/README.html