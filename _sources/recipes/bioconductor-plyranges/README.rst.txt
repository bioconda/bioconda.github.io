:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plyranges'
.. highlight: bash

bioconductor-plyranges
======================

.. conda:recipe:: bioconductor-plyranges
   :replaces_section_title:
   :noindex:

   A fluent interface for manipulating GenomicRanges

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/plyranges.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-plyranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyranges/meta.yaml>`_

   A dplyr\-like interface for interacting with the common Bioconductor classes Ranges and GenomicRanges. By providing a grammatical and consistent way of manipulating these classes their accessiblity for new Bioconductor users is hopefully increased.


.. conda:package:: bioconductor-plyranges

   |downloads_bioconductor-plyranges| |docker_bioconductor-plyranges|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rlang: ``>=0.2.0``
   :depends r-tidyselect: ``>=1.0.0``
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

      mamba install bioconductor-plyranges

   and update with::

      mamba update bioconductor-plyranges

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plyranges

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plyranges:<tag>

   (see `bioconductor-plyranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plyranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plyranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plyranges
   :alt:   (downloads)
.. |docker_bioconductor-plyranges| image:: https://quay.io/repository/biocontainers/bioconductor-plyranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plyranges
.. _`bioconductor-plyranges/tags`: https://quay.io/repository/biocontainers/bioconductor-plyranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plyranges";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plyranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plyranges/README.html