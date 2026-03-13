:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stream_atac'
.. highlight: bash

stream_atac
===========

.. conda:recipe:: stream_atac
   :replaces_section_title:
   :noindex:

   STREAM\-Single\-cell Trajectories Reconstruction\, Exploration And Mapping of single\-cell data. Preprocessing steps for single cell atac\-seq data.

   :homepage: https://github.com/pinellolab/STREAM_atac
   :license: AGPL-3
   :recipe: /`stream_atac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_atac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stream_atac/meta.yaml>`_

   


.. conda:package:: stream_atac

   |downloads_stream_atac| |docker_stream_atac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.5-5</code>,  <code>0.3.5-4</code>,  <code>0.3.5-3</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.3.5-5``,  ``0.3.5-4``,  ``0.3.5-3``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.3a-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: 
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm9: 
   :depends on bioconductor-chromvar: 
   :depends on bioconductor-jaspar2016: 
   :depends on bioconductor-motifmatchr: 
   :depends on perl: 
   :depends on python: ``>=3``
   :depends on r-base: 
   :depends on r-essentials: 
   :depends on r-optparse: 
   :depends on rpy2: ``2.9.*``
   :depends on scikit-learn: 
   :depends on unzip: 
   :depends on wget: 
   :depends on zip: 

   :additional platforms:
      

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

    pixi global install stream_atac

to add into an existing workspace instead, run::

    pixi add stream_atac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stream_atac

Alternatively, to install into a new environment, run::

    conda create -n envname stream_atac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stream_atac:<tag>

(see `stream_atac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stream_atac| image:: https://img.shields.io/conda/dn/bioconda/stream_atac.svg?style=flat
   :target: https://anaconda.org/bioconda/stream_atac
   :alt:   (downloads)
.. |docker_stream_atac| image:: https://quay.io/repository/biocontainers/stream_atac/status
   :target: https://quay.io/repository/biocontainers/stream_atac
.. _`stream_atac/tags`: https://quay.io/repository/biocontainers/stream_atac?tab=tags


.. raw:: html

    <script>
        var package = "stream_atac";
        var versions = ["0.3.5","0.3.5","0.3.5","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stream_atac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stream_atac/README.html