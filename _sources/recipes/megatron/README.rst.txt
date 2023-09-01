:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megatron'
.. highlight: bash

megatron
========

.. conda:recipe:: megatron
   :replaces_section_title:
   :noindex:

   MEGATRON \- MEGA TRajectories of clONes

   :homepage: https://github.com/pinellolab/MEGATRON
   :license: BSD / BSD-3
   :recipe: /`megatron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megatron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megatron/meta.yaml>`_

   


.. conda:package:: megatron

   |downloads_megatron| |docker_megatron|

   :versions:
      
      

      ``0.1a-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.0,!=1.1``
   :depends python: 
   :depends scikit-learn: ``>=0.19``
   :depends scipy: ``>=1.4``
   :depends seaborn: ``>=0.11``
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

      mamba install megatron

   and update with::

      mamba update megatron

  To create a new environment, run::

      mamba create --name myenvname megatron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/megatron:<tag>

   (see `megatron/tags`_ for valid values for ``<tag>``)


.. |downloads_megatron| image:: https://img.shields.io/conda/dn/bioconda/megatron.svg?style=flat
   :target: https://anaconda.org/bioconda/megatron
   :alt:   (downloads)
.. |docker_megatron| image:: https://quay.io/repository/biocontainers/megatron/status
   :target: https://quay.io/repository/biocontainers/megatron
.. _`megatron/tags`: https://quay.io/repository/biocontainers/megatron?tab=tags


.. raw:: html

    <script>
        var package = "megatron";
        var versions = ["0.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megatron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megatron/README.html