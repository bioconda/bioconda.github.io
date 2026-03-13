:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-missmethyl'
.. highlight: bash

bioconductor-missmethyl
=======================

.. conda:recipe:: bioconductor-missmethyl
   :replaces_section_title:
   :noindex:

   Analysing Illumina HumanMethylation BeadChip Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/missMethyl.html
   :license: GPL-2
   :recipe: /`bioconductor-missmethyl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-missmethyl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-missmethyl/meta.yaml>`_
   :links: biotools: :biotools:`missmethyl`

   Normalisation\, testing for differential variability and differential methylation and gene set testing for data from Illumina\'s Infinium HumanMethylation arrays. The normalisation procedure is subset\-quantile within\-array normalisation \(SWAN\)\, which allows Infinium I and II type probes on a single array to be normalised together. The test for differential variability is based on an empirical Bayes version of Levene\'s test. Differential methylation testing is performed using RUV\, which can adjust for systematic errors of unknown origin in high\-dimensional data by using negative control probes. Gene ontology analysis is performed by taking into account the number of probes per gene on the array\, as well as taking into account multi\-gene associated probes.


.. conda:package:: bioconductor-missmethyl

   |downloads_bioconductor-missmethyl| |docker_bioconductor-missmethyl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.32.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.32.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends on bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends on bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-illuminahumanmethylationepicv2manifest: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-methylumi: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biasedurn: 
   :depends on r-ruv: 
   :depends on r-statmod: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-missmethyl

to add into an existing workspace instead, run::

    pixi add bioconductor-missmethyl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-missmethyl

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-missmethyl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-missmethyl:<tag>

(see `bioconductor-missmethyl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-missmethyl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-missmethyl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-missmethyl
   :alt:   (downloads)
.. |docker_bioconductor-missmethyl| image:: https://quay.io/repository/biocontainers/bioconductor-missmethyl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-missmethyl
.. _`bioconductor-missmethyl/tags`: https://quay.io/repository/biocontainers/bioconductor-missmethyl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-missmethyl";
        var versions = ["1.44.0","1.40.0","1.32.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-missmethyl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-missmethyl/README.html