:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget'
.. highlight: bash

bioconductor-rcistarget
=======================

.. conda:recipe:: bioconductor-rcistarget
   :replaces_section_title:
   :noindex:

   RcisTarget Identify transcription factor binding motifs enriched on a list of genes or genomic regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RcisTarget.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget/meta.yaml>`_

   RcisTarget identifies transcription factor binding motifs \(TFBS\) over\-represented on a gene list. In a first step\, RcisTarget selects DNA motifs that are significantly over\-represented in the surroundings of the transcription start site \(TSS\) of the genes in the gene\-set. This is achieved by using a database that contains genome\-wide cross\-species rankings for each motif. The motifs that are then annotated to TFs and those that have a high Normalized Enrichment Score \(NES\) are retained. Finally\, for each motif and gene\-set\, RcisTarget predicts the candidate target genes \(i.e. genes in the gene\-set that are ranked above the leading edge\).


.. conda:package:: bioconductor-rcistarget

   |downloads_bioconductor-rcistarget| |docker_bioconductor-rcistarget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.29.0-0</code>,  <code>1.26.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.29.0-0``,  ``1.26.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-aucell: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-arrow: ``>=2.0.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-r.utils: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-rcistarget

to add into an existing workspace instead, run::

    pixi add bioconductor-rcistarget

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcistarget

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcistarget

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcistarget:<tag>

(see `bioconductor-rcistarget/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcistarget| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget
.. _`bioconductor-rcistarget/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcistarget";
        var versions = ["1.29.0","1.26.0","1.20.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget/README.html