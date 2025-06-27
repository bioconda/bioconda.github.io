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

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.32.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.32.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-illuminahumanmethylationepicv2anno.20a1.hg38: ``>=1.0.0,<1.1.0``
   :depends bioconductor-illuminahumanmethylationepicv2manifest: ``>=1.0.0,<1.1.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-methylumi: ``>=2.52.0,<2.53.0``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biasedurn: 
   :depends r-ruv: 
   :depends r-statmod: 
   :depends r-stringr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-missmethyl

   and update with::

      mamba update bioconductor-missmethyl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-missmethyl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-missmethyl:<tag>

   (see `bioconductor-missmethyl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-missmethyl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-missmethyl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-missmethyl
   :alt:   (downloads)
.. |docker_bioconductor-missmethyl| image:: https://quay.io/repository/biocontainers/bioconductor-missmethyl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-missmethyl
.. _`bioconductor-missmethyl/tags`: https://quay.io/repository/biocontainers/bioconductor-missmethyl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-missmethyl";
        var versions = ["1.40.0","1.32.0","1.26.0","1.24.0","1.24.0"];
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