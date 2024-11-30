:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira-multiome'
.. highlight: bash

mira-multiome
=============

.. conda:recipe:: mira-multiome
   :replaces_section_title:
   :noindex:

   Single\-cell multiomics data analysis

   :homepage: https://mira-multiome.readthedocs.io/en/latest/
   :license: BSD-3-Clause-LBNL
   :recipe: /`mira-multiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome/meta.yaml>`_

   


.. conda:package:: mira-multiome

   |downloads_mira-multiome| |docker_mira-multiome|

   :versions:
      
      

      ``2.1.1-0``,  ``2.1.0-0``

      

   
   :depends anndata: ``>=0.7.6,<1``
   :depends lisa2: ``>=2.3.0``
   :depends matplotlib-base: ``>=3.4,<4``
   :depends moods: ``>=1.9.4.1``
   :depends networkx: ``>=2.3,<3``
   :depends optuna: ``>=2.8,<3``
   :depends pyfaidx: ``>=0.5,<1``
   :depends pyro-ppl: ``>=1.5.2,<2``
   :depends python: ``>=3.7,<3.12``
   :depends pytorch: ``>=1.8.0,<2``
   :depends requests: ``>=2,<3``
   :depends tensorboard: 
   :depends tqdm: 
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

      mamba install mira-multiome

   and update with::

      mamba update mira-multiome

  To create a new environment, run::

      mamba create --name myenvname mira-multiome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mira-multiome:<tag>

   (see `mira-multiome/tags`_ for valid values for ``<tag>``)


.. |downloads_mira-multiome| image:: https://img.shields.io/conda/dn/bioconda/mira-multiome.svg?style=flat
   :target: https://anaconda.org/bioconda/mira-multiome
   :alt:   (downloads)
.. |docker_mira-multiome| image:: https://quay.io/repository/biocontainers/mira-multiome/status
   :target: https://quay.io/repository/biocontainers/mira-multiome
.. _`mira-multiome/tags`: https://quay.io/repository/biocontainers/mira-multiome?tab=tags


.. raw:: html

    <script>
        var package = "mira-multiome";
        var versions = ["2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira-multiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira-multiome/README.html