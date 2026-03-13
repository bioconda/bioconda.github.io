:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellmultimodal'
.. highlight: bash

bioconductor-singlecellmultimodal
=================================

.. conda:recipe:: bioconductor-singlecellmultimodal
   :replaces_section_title:
   :noindex:

   Integrating Multi\-modal Single Cell Experiment datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/SingleCellMultiModal.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-singlecellmultimodal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellmultimodal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellmultimodal/meta.yaml>`_

   SingleCellMultiModal is an ExperimentHub package that serves multiple datasets obtained from GEO and other sources and represents them as MultiAssayExperiment objects. We provide several multi\-modal datasets including scNMT\, 10X Multiome\, seqFISH\, CITEseq\, SCoPE2\, and others. The scope of the package is is to provide data for benchmarking and analysis. To cite\, use the \'citation\' function and see \<https\:\/\/doi.org\/10.1371\/journal.pcbi.1011324\>.


.. conda:package:: bioconductor-singlecellmultimodal

   |downloads_bioconductor-singlecellmultimodal| |docker_bioconductor-singlecellmultimodal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  <code>1.2.4-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.4-0``,  ``1.1.19-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-singlecellmultimodal

to add into an existing workspace instead, run::

    pixi add bioconductor-singlecellmultimodal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-singlecellmultimodal

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-singlecellmultimodal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-singlecellmultimodal:<tag>

(see `bioconductor-singlecellmultimodal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-singlecellmultimodal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellmultimodal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellmultimodal
   :alt:   (downloads)
.. |docker_bioconductor-singlecellmultimodal| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal
.. _`bioconductor-singlecellmultimodal/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellmultimodal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellmultimodal";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.2","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellmultimodal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellmultimodal/README.html