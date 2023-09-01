:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gothic'
.. highlight: bash

bioconductor-gothic
===================

.. conda:recipe:: bioconductor-gothic
   :replaces_section_title:
   :noindex:

   Binomial test for Hi\-C data analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GOTHiC.html
   :license: GPL-3
   :recipe: /`bioconductor-gothic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gothic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gothic/meta.yaml>`_
   :links: biotools: :biotools:`gothic`, doi: :doi:`10.1101/gr.185272.114`

   This is a Hi\-C analysis package using a cumulative binomial test to detect interactions between distal genomic loci that have significantly more reads than expected by chance in Hi\-C experiments. It takes mapped paired NGS reads as input and gives back the list of significant interactions for a given bin size in the genome.


.. conda:package:: bioconductor-gothic

   |downloads_bioconductor-gothic| |docker_bioconductor-gothic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.6-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.6-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-shortread: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-data.table: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-gothic

   and update with::

      mamba update bioconductor-gothic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gothic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gothic:<tag>

   (see `bioconductor-gothic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gothic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gothic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gothic
   :alt:   (downloads)
.. |docker_bioconductor-gothic| image:: https://quay.io/repository/biocontainers/bioconductor-gothic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gothic
.. _`bioconductor-gothic/tags`: https://quay.io/repository/biocontainers/bioconductor-gothic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gothic";
        var versions = ["1.36.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gothic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gothic/README.html