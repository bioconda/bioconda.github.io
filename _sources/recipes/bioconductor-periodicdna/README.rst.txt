:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-periodicdna'
.. highlight: bash

bioconductor-periodicdna
========================

.. conda:recipe:: bioconductor-periodicdna
   :replaces_section_title:
   :noindex:

   Set of tools to identify periodic occurrences of k\-mers in DNA sequences

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/periodicDNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-periodicdna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-periodicdna/meta.yaml>`_

   This R package helps the user identify k\-mers \(e.g. di\- or tri\-nucleotides\) present periodically in a set of genomic loci \(typically regulatory elements\). The functions of this package provide a straightforward approach to find periodic occurrences of k\-mers in DNA sequences\, such as regulatory elements. It is not aimed at identifying motifs separated by a conserved distance\; for this type of analysis\, please visit MEME website.


.. conda:package:: bioconductor-periodicdna

   |downloads_bioconductor-periodicdna| |docker_bioconductor-periodicdna|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-zoo: 
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

      mamba install bioconductor-periodicdna

   and update with::

      mamba update bioconductor-periodicdna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-periodicdna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-periodicdna:<tag>

   (see `bioconductor-periodicdna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-periodicdna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-periodicdna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-periodicdna
   :alt:   (downloads)
.. |docker_bioconductor-periodicdna| image:: https://quay.io/repository/biocontainers/bioconductor-periodicdna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-periodicdna
.. _`bioconductor-periodicdna/tags`: https://quay.io/repository/biocontainers/bioconductor-periodicdna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-periodicdna";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-periodicdna/README.html