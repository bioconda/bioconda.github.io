:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogen-embed'
.. highlight: bash

pathogen-embed
==============

.. conda:recipe:: pathogen-embed
   :replaces_section_title:
   :noindex:

   Create reduced dimension embeddings for pathogen sequences

   :homepage: https://github.com/blab/pathogen-embed
   :license: MIT / MIT
   :recipe: /`pathogen-embed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-embed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogen-embed/meta.yaml>`_

   


.. conda:package:: pathogen-embed

   |downloads_pathogen-embed| |docker_pathogen-embed|

   :versions:
      
      

      ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``

      

   
   :depends biopython: ``>=1.83,<2``
   :depends hdbscan: ``>=0.8.36,<0.9.0``
   :depends matplotlib-base: ``>=3,<4``
   :depends numba: ``<0.59.0``
   :depends numpy: ``>=1.24.4,<2``
   :depends pandas: ``>=1.2.0,<2``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=1.3,<1.5``
   :depends umap-learn: ``>=0.5.0,<0.6.0``
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

      mamba install pathogen-embed

   and update with::

      mamba update pathogen-embed

  To create a new environment, run::

      mamba create --name myenvname pathogen-embed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pathogen-embed:<tag>

   (see `pathogen-embed/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogen-embed| image:: https://img.shields.io/conda/dn/bioconda/pathogen-embed.svg?style=flat
   :target: https://anaconda.org/bioconda/pathogen-embed
   :alt:   (downloads)
.. |docker_pathogen-embed| image:: https://quay.io/repository/biocontainers/pathogen-embed/status
   :target: https://quay.io/repository/biocontainers/pathogen-embed
.. _`pathogen-embed/tags`: https://quay.io/repository/biocontainers/pathogen-embed?tab=tags


.. raw:: html

    <script>
        var package = "pathogen-embed";
        var versions = ["2.2.0","2.2.0","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogen-embed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogen-embed/README.html