:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edaseq'
.. highlight: bash

bioconductor-edaseq
===================

.. conda:recipe:: bioconductor-edaseq
   :replaces_section_title:
   :noindex:

   Exploratory Data Analysis and Normalization for RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EDASeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-edaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edaseq/meta.yaml>`_
   :links: biotools: :biotools:`edaseq`

   Numerical and graphical summaries of RNA\-Seq read data. Within\-lane normalization procedures to adjust for GC\-content effect \(or other gene\-level effects\) on read counts\: loess robust local regression\, global\-scaling\, and full\-quantile normalization \(Risso et al.\, 2011\). Between\-lane normalization procedures to adjust for distributional differences between lanes \(e.g.\, sequencing depth\)\: global\-scaling and full\-quantile normalization \(Bullard et al.\, 2010\).


.. conda:package:: bioconductor-edaseq

   |downloads_bioconductor-edaseq| |docker_bioconductor-edaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-1</code>,  <code>2.24.0-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.40.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.0-0``,  ``2.14.1-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-aroma.light: ``>=3.40.0,<3.41.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-shortread: ``>=1.68.0,<1.69.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 

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

    pixi global install bioconductor-edaseq

to add into an existing workspace instead, run::

    pixi add bioconductor-edaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-edaseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-edaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-edaseq:<tag>

(see `bioconductor-edaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-edaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edaseq
   :alt:   (downloads)
.. |docker_bioconductor-edaseq| image:: https://quay.io/repository/biocontainers/bioconductor-edaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edaseq
.. _`bioconductor-edaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-edaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edaseq";
        var versions = ["2.44.0","2.40.0","2.36.0","2.34.0","2.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edaseq/README.html