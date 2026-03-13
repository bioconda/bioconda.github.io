:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biosigner'
.. highlight: bash

bioconductor-biosigner
======================

.. conda:recipe:: bioconductor-biosigner
   :replaces_section_title:
   :noindex:

   Signature discovery from omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biosigner.html
   :license: CeCILL
   :recipe: /`bioconductor-biosigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner/meta.yaml>`_
   :links: biotools: :biotools:`biosigner`, doi: :doi:`10.3389/fmolb.2016.00026`

   Feature selection is critical in omics data analysis to extract restricted and meaningful molecular signatures from complex and high\-dimension data\, and to build robust classifiers. This package implements a new method to assess the relevance of the variables for the prediction performances of the classifier. The approach can be run in parallel with the PLS\-DA\, Random Forest\, and SVM binary classifiers. The signatures and the corresponding \'restricted\' models are returned\, enabling future predictions on new datasets. A Galaxy implementation of the package is available within the Workflow4metabolomics.org online infrastructure for computational metabolomics.


.. conda:package:: bioconductor-biosigner

   |downloads_bioconductor-biosigner| |docker_bioconductor-biosigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.2-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.10-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multidataset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-ropls: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
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

    pixi global install bioconductor-biosigner

to add into an existing workspace instead, run::

    pixi add bioconductor-biosigner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biosigner

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biosigner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biosigner:<tag>

(see `bioconductor-biosigner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biosigner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biosigner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biosigner
   :alt:   (downloads)
.. |docker_bioconductor-biosigner| image:: https://quay.io/repository/biocontainers/bioconductor-biosigner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biosigner
.. _`bioconductor-biosigner/tags`: https://quay.io/repository/biocontainers/bioconductor-biosigner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biosigner";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biosigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biosigner/README.html