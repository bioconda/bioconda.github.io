:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pqsfinder'
.. highlight: bash

bioconductor-pqsfinder
======================

.. conda:recipe:: bioconductor-pqsfinder
   :replaces_section_title:
   :noindex:

   Identification of potential quadruplex forming sequences

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pqsfinder.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-pqsfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pqsfinder/meta.yaml>`_
   :links: biotools: :biotools:`pqsfinder`, doi: :doi:`10.1093/bioinformatics/btv272`

   Pqsfinder detects DNA and RNA sequence patterns that are likely to fold into an intramolecular G\-quadruplex \(G4\). Unlike many other approaches\, pqsfinder is able to detect G4s folded from imperfect G\-runs containing bulges or mismatches or G4s having long loops. Pqsfinder also assigns an integer score to each hit that was fitted on G4 sequencing data and corresponds to expected stability of the folded G4.


.. conda:package:: bioconductor-pqsfinder

   |downloads_bioconductor-pqsfinder| |docker_bioconductor-pqsfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.10.1-1</code>,  <code>2.10.1-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.10.1-1``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: ``>=1.78.0``
   :depends r-rcpp: ``>=0.12.3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-pqsfinder

   and update with::

      mamba update bioconductor-pqsfinder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pqsfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pqsfinder:<tag>

   (see `bioconductor-pqsfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pqsfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pqsfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pqsfinder
   :alt:   (downloads)
.. |docker_bioconductor-pqsfinder| image:: https://quay.io/repository/biocontainers/bioconductor-pqsfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pqsfinder
.. _`bioconductor-pqsfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-pqsfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pqsfinder";
        var versions = ["2.16.0","2.14.0","2.14.0","2.10.1","2.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pqsfinder/README.html