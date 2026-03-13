:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusov'
.. highlight: bash

bioconductor-consensusov
========================

.. conda:recipe:: bioconductor-consensusov
   :replaces_section_title:
   :noindex:

   Gene expression\-based subtype classification for high\-grade serous ovarian cancer

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/consensusOV.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-consensusov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusov/meta.yaml>`_

   This package implements four major subtype classifiers for high\-grade serous \(HGS\) ovarian cancer as described by Helland et al. \(PLoS One\, 2011\)\, Bentink et al. \(PLoS One\, 2012\)\, Verhaak et al. \(J Clin Invest\, 2013\)\, and Konecny et al. \(J Natl Cancer Inst\, 2014\). In addition\, the package implements a consensus classifier\, which consolidates and improves on the robustness of the proposed subtype classifiers\, thereby providing reliable stratification of patients with HGS ovarian tumors of clearly defined subtype.


.. conda:package:: bioconductor-consensusov

   |downloads_bioconductor-consensusov| |docker_bioconductor-consensusov|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends on bioconductor-genefu: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-gsva: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-gdata: 
   :depends on r-matrixstats: 
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

    pixi global install bioconductor-consensusov

to add into an existing workspace instead, run::

    pixi add bioconductor-consensusov

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-consensusov

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-consensusov

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-consensusov:<tag>

(see `bioconductor-consensusov/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-consensusov| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusov
   :alt:   (downloads)
.. |docker_bioconductor-consensusov| image:: https://quay.io/repository/biocontainers/bioconductor-consensusov/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusov
.. _`bioconductor-consensusov/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusov?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consensusov";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusov/README.html