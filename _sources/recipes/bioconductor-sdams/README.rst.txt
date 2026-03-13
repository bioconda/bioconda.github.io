:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sdams'
.. highlight: bash

bioconductor-sdams
==================

.. conda:recipe:: bioconductor-sdams
   :replaces_section_title:
   :noindex:

   Differential Abundant\/Expression Analysis for Metabolomics\, Proteomics and single\-cell RNA sequencing Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SDAMS.html
   :license: GPL
   :recipe: /`bioconductor-sdams <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sdams>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sdams/meta.yaml>`_

   This Package utilizes a Semi\-parametric Differential Abundance\/expression analysis \(SDA\) method for metabolomics and proteomics data from mass spectrometry as well as single\-cell RNA sequencing data. SDA is able to robustly handle non\-normally distributed data and provides a clear quantification of the effect size.


.. conda:package:: bioconductor-sdams

   |downloads_bioconductor-sdams| |docker_bioconductor-sdams|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-trust: 

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

    pixi global install bioconductor-sdams

to add into an existing workspace instead, run::

    pixi add bioconductor-sdams

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sdams

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sdams

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sdams:<tag>

(see `bioconductor-sdams/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sdams| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sdams.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sdams
   :alt:   (downloads)
.. |docker_bioconductor-sdams| image:: https://quay.io/repository/biocontainers/bioconductor-sdams/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sdams
.. _`bioconductor-sdams/tags`: https://quay.io/repository/biocontainers/bioconductor-sdams?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sdams";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sdams/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sdams/README.html