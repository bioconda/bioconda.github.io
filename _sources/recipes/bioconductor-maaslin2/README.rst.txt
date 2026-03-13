:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maaslin2'
.. highlight: bash

bioconductor-maaslin2
=====================

.. conda:recipe:: bioconductor-maaslin2
   :replaces_section_title:
   :noindex:

   \"Multivariable Association Discovery in Population\-scale Meta\-omics Studies\"

   :homepage: https://bioconductor.org/packages/3.19/bioc/html/Maaslin2.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maaslin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2/meta.yaml>`_

   MaAsLin2 is comprehensive R package for efficiently determining multivariable association between clinical metadata and microbial meta\'omic features. MaAsLin2 relies on general linear models to accommodate most modern epidemiological study designs\, including cross\-sectional and longitudinal\, and offers a variety of data exploration\, normalization\, and transformation methods. MaAsLin2 is the next generation of MaAsLin.


.. conda:package:: bioconductor-maaslin2

   |downloads_bioconductor-maaslin2| |docker_bioconductor-maaslin2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-biglm: 
   :depends on r-car: 
   :depends on r-chemometrics: 
   :depends on r-cplm: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-glmmtmb: 
   :depends on r-hash: 
   :depends on r-lme4: 
   :depends on r-lmertest: 
   :depends on r-logging: 
   :depends on r-mass: 
   :depends on r-optparse: 
   :depends on r-pbapply: 
   :depends on r-pcapp: 
   :depends on r-pheatmap: 
   :depends on r-pscl: 
   :depends on r-robustbase: 
   :depends on r-tibble: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-maaslin2

to add into an existing workspace instead, run::

    pixi add bioconductor-maaslin2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-maaslin2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-maaslin2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-maaslin2:<tag>

(see `bioconductor-maaslin2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-maaslin2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maaslin2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maaslin2
   :alt:   (downloads)
.. |docker_bioconductor-maaslin2| image:: https://quay.io/repository/biocontainers/bioconductor-maaslin2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maaslin2
.. _`bioconductor-maaslin2/tags`: https://quay.io/repository/biocontainers/bioconductor-maaslin2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maaslin2";
        var versions = ["1.18.0","1.16.0","1.16.0","1.14.1","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html