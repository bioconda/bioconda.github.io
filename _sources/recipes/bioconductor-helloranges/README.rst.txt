:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-helloranges'
.. highlight: bash

bioconductor-helloranges
========================

.. conda:recipe:: bioconductor-helloranges
   :replaces_section_title:
   :noindex:

   Introduce \*Ranges to bedtools users

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HelloRanges.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-helloranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-helloranges/meta.yaml>`_
   :links: biotools: :biotools:`helloranges`, doi: :doi:`10.1038/nmeth.3252`

   Translates bedtools command\-line invocations to R code calling functions from the Bioconductor \*Ranges infrastructure. This is intended to educate novice Bioconductor users and to compare the syntax and semantics of the two frameworks.


.. conda:package:: bioconductor-helloranges

   |downloads_bioconductor-helloranges| |docker_bioconductor-helloranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocio: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-docopt: 
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

      mamba install bioconductor-helloranges

   and update with::

      mamba update bioconductor-helloranges

  To create a new environment, run::

      mamba create --name myenvname bioconductor-helloranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-helloranges:<tag>

   (see `bioconductor-helloranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-helloranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-helloranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-helloranges
   :alt:   (downloads)
.. |docker_bioconductor-helloranges| image:: https://quay.io/repository/biocontainers/bioconductor-helloranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-helloranges
.. _`bioconductor-helloranges/tags`: https://quay.io/repository/biocontainers/bioconductor-helloranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-helloranges";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-helloranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-helloranges/README.html