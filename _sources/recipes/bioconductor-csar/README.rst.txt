:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-csar'
.. highlight: bash

bioconductor-csar
=================

.. conda:recipe:: bioconductor-csar
   :replaces_section_title:
   :noindex:

   Statistical tools for the analysis of ChIP\-seq data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CSAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-csar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csar/meta.yaml>`_

   Statistical tools for ChIP\-seq data analysis. The package includes the statistical method described in Kaufmann et al. \(2009\) PLoS Biology\: 7\(4\)\:e1000090. Briefly\, Taking the average DNA fragment size subjected to sequencing into account\, the software calculates genomic single\-nucleotide read\-enrichment values. After normalization\, sample and control are compared using a test based on the Poisson distribution. Test statistic thresholds to control the false discovery rate are obtained through random permutation.


.. conda:package:: bioconductor-csar

   |downloads_bioconductor-csar| |docker_bioconductor-csar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-1``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-csar

   and update with::

      mamba update bioconductor-csar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-csar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-csar:<tag>

   (see `bioconductor-csar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-csar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-csar
   :alt:   (downloads)
.. |docker_bioconductor-csar| image:: https://quay.io/repository/biocontainers/bioconductor-csar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csar
.. _`bioconductor-csar/tags`: https://quay.io/repository/biocontainers/bioconductor-csar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-csar";
        var versions = ["1.54.0","1.52.0","1.50.0","1.50.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csar/README.html