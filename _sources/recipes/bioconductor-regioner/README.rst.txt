:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regioner'
.. highlight: bash

bioconductor-regioner
=====================

.. conda:recipe:: bioconductor-regioner
   :replaces_section_title:
   :noindex:

   Association analysis of genomic regions based on permutation tests

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/regioneR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-regioner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regioner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regioner/meta.yaml>`_
   :links: biotools: :biotools:`regioner`

   regioneR offers a statistical framework based on customizable permutation tests to assess the association between genomic region sets and other genomic features.


.. conda:package:: bioconductor-regioner

   |downloads_bioconductor-regioner| |docker_bioconductor-regioner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.2-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-memoise: 
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

      mamba install bioconductor-regioner

   and update with::

      mamba update bioconductor-regioner

  To create a new environment, run::

      mamba create --name myenvname bioconductor-regioner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-regioner:<tag>

   (see `bioconductor-regioner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-regioner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regioner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regioner
   :alt:   (downloads)
.. |docker_bioconductor-regioner| image:: https://quay.io/repository/biocontainers/bioconductor-regioner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regioner
.. _`bioconductor-regioner/tags`: https://quay.io/repository/biocontainers/bioconductor-regioner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regioner";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regioner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regioner/README.html