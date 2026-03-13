:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normalyzerde'
.. highlight: bash

bioconductor-normalyzerde
=========================

.. conda:recipe:: bioconductor-normalyzerde
   :replaces_section_title:
   :noindex:

   Evaluation of normalization methods and calculation of differential expression analysis statistics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NormalyzerDE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-normalyzerde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalyzerde/meta.yaml>`_

   NormalyzerDE provides screening of normalization methods for LC\-MS based expression data. It calculates a range of normalized matrices using both existing approaches and a novel time\-segmented approach\, calculates performance measures and generates an evaluation report. Furthermore\, it provides an easy utility for Limma\- or ANOVA\- based differential expression analysis.


.. conda:package:: bioconductor-normalyzerde

   |downloads_bioconductor-normalyzerde| |docker_bioconductor-normalyzerde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-car: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
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

    pixi global install bioconductor-normalyzerde

to add into an existing workspace instead, run::

    pixi add bioconductor-normalyzerde

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-normalyzerde

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-normalyzerde

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-normalyzerde:<tag>

(see `bioconductor-normalyzerde/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-normalyzerde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normalyzerde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normalyzerde
   :alt:   (downloads)
.. |docker_bioconductor-normalyzerde| image:: https://quay.io/repository/biocontainers/bioconductor-normalyzerde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normalyzerde
.. _`bioconductor-normalyzerde/tags`: https://quay.io/repository/biocontainers/bioconductor-normalyzerde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-normalyzerde";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normalyzerde/README.html