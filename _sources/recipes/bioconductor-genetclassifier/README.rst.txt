:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genetclassifier'
.. highlight: bash

bioconductor-genetclassifier
============================

.. conda:recipe:: bioconductor-genetclassifier
   :replaces_section_title:
   :noindex:

   Classify diseases and build associated gene networks using gene expression profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/geNetClassifier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genetclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier/meta.yaml>`_
   :links: biotools: :biotools:`genetclassifier`

   Comprehensive package to automatically train and validate a multi\-class SVM classifier based on gene expression data. Provides transparent selection of gene markers\, their coexpression networks\, and an interface to query the classifier.


.. conda:package:: bioconductor-genetclassifier

   |downloads_bioconductor-genetclassifier| |docker_bioconductor-genetclassifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-ebarrays: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-minet: ``>=3.68.0,<3.69.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 

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

    pixi global install bioconductor-genetclassifier

to add into an existing workspace instead, run::

    pixi add bioconductor-genetclassifier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genetclassifier

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genetclassifier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genetclassifier:<tag>

(see `bioconductor-genetclassifier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genetclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genetclassifier
   :alt:   (downloads)
.. |docker_bioconductor-genetclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-genetclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetclassifier
.. _`bioconductor-genetclassifier/tags`: https://quay.io/repository/biocontainers/bioconductor-genetclassifier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genetclassifier";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html