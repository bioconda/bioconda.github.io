:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-emdomics'
.. highlight: bash

bioconductor-emdomics
=====================

.. conda:recipe:: bioconductor-emdomics
   :replaces_section_title:
   :noindex:

   Earth Mover\'s Distance for Differential Analysis of Genomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EMDomics.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-emdomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-emdomics/meta.yaml>`_

   The EMDomics algorithm is used to perform a supervised multi\-class analysis to measure the magnitude and statistical significance of observed continuous genomics data between groups. Usually the data will be gene expression values from array\-based or sequence\-based experiments\, but data from other types of experiments can also be analyzed \(e.g. copy number variation\). Traditional methods like Significance Analysis of Microarrays \(SAM\) and Linear Models for Microarray Data \(LIMMA\) use significance tests based on summary statistics \(mean and standard deviation\) of the distributions. This approach lacks power to identify expression differences between groups that show high levels of intra\-group heterogeneity. The Earth Mover\'s Distance \(EMD\) algorithm instead computes the \"work\" needed to transform one distribution into another\, thus providing a metric of the overall difference in shape between two distributions. Permutation of sample labels is used to generate q\-values for the observed EMD scores. This package also incorporates the Komolgorov\-Smirnov \(K\-S\) test and the Cramer von Mises test \(CVM\)\, which are both common distribution comparison tests.


.. conda:package:: bioconductor-emdomics

   |downloads_bioconductor-emdomics| |docker_bioconductor-emdomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cdft: 
   :depends on r-emdist: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-emdomics

to add into an existing workspace instead, run::

    pixi add bioconductor-emdomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-emdomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-emdomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-emdomics:<tag>

(see `bioconductor-emdomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-emdomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-emdomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-emdomics
   :alt:   (downloads)
.. |docker_bioconductor-emdomics| image:: https://quay.io/repository/biocontainers/bioconductor-emdomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-emdomics
.. _`bioconductor-emdomics/tags`: https://quay.io/repository/biocontainers/bioconductor-emdomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-emdomics";
        var versions = ["2.40.0","2.36.0","2.32.0","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-emdomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-emdomics/README.html