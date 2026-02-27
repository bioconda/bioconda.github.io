:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alpharaw'
.. highlight: bash

alpharaw
========

.. conda:recipe:: alpharaw
   :replaces_section_title:
   :noindex:

   An open\-source Python package to unify raw MS data access and storage

   :homepage: https://github.com/MannLabs/alpharaw
   :license: APACHE / Apache-2.0
   :recipe: /`alpharaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpharaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alpharaw/meta.yaml>`_

   AlphaRaw provides unified access to raw mass spectrometry data from
   various instrument vendors\, converting them to a standardized HDF5
   format for downstream analysis in the AlphaPept ecosystem.



.. conda:package:: alpharaw

   |downloads_alpharaw| |docker_alpharaw|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends alphabase: ``>=1.5.0``
   :depends alphatims: 
   :depends h5py: 
   :depends lxml: 
   :depends numba: 
   :depends numpy: 
   :depends owlready2: 
   :depends pandas: 
   :depends pyteomics: 
   :depends python: ``>=3.8``
   :depends pythonnet: 
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

      mamba install alpharaw

   and update with::

      mamba update alpharaw

  To create a new environment, run::

      mamba create --name myenvname alpharaw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alpharaw:<tag>

   (see `alpharaw/tags`_ for valid values for ``<tag>``)


.. |downloads_alpharaw| image:: https://img.shields.io/conda/dn/bioconda/alpharaw.svg?style=flat
   :target: https://anaconda.org/bioconda/alpharaw
   :alt:   (downloads)
.. |docker_alpharaw| image:: https://quay.io/repository/biocontainers/alpharaw/status
   :target: https://quay.io/repository/biocontainers/alpharaw
.. _`alpharaw/tags`: https://quay.io/repository/biocontainers/alpharaw?tab=tags


.. raw:: html

    <script>
        var package = "alpharaw";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alpharaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alpharaw/README.html