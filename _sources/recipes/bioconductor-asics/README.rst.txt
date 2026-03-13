:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asics'
.. highlight: bash

bioconductor-asics
==================

.. conda:recipe:: bioconductor-asics
   :replaces_section_title:
   :noindex:

   Automatic Statistical Identification in Complex Spectra

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASICS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-asics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asics/meta.yaml>`_

   With a set of pure metabolite reference spectra\, ASICS quantifies concentration of metabolites in a complex spectrum. The identification of metabolites is performed by fitting a mixture model to the spectra of the library with a sparse penalty. The method and its statistical properties are described in Tardivel et al. \(2017\) \<doi\:10.1007\/s11306\-017\-1244\-5\>.


.. conda:package:: bioconductor-asics

   |downloads_bioconductor-asics| |docker_bioconductor-asics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.26.0-0</code>,  <code>2.22.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  </span></summary>
      

      ``2.26.0-0``,  ``2.22.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-pepsnmr: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-ropls: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-gridextra: 
   :depends on r-matrix: 
   :depends on r-mvtnorm: 
   :depends on r-plyr: 
   :depends on r-quadprog: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-asics

to add into an existing workspace instead, run::

    pixi add bioconductor-asics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-asics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-asics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-asics:<tag>

(see `bioconductor-asics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-asics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asics
   :alt:   (downloads)
.. |docker_bioconductor-asics| image:: https://quay.io/repository/biocontainers/bioconductor-asics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asics
.. _`bioconductor-asics/tags`: https://quay.io/repository/biocontainers/bioconductor-asics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-asics";
        var versions = ["2.26.0","2.22.0","2.18.0","2.16.0","2.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asics/README.html