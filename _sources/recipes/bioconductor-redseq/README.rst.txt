:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-redseq'
.. highlight: bash

bioconductor-redseq
===================

.. conda:recipe:: bioconductor-redseq
   :replaces_section_title:
   :noindex:

   Analysis of high\-throughput sequencing data processed by restriction enzyme digestion

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/REDseq.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-redseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq/meta.yaml>`_

   The package includes functions to build restriction enzyme cut site \(RECS\) map\, distribute mapped sequences on the map with five different approaches\, find enriched\/depleted RECSs for a sample\, and identify differentially enriched\/depleted RECSs between samples.


.. conda:package:: bioconductor-redseq

   |downloads_bioconductor-redseq| |docker_bioconductor-redseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome.celegans.ucsc.ce2: ``>=1.4.0,<1.5.0``
   :depends bioconductor-chippeakanno: ``>=3.40.0,<3.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-redseq

   and update with::

      mamba update bioconductor-redseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-redseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-redseq:<tag>

   (see `bioconductor-redseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-redseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-redseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-redseq
   :alt:   (downloads)
.. |docker_bioconductor-redseq| image:: https://quay.io/repository/biocontainers/bioconductor-redseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-redseq
.. _`bioconductor-redseq/tags`: https://quay.io/repository/biocontainers/bioconductor-redseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-redseq";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-redseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-redseq/README.html