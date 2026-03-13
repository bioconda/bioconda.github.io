:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisetad'
.. highlight: bash

bioconductor-precisetad
=======================

.. conda:recipe:: bioconductor-precisetad
   :replaces_section_title:
   :noindex:

   preciseTAD\: A machine learning framework for precise TAD boundary prediction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/preciseTAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-precisetad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisetad/meta.yaml>`_

   preciseTAD provides functions to predict the location of boundaries of topologically associated domains \(TADs\) and chromatin loops at base\-level resolution. As an input\, it takes BED\-formatted genomic coordinates of domain boundaries detected from low\-resolution Hi\-C data\, and coordinates of high\-resolution genomic annotations from ENCODE or other consortia. preciseTAD employs several feature engineering strategies and resampling techniques to address class imbalance\, and trains an optimized random forest model for predicting low\-resolution domain boundaries. Translated on a base\-level\, preciseTAD predicts the probability for each base to be a boundary. Density\-based clustering and scalable partitioning techniques are used to detect precise boundary regions and summit points. Compared with low\-resolution boundaries\, preciseTAD boundaries are highly enriched for CTCF\, RAD21\, SMC3\, and ZNF143 signal and more conserved across cell lines. The pre\-trained model can accurately predict boundaries in another cell line using CTCF\, RAD21\, SMC3\, and ZNF143 annotation data for this cell line.


.. conda:package:: bioconductor-precisetad

   |downloads_bioconductor-precisetad| |docker_bioconductor-precisetad|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rcgh: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-cluster: 
   :depends on r-dbscan: 
   :depends on r-dosnow: 
   :depends on r-e1071: 
   :depends on r-foreach: 
   :depends on r-gtools: 
   :depends on r-modelmetrics: 
   :depends on r-pbapply: 
   :depends on r-proc: 
   :depends on r-prroc: 
   :depends on r-randomforest: 

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

    pixi global install bioconductor-precisetad

to add into an existing workspace instead, run::

    pixi add bioconductor-precisetad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-precisetad

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-precisetad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-precisetad:<tag>

(see `bioconductor-precisetad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-precisetad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisetad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisetad
   :alt:   (downloads)
.. |docker_bioconductor-precisetad| image:: https://quay.io/repository/biocontainers/bioconductor-precisetad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisetad
.. _`bioconductor-precisetad/tags`: https://quay.io/repository/biocontainers/bioconductor-precisetad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-precisetad";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisetad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisetad/README.html