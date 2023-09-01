:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pore'
.. highlight: bash

r-pore
======

.. conda:recipe:: r-pore
   :replaces_section_title:
   :noindex:

   An R package to enable organisation and visualisation of nanopore sequencing data

   :homepage: http://sourceforge.net/projects/rpore/
   :license: BSD
   :recipe: /`r-pore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pore/meta.yaml>`_

   


.. conda:package:: r-pore

   |downloads_r-pore| |docker_r-pore|

   :versions:
      
      

      ``0.24-6``,  ``0.24-5``,  ``0.24-4``,  ``0.24-3``,  ``0.24-2``,  ``0.24-0``,  ``0.16-0``

      

   
   :depends bioconductor-rhdf5: 
   :depends parallel: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bit64: 
   :depends r-data.table: 
   :depends r-shiny: 
   :depends r-svdialogs: 
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

      mamba install r-pore

   and update with::

      mamba update r-pore

  To create a new environment, run::

      mamba create --name myenvname r-pore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pore:<tag>

   (see `r-pore/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pore| image:: https://img.shields.io/conda/dn/bioconda/r-pore.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pore
   :alt:   (downloads)
.. |docker_r-pore| image:: https://quay.io/repository/biocontainers/r-pore/status
   :target: https://quay.io/repository/biocontainers/r-pore
.. _`r-pore/tags`: https://quay.io/repository/biocontainers/r-pore?tab=tags


.. raw:: html

    <script>
        var package = "r-pore";
        var versions = ["0.24","0.24","0.24","0.24","0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pore/README.html