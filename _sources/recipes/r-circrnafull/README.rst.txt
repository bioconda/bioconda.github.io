:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-circrnafull'
.. highlight: bash

r-circrnafull
=============

.. conda:recipe:: r-circrnafull
   :replaces_section_title:
   :noindex:

   An R package for reconstruction of full length circRNA sequence using chimeric alignment information

   :homepage: https://github.com/tofazzalh/circRNAFull
   :license: unknown
   :recipe: /`r-circrnafull <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-circrnafull>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-circrnafull/meta.yaml>`_
   :links: doi: :doi:`10.3390/ijms23126776`

   


.. conda:package:: r-circrnafull

   |downloads_r-circrnafull| |docker_r-circrnafull|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-rsamtools: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-seqinr: 
   :depends r-stringi: 
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

      mamba install r-circrnafull

   and update with::

      mamba update r-circrnafull

  To create a new environment, run::

      mamba create --name myenvname r-circrnafull

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-circrnafull:<tag>

   (see `r-circrnafull/tags`_ for valid values for ``<tag>``)


.. |downloads_r-circrnafull| image:: https://img.shields.io/conda/dn/bioconda/r-circrnafull.svg?style=flat
   :target: https://anaconda.org/bioconda/r-circrnafull
   :alt:   (downloads)
.. |docker_r-circrnafull| image:: https://quay.io/repository/biocontainers/r-circrnafull/status
   :target: https://quay.io/repository/biocontainers/r-circrnafull
.. _`r-circrnafull/tags`: https://quay.io/repository/biocontainers/r-circrnafull?tab=tags


.. raw:: html

    <script>
        var package = "r-circrnafull";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-circrnafull/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-circrnafull/README.html