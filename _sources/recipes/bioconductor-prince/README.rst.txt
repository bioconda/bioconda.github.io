:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prince'
.. highlight: bash

bioconductor-prince
===================

.. conda:recipe:: bioconductor-prince
   :replaces_section_title:
   :noindex:

   Predicting Interactomes from Co\-Elution

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PrInCE.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-prince <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prince>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prince/meta.yaml>`_

   PrInCE \(Predicting Interactomes from Co\-Elution\) uses a naive Bayes classifier trained on dataset\-derived features to recover protein\-protein interactions from co\-elution chromatogram profiles. This package contains the R implementation of PrInCE.


.. conda:package:: bioconductor-prince

   |downloads_bioconductor-prince| |docker_bioconductor-prince|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.7.4``
   :depends on r-forecast: ``>=8.2``
   :depends on r-hmisc: ``>=4.0``
   :depends on r-liblinear: ``>=2.10-8``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-naivebayes: ``>=0.9.1``
   :depends on r-progress: ``>=1.1.2``
   :depends on r-purrr: ``>=0.2.4``
   :depends on r-ranger: ``>=0.8.0``
   :depends on r-rdpack: ``>=0.7``
   :depends on r-robustbase: ``>=0.92-7``
   :depends on r-speedglm: ``>=0.3-2``
   :depends on r-tester: ``>=0.1.7``
   :depends on r-tidyr: ``>=0.8.99``

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

    pixi global install bioconductor-prince

to add into an existing workspace instead, run::

    pixi add bioconductor-prince

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-prince

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-prince

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-prince:<tag>

(see `bioconductor-prince/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-prince| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prince.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prince
   :alt:   (downloads)
.. |docker_bioconductor-prince| image:: https://quay.io/repository/biocontainers/bioconductor-prince/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prince
.. _`bioconductor-prince/tags`: https://quay.io/repository/biocontainers/bioconductor-prince?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prince";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prince/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prince/README.html