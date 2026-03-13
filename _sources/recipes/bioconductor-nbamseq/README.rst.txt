:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nbamseq'
.. highlight: bash

bioconductor-nbamseq
====================

.. conda:recipe:: bioconductor-nbamseq
   :replaces_section_title:
   :noindex:

   Negative Binomial Additive Model for RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NBAMSeq.html
   :license: GPL-2
   :recipe: /`bioconductor-nbamseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nbamseq/meta.yaml>`_

   High\-throughput sequencing experiments followed by differential expression analysis is a widely used approach to detect genomic biomarkers. A fundamental step in differential expression analysis is to model the association between gene counts and covariates of interest. NBAMSeq a flexible statistical model based on the generalized additive model and allows for information sharing across genes in variance estimation.


.. conda:package:: bioconductor-nbamseq

   |downloads_bioconductor-nbamseq| |docker_bioconductor-nbamseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-1</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mgcv: ``>=1.8-24``

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

    pixi global install bioconductor-nbamseq

to add into an existing workspace instead, run::

    pixi add bioconductor-nbamseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nbamseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nbamseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nbamseq:<tag>

(see `bioconductor-nbamseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nbamseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nbamseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nbamseq
   :alt:   (downloads)
.. |docker_bioconductor-nbamseq| image:: https://quay.io/repository/biocontainers/bioconductor-nbamseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nbamseq
.. _`bioconductor-nbamseq/tags`: https://quay.io/repository/biocontainers/bioconductor-nbamseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nbamseq";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nbamseq/README.html