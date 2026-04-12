:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracs'
.. highlight: bash

tracs
=====

.. conda:recipe:: tracs
   :replaces_section_title:
   :noindex:

   Tracs \- Fast pairwise transmission inference from single genome and\/or metagenomic data

   :homepage: https://github.com/gtonkinhill/tracs
   :documentation: https://github.com/gtonkinhill/tracs/tree/main/docs
   
   :license: MIT / MIT
   :recipe: /`tracs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracs/meta.yaml>`_

   


.. conda:package:: tracs

   |downloads_tracs| |docker_tracs|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on htsbox: 
   :depends on joblib: 
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on minimap2: 
   :depends on ncbi-genome-download: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyfastx: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on samtools: 
   :depends on scipy: 
   :depends on sourmash: 
   :depends on tqdm: 

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

    pixi global install tracs

to add into an existing workspace instead, run::

    pixi add tracs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tracs

Alternatively, to install into a new environment, run::

    conda create -n envname tracs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tracs:<tag>

(see `tracs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tracs| image:: https://img.shields.io/conda/dn/bioconda/tracs.svg?style=flat
   :target: https://anaconda.org/bioconda/tracs
   :alt:   (downloads)
.. |docker_tracs| image:: https://quay.io/repository/biocontainers/tracs/status
   :target: https://quay.io/repository/biocontainers/tracs
.. _`tracs/tags`: https://quay.io/repository/biocontainers/tracs?tab=tags


.. raw:: html

    <script>
        var package = "tracs";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracs/README.html