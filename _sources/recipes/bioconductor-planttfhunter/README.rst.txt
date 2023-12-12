:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-planttfhunter'
.. highlight: bash

bioconductor-planttfhunter
==========================

.. conda:recipe:: bioconductor-planttfhunter
   :replaces_section_title:
   :noindex:

   Identification and classification of plant transcription factors

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/planttfhunter.html
   :license: GPL-3
   :recipe: /`bioconductor-planttfhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planttfhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planttfhunter/meta.yaml>`_

   planttfhunter is used to identify plant transcription factors \(TFs\) from protein sequence data and classify them into families and subfamilies using the classification scheme implemented in PlantTFDB. TFs are identified using pre\-built hidden Markov model profiles for DNA\-binding domains. Then\, auxiliary and forbidden domains are used with DNA\-binding domains to classify TFs into families and subfamilies \(when applicable\). Currently\, TFs can be classified in 58 different TF families\/subfamilies.


.. conda:package:: bioconductor-planttfhunter

   |downloads_bioconductor-planttfhunter| |docker_bioconductor-planttfhunter|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-planttfhunter

   and update with::

      mamba update bioconductor-planttfhunter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-planttfhunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-planttfhunter:<tag>

   (see `bioconductor-planttfhunter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-planttfhunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-planttfhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-planttfhunter
   :alt:   (downloads)
.. |docker_bioconductor-planttfhunter| image:: https://quay.io/repository/biocontainers/bioconductor-planttfhunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-planttfhunter
.. _`bioconductor-planttfhunter/tags`: https://quay.io/repository/biocontainers/bioconductor-planttfhunter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-planttfhunter";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-planttfhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-planttfhunter/README.html