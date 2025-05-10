:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dndscv'
.. highlight: bash

r-dndscv
========

.. conda:recipe:: r-dndscv
   :replaces_section_title:
   :noindex:

   dN\/dS methods to quantify selection in cancer and somatic evolution.

   :homepage: https://github.com/im3sanger/dndscv
   :documentation: https://htmlpreview.github.io/?http://github.com/im3sanger/dndscv/blob/master/vignettes/dNdScv.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-dndscv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dndscv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dndscv/meta.yaml>`_

   Description\: This package contains functions for studying selection on coding
   sequences using a Poisson implementation of dN\/dS. A Poisson model of dN\/dS
   facilitates the study of selection beyond traditional codon models\, including
   complex context\-dependent mutation effects and selection on nonsense and
   splice site mutations. This model is best suited for resequencing studies\,
   with very low density of mutations per base pair. The model was initially
   developed for cancer genome sequencing studies\, and specific functions are
   provided to perform driver gene discovery using the dNdScv method on human
   cancer genomic data.



.. conda:package:: r-dndscv

   |downloads_r-dndscv| |docker_r-dndscv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-poilog: 
   :depends r-seqinr: 
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

      mamba install r-dndscv

   and update with::

      mamba update r-dndscv

  To create a new environment, run::

      mamba create --name myenvname r-dndscv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dndscv:<tag>

   (see `r-dndscv/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dndscv| image:: https://img.shields.io/conda/dn/bioconda/r-dndscv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dndscv
   :alt:   (downloads)
.. |docker_r-dndscv| image:: https://quay.io/repository/biocontainers/r-dndscv/status
   :target: https://quay.io/repository/biocontainers/r-dndscv
.. _`r-dndscv/tags`: https://quay.io/repository/biocontainers/r-dndscv?tab=tags


.. raw:: html

    <script>
        var package = "r-dndscv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dndscv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dndscv/README.html