:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msa'
.. highlight: bash

bioconductor-msa
================

.. conda:recipe:: bioconductor-msa
   :replaces_section_title:
   :noindex:

   Multiple Sequence Alignment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/msa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-msa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msa/meta.yaml>`_

   The \'msa\' package provides a unified R\/Bioconductor interface to the multiple sequence alignment algorithms ClustalW\, ClustalOmega\, and Muscle. All three algorithms are integrated in the package\, therefore\, they do not depend on any external software tools and are available for all major platforms. The multiple sequence alignment algorithms are complemented by a function for pretty\-printing multiple sequence alignments using the LaTeX package TeXshade.


.. conda:package:: bioconductor-msa

   |downloads_bioconductor-msa| |docker_bioconductor-msa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.6``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: ``>=0.11.1``
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

      mamba install bioconductor-msa

   and update with::

      mamba update bioconductor-msa

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msa:<tag>

   (see `bioconductor-msa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msa
   :alt:   (downloads)
.. |docker_bioconductor-msa| image:: https://quay.io/repository/biocontainers/bioconductor-msa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msa
.. _`bioconductor-msa/tags`: https://quay.io/repository/biocontainers/bioconductor-msa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msa";
        var versions = ["1.34.0","1.32.0","1.30.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msa/README.html