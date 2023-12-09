:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneattribution'
.. highlight: bash

bioconductor-geneattribution
============================

.. conda:recipe:: bioconductor-geneattribution
   :replaces_section_title:
   :noindex:

   Identification of candidate genes associated with genetic variation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/geneAttribution.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geneattribution <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneattribution>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneattribution/meta.yaml>`_
   :links: biotools: :biotools:`geneattribution`, doi: :doi:`10.1093/bioinformatics/btw698`

   Identification of the most likely gene or genes through which variation at a given genomic locus in the human genome acts. The most basic functionality assumes that the closer gene is to the input locus\, the more likely the gene is to be causative. Additionally\, any empirical data that links genomic regions to genes \(e.g. eQTL or genome conformation data\) can be used if it is supplied in the UCSC .BED file format.


.. conda:package:: bioconductor-geneattribution

   |downloads_bioconductor-geneattribution| |docker_bioconductor-geneattribution|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
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

      mamba install bioconductor-geneattribution

   and update with::

      mamba update bioconductor-geneattribution

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneattribution

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneattribution:<tag>

   (see `bioconductor-geneattribution/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneattribution| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneattribution.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneattribution
   :alt:   (downloads)
.. |docker_bioconductor-geneattribution| image:: https://quay.io/repository/biocontainers/bioconductor-geneattribution/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneattribution
.. _`bioconductor-geneattribution/tags`: https://quay.io/repository/biocontainers/bioconductor-geneattribution?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneattribution";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneattribution/README.html