:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pram'
.. highlight: bash

bioconductor-pram
=================

.. conda:recipe:: bioconductor-pram
   :replaces_section_title:
   :noindex:

   Pooling RNA\-seq datasets for assembling transcript models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pram.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pram/meta.yaml>`_

   Publicly available RNA\-seq data is routinely used for retrospective analysis to elucidate new biology.  Novel transcript discovery enabled by large collections of RNA\-seq datasets has emerged as one of such analysis.  To increase the power of transcript discovery from large collections of RNA\-seq datasets\, we developed a new R package named Pooling RNA\-seq and Assembling Models \(PRAM\)\, which builds transcript models in intergenic regions from pooled RNA\-seq datasets.  This package includes functions for defining intergenic regions\, extracting and pooling related RNA\-seq alignments\, predicting\, selected\, and evaluating transcript models.


.. conda:package:: bioconductor-pram

   |downloads_bioconductor-pram| |docker_bioconductor-pram|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.11.8``

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

    pixi global install bioconductor-pram

to add into an existing workspace instead, run::

    pixi add bioconductor-pram

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pram

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pram

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pram:<tag>

(see `bioconductor-pram/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pram
   :alt:   (downloads)
.. |docker_bioconductor-pram| image:: https://quay.io/repository/biocontainers/bioconductor-pram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pram
.. _`bioconductor-pram/tags`: https://quay.io/repository/biocontainers/bioconductor-pram?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pram";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pram/README.html