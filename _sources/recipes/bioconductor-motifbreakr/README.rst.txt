:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifbreakr'
.. highlight: bash

bioconductor-motifbreakr
========================

.. conda:recipe:: bioconductor-motifbreakr
   :replaces_section_title:
   :noindex:

   A Package For Predicting The Disruptiveness Of Single Nucleotide Polymorphisms On Transcription Factor Binding Sites

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/motifbreakR.html
   :license: GPL-2
   :recipe: /`bioconductor-motifbreakr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifbreakr/meta.yaml>`_
   :links: biotools: :biotools:`motifbreakr`

   We introduce motifbreakR\, which allows the biologist to judge in the first place whether the sequence surrounding the polymorphism is a good match\, and in the second place how much information is gained or lost in one allele of the polymorphism relative to another. MotifbreakR is both flexible and extensible over previous offerings\; giving a choice of algorithms for interrogation of genomes with motifs from public sources that users can choose from\; these are 1\) a weighted\-sum probability matrix\, 2\) log\-probabilities\, and 3\) weighted by relative entropy. MotifbreakR can predict effects for novel or previously described variants in public databases\, making it suitable for tasks beyond the scope of its original design. Lastly\, it can be used to interrogate any genome curated within Bioconductor \(currently there are 32 species\, a total of 109 versions\).


.. conda:package:: bioconductor-motifbreakr

   |downloads_bioconductor-motifbreakr| |docker_bioconductor-motifbreakr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.0-0</code>,  <code>2.16.0-0</code>,  <code>2.13.7-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.24.0-0``,  ``2.16.0-0``,  ``2.13.7-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-motifdb: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-motifstack: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bsicons: 
   :depends on r-bslib: 
   :depends on r-dt: 
   :depends on r-matrixstats: 
   :depends on r-shiny: 
   :depends on r-stringr: 
   :depends on r-tfmpvalue: 
   :depends on r-vroom: 

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

    pixi global install bioconductor-motifbreakr

to add into an existing workspace instead, run::

    pixi add bioconductor-motifbreakr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-motifbreakr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-motifbreakr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-motifbreakr:<tag>

(see `bioconductor-motifbreakr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-motifbreakr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifbreakr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifbreakr
   :alt:   (downloads)
.. |docker_bioconductor-motifbreakr| image:: https://quay.io/repository/biocontainers/bioconductor-motifbreakr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifbreakr
.. _`bioconductor-motifbreakr/tags`: https://quay.io/repository/biocontainers/bioconductor-motifbreakr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motifbreakr";
        var versions = ["2.24.0","2.16.0","2.13.7","2.12.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifbreakr/README.html