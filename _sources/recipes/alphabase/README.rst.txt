:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphabase'
.. highlight: bash

alphabase
=========

.. conda:recipe:: alphabase
   :replaces_section_title:
   :noindex:

   An infrastructure Python package of the AlphaX ecosystem

   :homepage: https://github.com/MannLabs/alphabase
   :documentation: https://alphabase.readthedocs.io/en/latest/
   
   :license: APACHE / Apache-2.0
   :recipe: /`alphabase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphabase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphabase/meta.yaml>`_

   AlphaBase provides foundational data structures and utilities for
   mass spectrometry\-based proteomics in the AlphaPept ecosystem.



.. conda:package:: alphabase

   |downloads_alphabase| |docker_alphabase|

   :versions:
      
      

      ``1.8.1-0``

      

   
   :depends biopython: 
   :depends contextlib2: 
   :depends h5py: 
   :depends lxml: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends pyahocorasick: 
   :depends pyarrow: 
   :depends pyteomics: 
   :depends python: ``>=3.9``
   :depends python-xxhash: 
   :depends pyyaml: 
   :depends rdkit: 
   :depends regex: 
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

      mamba install alphabase

   and update with::

      mamba update alphabase

  To create a new environment, run::

      mamba create --name myenvname alphabase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alphabase:<tag>

   (see `alphabase/tags`_ for valid values for ``<tag>``)


.. |downloads_alphabase| image:: https://img.shields.io/conda/dn/bioconda/alphabase.svg?style=flat
   :target: https://anaconda.org/bioconda/alphabase
   :alt:   (downloads)
.. |docker_alphabase| image:: https://quay.io/repository/biocontainers/alphabase/status
   :target: https://quay.io/repository/biocontainers/alphabase
.. _`alphabase/tags`: https://quay.io/repository/biocontainers/alphabase?tab=tags


.. raw:: html

    <script>
        var package = "alphabase";
        var versions = ["1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphabase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphabase/README.html