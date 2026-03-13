:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagraph'
.. highlight: bash

metagraph
=========

.. conda:recipe:: metagraph
   :replaces_section_title:
   :noindex:

   Ultra Scalable Framework for DNA Search\, Alignment\, Assembly.

   :homepage: https://github.com/ratschlab/metagraph
   :documentation: https://metagraph.ethz.ch
   
   :license: MIT / MIT
   :recipe: /`metagraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagraph/meta.yaml>`_

   The MetaGraph framework allows for indexing and analysis of very large biological sequence collections\, producing compressed indexes that can represent several petabases of input data. The indexes can be efficiently queried with any query sequence of interest.



.. conda:package:: metagraph

   |downloads_metagraph| |docker_metagraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.5-0</code>,  <code>0.4.3-0</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.3-0``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``* *_llvm``
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on icu: ``>=75.1,<76.0a0``
   :depends on jemalloc: 
   :depends on libdeflate: ``>=1.25,<1.26.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgomp: 
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=14``
   :depends on llvm-openmp: ``>=22.1.0``
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install metagraph

to add into an existing workspace instead, run::

    pixi add metagraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metagraph

Alternatively, to install into a new environment, run::

    conda create -n envname metagraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metagraph:<tag>

(see `metagraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metagraph| image:: https://img.shields.io/conda/dn/bioconda/metagraph.svg?style=flat
   :target: https://anaconda.org/bioconda/metagraph
   :alt:   (downloads)
.. |docker_metagraph| image:: https://quay.io/repository/biocontainers/metagraph/status
   :target: https://quay.io/repository/biocontainers/metagraph
.. _`metagraph/tags`: https://quay.io/repository/biocontainers/metagraph?tab=tags


.. raw:: html

    <script>
        var package = "metagraph";
        var versions = ["0.5.1","0.5.0","0.4.5","0.4.3","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagraph/README.html