:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scoper'
.. highlight: bash

r-scoper
========

.. conda:recipe:: r-scoper
   :replaces_section_title:
   :noindex:

   Provides a computational framework for identification of B cell clones from Adaptive Immune Receptor Repertoire sequencing \(AIRR\-Seq\) data. Three main functions are included \(identicalClones\, hierarchicalClones\, and spectralClones\) that perform clustering among sequences of BCRs\/IGs \(B cell receptors\/immunoglobulins\) which share the same V gene\, J gene and junction length. Nouri N and Kleinstein SH \(2018\) \<doi\: 10.1093\/bioinformatics\/bty235\>. Nouri N and Kleinstein SH \(2019\) \<doi\: 10.1101\/788620\>. Gupta NT\, et al. \(2017\) \<doi\: 10.4049\/jimmunol.1601850\>.

   :homepage: https://scoper.readthedocs.io
   :license: AGPL / AGPL-3.0-only
   :recipe: /`r-scoper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scoper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scoper/meta.yaml>`_

   


.. conda:package:: r-scoper

   |downloads_r-scoper| |docker_r-scoper|

   :versions:
      
      

      ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-alakazam: ``>=1.2.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dplyr: ``>=1.0``
   :depends r-foreach: 
   :depends r-ggplot2: ``>=3.3.4``
   :depends r-rcpp: ``>=0.12.12``
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-shazam: ``>=1.1.0``
   :depends r-stringi: 
   :depends r-tidyr: ``>=1.0``
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

      mamba install r-scoper

   and update with::

      mamba update r-scoper

  To create a new environment, run::

      mamba create --name myenvname r-scoper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scoper:<tag>

   (see `r-scoper/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scoper| image:: https://img.shields.io/conda/dn/bioconda/r-scoper.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scoper
   :alt:   (downloads)
.. |docker_r-scoper| image:: https://quay.io/repository/biocontainers/r-scoper/status
   :target: https://quay.io/repository/biocontainers/r-scoper
.. _`r-scoper/tags`: https://quay.io/repository/biocontainers/r-scoper?tab=tags


.. raw:: html

    <script>
        var package = "r-scoper";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scoper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scoper/README.html