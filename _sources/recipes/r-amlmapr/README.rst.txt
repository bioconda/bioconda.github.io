:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-amlmapr'
.. highlight: bash

r-amlmapr
=========

.. conda:recipe:: r-amlmapr
   :replaces_section_title:
   :noindex:

   R package for visualizing and analyzing AML transcriptome data

   :homepage: https://github.com/jeppeseverens/AMLmapR
   :license: CC-BY-NC-SA-4.0
   :recipe: /`r-amlmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-amlmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-amlmapr/meta.yaml>`_

   


.. conda:package:: r-amlmapr

   |downloads_r-amlmapr| |docker_r-amlmapr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-caret: 
   :depends r-devtools: 
   :depends r-kernlab: 
   :depends r-remotes: 
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

      mamba install r-amlmapr

   and update with::

      mamba update r-amlmapr

  To create a new environment, run::

      mamba create --name myenvname r-amlmapr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-amlmapr:<tag>

   (see `r-amlmapr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-amlmapr| image:: https://img.shields.io/conda/dn/bioconda/r-amlmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-amlmapr
   :alt:   (downloads)
.. |docker_r-amlmapr| image:: https://quay.io/repository/biocontainers/r-amlmapr/status
   :target: https://quay.io/repository/biocontainers/r-amlmapr
.. _`r-amlmapr/tags`: https://quay.io/repository/biocontainers/r-amlmapr?tab=tags


.. raw:: html

    <script>
        var package = "r-amlmapr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-amlmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-amlmapr/README.html