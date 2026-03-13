:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigfeature'
.. highlight: bash

bioconductor-sigfeature
=======================

.. conda:recipe:: bioconductor-sigfeature
   :replaces_section_title:
   :noindex:

   sigFeature\: Significant feature selection using SVM\-RFE \& t\-statistic

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sigFeature.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sigfeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature/meta.yaml>`_

   This package provides a novel feature selection algorithm for binary classification using support vector machine recursive feature elimination SVM\-RFE and t\-statistic. In this feature selection process\, the selected features are differentially significant between the two classes and also they are good classifier with higher degree of classification accuracy.


.. conda:package:: bioconductor-sigfeature

   |downloads_bioconductor-sigfeature| |docker_bioconductor-sigfeature|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocviews: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-matrix: 
   :depends on r-nlme: 
   :depends on r-openxlsx: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-sparsem: 

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

    pixi global install bioconductor-sigfeature

to add into an existing workspace instead, run::

    pixi add bioconductor-sigfeature

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sigfeature

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sigfeature

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sigfeature:<tag>

(see `bioconductor-sigfeature/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sigfeature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfeature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigfeature
   :alt:   (downloads)
.. |docker_bioconductor-sigfeature| image:: https://quay.io/repository/biocontainers/bioconductor-sigfeature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfeature
.. _`bioconductor-sigfeature/tags`: https://quay.io/repository/biocontainers/bioconductor-sigfeature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigfeature";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html