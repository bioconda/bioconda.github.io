:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-atacseqqc'
.. highlight: bash

bioconductor-atacseqqc
======================

.. conda:recipe:: bioconductor-atacseqqc
   :replaces_section_title:
   :noindex:

   ATAC\-seq Quality Control

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ATACseqQC.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-atacseqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-atacseqqc/meta.yaml>`_

   ATAC\-seq\, an assay for Transposase\-Accessible Chromatin using sequencing\, is a rapid and sensitive method for chromatin accessibility analysis. It was developed as an alternative method to MNase\-seq\, FAIRE\-seq and DNAse\-seq. Comparing to the other methods\, ATAC\-seq requires less amount of the biological samples and time to process. In the process of analyzing several ATAC\-seq dataset produced in our labs\, we learned some of the unique aspects of the quality assessment for ATAC\-seq data.To help users to quickly assess whether their ATAC\-seq experiment is successful\, we developed ATACseqQC package partially following the guideline published in Nature Method 2013 \(Greenleaf et al.\)\, including diagnostic plot of fragment size distribution\, proportion of mitochondria reads\, nucleosome positioning pattern\, and CTCF or other Transcript Factor footprints.


.. conda:package:: bioconductor-atacseqqc

   |downloads_bioconductor-atacseqqc| |docker_bioconductor-atacseqqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.4-1</code>,  <code>1.14.4-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.4-1``,  ``1.14.4-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.5-0``,  ``1.6.4-0``,  ``1.4.3-0``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-chippeakanno: ``>=3.44.0,<3.45.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicscores: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-motifstack: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-kernsmooth: 
   :depends on r-preseqr: 
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

    pixi global install bioconductor-atacseqqc

to add into an existing workspace instead, run::

    pixi add bioconductor-atacseqqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-atacseqqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-atacseqqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-atacseqqc:<tag>

(see `bioconductor-atacseqqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-atacseqqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-atacseqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-atacseqqc
   :alt:   (downloads)
.. |docker_bioconductor-atacseqqc| image:: https://quay.io/repository/biocontainers/bioconductor-atacseqqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-atacseqqc
.. _`bioconductor-atacseqqc/tags`: https://quay.io/repository/biocontainers/bioconductor-atacseqqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-atacseqqc";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-atacseqqc/README.html