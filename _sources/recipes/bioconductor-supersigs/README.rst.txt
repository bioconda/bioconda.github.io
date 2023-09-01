:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-supersigs'
.. highlight: bash

bioconductor-supersigs
======================

.. conda:recipe:: bioconductor-supersigs
   :replaces_section_title:
   :noindex:

   Supervised mutational signatures

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/supersigs.html
   :license: GPL-3
   :recipe: /`bioconductor-supersigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-supersigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-supersigs/meta.yaml>`_

   Generate SuperSigs \(supervised mutational signatures\) from single nucleotide variants in the cancer genome. Functions included in the package allow the user to learn supervised mutational signatures from their data and apply them to new data. The methodology is based on the one described in Afsari \(2021\, ELife\).


.. conda:package:: bioconductor-supersigs

   |downloads_bioconductor-supersigs| |docker_bioconductor-supersigs|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-rsample: 
   :depends r-tidyr: 
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

      mamba install bioconductor-supersigs

   and update with::

      mamba update bioconductor-supersigs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-supersigs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-supersigs:<tag>

   (see `bioconductor-supersigs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-supersigs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-supersigs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-supersigs
   :alt:   (downloads)
.. |docker_bioconductor-supersigs| image:: https://quay.io/repository/biocontainers/bioconductor-supersigs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-supersigs
.. _`bioconductor-supersigs/tags`: https://quay.io/repository/biocontainers/bioconductor-supersigs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-supersigs";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-supersigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-supersigs/README.html