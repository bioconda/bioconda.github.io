:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deconcell'
.. highlight: bash

r-deconcell
===========

.. conda:recipe:: r-deconcell
   :replaces_section_title:
   :noindex:

   DeconCell is an statitsical framework for generating cell proportions predictive models using bulk expresion data. It currently has pre\-calculated models

   :homepage: https://github.com/molgenis/systemsgenetics/tree/master/Decon2/DeconCell
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-deconcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconcell/meta.yaml>`_

   DeconCell is an statitsical framework for generating cell proportions predictive models using bulk expresion data. It currently has pre\-calculated models



.. conda:package:: r-deconcell

   |downloads_r-deconcell| |docker_r-deconcell|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bioconductor-deconrnaseq: 
   :depends bioconductor-edger: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-glmnet: 
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

      mamba install r-deconcell

   and update with::

      mamba update r-deconcell

  To create a new environment, run::

      mamba create --name myenvname r-deconcell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-deconcell:<tag>

   (see `r-deconcell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-deconcell| image:: https://img.shields.io/conda/dn/bioconda/r-deconcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deconcell
   :alt:   (downloads)
.. |docker_r-deconcell| image:: https://quay.io/repository/biocontainers/r-deconcell/status
   :target: https://quay.io/repository/biocontainers/r-deconcell
.. _`r-deconcell/tags`: https://quay.io/repository/biocontainers/r-deconcell?tab=tags


.. raw:: html

    <script>
        var package = "r-deconcell";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deconcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deconcell/README.html