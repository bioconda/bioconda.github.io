:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meb'
.. highlight: bash

bioconductor-meb
================

.. conda:recipe:: bioconductor-meb
   :replaces_section_title:
   :noindex:

   A normalization\-invariant minimum enclosing ball method to detect differentially expressed genes for RNA\-seq and scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MEB.html
   :license: GPL-2
   :recipe: /`bioconductor-meb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meb/meta.yaml>`_

   This package provides a method to identify differential expression genes in the same or different species. Given that non\-DE genes have some similarities in features\, a scaling\-free minimum enclosing ball \(SFMEB\) model is built to cover those non\-DE genes in feature space\, then those DE genes\, which are enormously different from non\-DE genes\, being regarded as outliers and rejected outside the ball. The method on this package is described in the article \'A minimum enclosing ball method to detect differential expression genes for RNA\-seq data\'. The SFMEB method is extended to the scMEB method that considering two or more potential types of cells or unknown labels scRNA\-seq dataset DEGs identification.


.. conda:package:: bioconductor-meb

   |downloads_bioconductor-meb| |docker_bioconductor-meb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-wrswor: 

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

    pixi global install bioconductor-meb

to add into an existing workspace instead, run::

    pixi add bioconductor-meb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-meb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-meb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-meb:<tag>

(see `bioconductor-meb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-meb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meb
   :alt:   (downloads)
.. |docker_bioconductor-meb| image:: https://quay.io/repository/biocontainers/bioconductor-meb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meb
.. _`bioconductor-meb/tags`: https://quay.io/repository/biocontainers/bioconductor-meb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meb";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meb/README.html