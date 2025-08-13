:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ddquint'
.. highlight: bash

ddquint
=======

.. conda:recipe:: ddquint
   :replaces_section_title:
   :noindex:

   Droplet Digital PCR Multiplex Analysis for chromosomal copy number detection

   :homepage: https://github.com/globuzzz2000/ddQuint
   :license: MIT
   :recipe: /`ddquint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddquint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ddquint/meta.yaml>`_

   


.. conda:package:: ddquint

   |downloads_ddquint| |docker_ddquint|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends colorama: ``>=0.4.4``
   :depends hdbscan: ``>=0.8.27``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.18``
   :depends openpyxl: ``>=3.0.5``
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.10``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.11``
   :depends seaborn: ``>=0.13``
   :depends send2trash: ``>=1.8.2``
   :depends tqdm: ``>=4.60.0``
   :depends wxpython: ``>=4.1.0``
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

      mamba install ddquint

   and update with::

      mamba update ddquint

  To create a new environment, run::

      mamba create --name myenvname ddquint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ddquint:<tag>

   (see `ddquint/tags`_ for valid values for ``<tag>``)


.. |downloads_ddquint| image:: https://img.shields.io/conda/dn/bioconda/ddquint.svg?style=flat
   :target: https://anaconda.org/bioconda/ddquint
   :alt:   (downloads)
.. |docker_ddquint| image:: https://quay.io/repository/biocontainers/ddquint/status
   :target: https://quay.io/repository/biocontainers/ddquint
.. _`ddquint/tags`: https://quay.io/repository/biocontainers/ddquint?tab=tags


.. raw:: html

    <script>
        var package = "ddquint";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ddquint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ddquint/README.html