:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicranges'
.. highlight: bash

bioconductor-genomicranges
==========================

.. conda:recipe:: bioconductor-genomicranges
   :replaces_section_title:
   :noindex:

   Representation and manipulation of genomic intervals

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GenomicRanges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicranges/meta.yaml>`_
   :links: biotools: :biotools:`genomicranges`

   The ability to efficiently represent and manipulate genomic annotations and alignments is playing a central role when it comes to analyzing high\-throughput sequencing data \(a.k.a. NGS data\). The GenomicRanges package defines general purpose containers for storing and manipulating genomic intervals and variables defined along a genome. More specialized containers for representing and manipulating short alignments against a reference genome\, or a matrix\-like summarization of an experiment\, are defined in the GenomicAlignments and SummarizedExperiment packages\, respectively. Both packages build on top of the GenomicRanges infrastructure.


.. conda:package:: bioconductor-genomicranges

   |downloads_bioconductor-genomicranges| |docker_bioconductor-genomicranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.1-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.1-1</code>,  <code>1.46.1-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  </span></summary>
      

      ``1.54.1-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.1-1``,  ``1.46.1-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.7-0``,  ``1.30.3-0``,  ``1.30.0-0``,  ``1.28.6-0``,  ``1.26.4-0``,  ``1.26.1-1``,  ``1.24.3-1``,  ``1.22.4-0``,  ``1.22.3-0``,  ``1.22.2-0``,  ``1.22.1-0``,  ``1.22.0-0``,  ``1.20.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<1.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<2.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<3.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<1.0a0``
   :depends bioconductor-xvector: ``>=0.42.0,<0.43.0``
   :depends bioconductor-xvector: ``>=0.42.0,<1.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-genomicranges

   and update with::

      mamba update bioconductor-genomicranges

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomicranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicranges:<tag>

   (see `bioconductor-genomicranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicranges
   :alt:   (downloads)
.. |docker_bioconductor-genomicranges| image:: https://quay.io/repository/biocontainers/bioconductor-genomicranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicranges
.. _`bioconductor-genomicranges/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicranges";
        var versions = ["1.54.1","1.52.0","1.50.0","1.50.0","1.46.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicranges/README.html