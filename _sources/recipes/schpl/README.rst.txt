:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schpl'
.. highlight: bash

schpl
=====

.. conda:recipe:: schpl
   :replaces_section_title:
   :noindex:

   Hierarchical progressive learning pipeline for single\-cell RNA\-sequencing datasets

   :homepage: https://github.com/lcmmichielsen/scHPL
   :license: MIT
   :recipe: /`schpl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schpl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schpl/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-021-23196-8`

   


.. conda:package:: schpl

   |downloads_schpl| |docker_schpl|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends matplotlib-base: ``>=3.3.1``
   :depends numpy: ``>=1.19.2``
   :depends pandas: ``>=1.1.2,<2``
   :depends python: ``>=3.6``
   :depends python-newick: ``>=1.0.0,<1.1.dev0``
   :depends scikit-learn: ``>=0.23.2``
   :depends scipy: ``>=1.5.2``
   :depends seaborn: ``>=0.11.1``
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

      mamba install schpl

   and update with::

      mamba update schpl

  To create a new environment, run::

      mamba create --name myenvname schpl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/schpl:<tag>

   (see `schpl/tags`_ for valid values for ``<tag>``)


.. |downloads_schpl| image:: https://img.shields.io/conda/dn/bioconda/schpl.svg?style=flat
   :target: https://anaconda.org/bioconda/schpl
   :alt:   (downloads)
.. |docker_schpl| image:: https://quay.io/repository/biocontainers/schpl/status
   :target: https://quay.io/repository/biocontainers/schpl
.. _`schpl/tags`: https://quay.io/repository/biocontainers/schpl?tab=tags


.. raw:: html

    <script>
        var package = "schpl";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schpl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schpl/README.html