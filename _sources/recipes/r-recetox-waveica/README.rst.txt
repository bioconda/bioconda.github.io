:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-waveica'
.. highlight: bash

r-recetox-waveica
=================

.. conda:recipe:: r-recetox-waveica
   :replaces_section_title:
   :noindex:

   Removal of batch effects for large\-scale untargeted metabolomics data based on wavelet transform.

   :homepage: https://github.com/recetox/waveica
   :license: MIT
   :recipe: /`r-recetox-waveica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.aca.2019.02.010`, doi: :doi:`10.1007/s11306-021-01839-7`

   Recetox\-waveica is a fork of WaveICA package customized by RECETOX. This package is used to remove batch effects from large\-scale untargeted metabolomics data and contains functionality of both original WaveICA and WaveICA 2.0 libraries.


.. conda:package:: r-recetox-waveica

   |downloads_r-recetox-waveica| |docker_r-recetox-waveica|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-jade: 
   :depends r-mgcv: 
   :depends r-waveslim: 
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

      mamba install r-recetox-waveica

   and update with::

      mamba update r-recetox-waveica

  To create a new environment, run::

      mamba create --name myenvname r-recetox-waveica

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-recetox-waveica:<tag>

   (see `r-recetox-waveica/tags`_ for valid values for ``<tag>``)


.. |downloads_r-recetox-waveica| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-waveica.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-waveica
   :alt:   (downloads)
.. |docker_r-recetox-waveica| image:: https://quay.io/repository/biocontainers/r-recetox-waveica/status
   :target: https://quay.io/repository/biocontainers/r-recetox-waveica
.. _`r-recetox-waveica/tags`: https://quay.io/repository/biocontainers/r-recetox-waveica?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-waveica";
        var versions = ["0.2.0","0.2.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-waveica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-waveica/README.html