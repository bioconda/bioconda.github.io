:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deconveil'
.. highlight: bash

deconveil
=========

.. conda:recipe:: deconveil
   :replaces_section_title:
   :noindex:

   An extension of PyDESeq2\/DESeq2 designed to account for genome aneuploidy.

   :homepage: https://github.com/caravagnalab/DeConveil
   :license: MIT / MIT
   :recipe: /`deconveil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deconveil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deconveil/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.03.29.646108`

   


.. conda:package:: deconveil

   |downloads_deconveil| |docker_deconveil|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends formulaic: ``>=1.0.2``
   :depends formulaic-contrasts: ``>=0.2.0``
   :depends ipython: 
   :depends jupyter: 
   :depends matplotlib-base: ``>=3.6.2``
   :depends numpy: ``>=1.23.0``
   :depends pandas: ``>=1.4.0``
   :depends pydeseq2: ``>=0.4.12``
   :depends python: ``>=3.10``
   :depends scikit-learn: ``>=1.1.0``
   :depends scipy: ``>=1.11.0``
   :depends seaborn: ``>=0.12.2``
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

      mamba install deconveil

   and update with::

      mamba update deconveil

  To create a new environment, run::

      mamba create --name myenvname deconveil

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deconveil:<tag>

   (see `deconveil/tags`_ for valid values for ``<tag>``)


.. |downloads_deconveil| image:: https://img.shields.io/conda/dn/bioconda/deconveil.svg?style=flat
   :target: https://anaconda.org/bioconda/deconveil
   :alt:   (downloads)
.. |docker_deconveil| image:: https://quay.io/repository/biocontainers/deconveil/status
   :target: https://quay.io/repository/biocontainers/deconveil
.. _`deconveil/tags`: https://quay.io/repository/biocontainers/deconveil?tab=tags


.. raw:: html

    <script>
        var package = "deconveil";
        var versions = ["0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deconveil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deconveil/README.html