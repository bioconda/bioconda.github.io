:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adsplit'
.. highlight: bash

bioconductor-adsplit
====================

.. conda:recipe:: bioconductor-adsplit
   :replaces_section_title:
   :noindex:

   Annotation\-Driven Clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/adSplit.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adsplit/meta.yaml>`_

   This package implements clustering of microarray gene expression profiles according to functional annotations. For each term genes are annotated to\, splits into two subclasses are computed and a significance of the supporting gene set is determined.


.. conda:package:: bioconductor-adsplit

   |downloads_bioconductor-adsplit| |docker_bioconductor-adsplit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0a0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0a0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: ``>=1.9.1``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-adsplit

to add into an existing workspace instead, run::

    pixi add bioconductor-adsplit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adsplit

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adsplit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adsplit:<tag>

(see `bioconductor-adsplit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adsplit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adsplit
   :alt:   (downloads)
.. |docker_bioconductor-adsplit| image:: https://quay.io/repository/biocontainers/bioconductor-adsplit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adsplit
.. _`bioconductor-adsplit/tags`: https://quay.io/repository/biocontainers/bioconductor-adsplit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adsplit";
        var versions = ["1.80.0","1.76.0","1.76.0","1.72.0","1.70.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adsplit/README.html