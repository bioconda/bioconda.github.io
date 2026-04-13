:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fabia'
.. highlight: bash

bioconductor-fabia
==================

.. conda:recipe:: bioconductor-fabia
   :replaces_section_title:
   :noindex:

   FABIA\: Factor Analysis for Bicluster Acquisition

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-fabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fabia/meta.yaml>`_
   :links: biotools: :biotools:`fabia`

   Biclustering by \"Factor Analysis for Bicluster Acquisition\" \(FABIA\). FABIA is a model\-based technique for biclustering\, that is clustering rows and columns simultaneously. Biclusters are found by factor analysis where both the factors and the loading matrix are sparse. FABIA is a multiplicative model that extracts linear dependencies between samples and feature patterns. It captures realistic non\-Gaussian data distributions with heavy tails as observed in gene expression measurements. FABIA utilizes well understood model selection techniques like the EM algorithm and variational approaches and is embedded into a Bayesian framework. FABIA ranks biclusters according to their information content and separates spurious biclusters from true biclusters. The code is written in C.


.. conda:package:: bioconductor-fabia

   |downloads_bioconductor-fabia| |docker_bioconductor-fabia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.56.0-0</code>,  <code>2.52.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.40.0-2</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  </span></summary>
      

      ``2.56.0-0``,  ``2.52.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.40.0-2``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-1``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-fabia

to add into an existing workspace instead, run::

    pixi add bioconductor-fabia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fabia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fabia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fabia:<tag>

(see `bioconductor-fabia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fabia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fabia
   :alt:   (downloads)
.. |docker_bioconductor-fabia| image:: https://quay.io/repository/biocontainers/bioconductor-fabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fabia
.. _`bioconductor-fabia/tags`: https://quay.io/repository/biocontainers/bioconductor-fabia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fabia";
        var versions = ["2.56.0","2.52.0","2.48.0","2.46.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fabia/README.html