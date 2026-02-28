:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alphatims'
.. highlight: bash

alphatims
=========

.. conda:recipe:: alphatims
   :replaces_section_title:
   :noindex:

   A Python package for indexing Bruker timsTOF raw data

   :homepage: https://github.com/MannLabs/alphatims
   :documentation: https://alphatims.readthedocs.io/en/latest/
   
   :license: APACHE / Apache-2.0
   :recipe: /`alphatims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphatims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alphatims/meta.yaml>`_

   AlphaTims provides fast indexing and slicing of Bruker timsTOF raw
   data for mass spectrometry\-based proteomics.



.. conda:package:: alphatims

   |downloads_alphatims| |docker_alphatims|

   :versions:
      
      

      ``1.0.10-0``,  ``1.0.9-0``

      

   
   :depends click: 
   :depends h5py: 
   :depends numba: 
   :depends pandas: 
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends pyzstd: 
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

      mamba install alphatims

   and update with::

      mamba update alphatims

  To create a new environment, run::

      mamba create --name myenvname alphatims

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alphatims:<tag>

   (see `alphatims/tags`_ for valid values for ``<tag>``)


.. |downloads_alphatims| image:: https://img.shields.io/conda/dn/bioconda/alphatims.svg?style=flat
   :target: https://anaconda.org/bioconda/alphatims
   :alt:   (downloads)
.. |docker_alphatims| image:: https://quay.io/repository/biocontainers/alphatims/status
   :target: https://quay.io/repository/biocontainers/alphatims
.. _`alphatims/tags`: https://quay.io/repository/biocontainers/alphatims?tab=tags


.. raw:: html

    <script>
        var package = "alphatims";
        var versions = ["1.0.10","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alphatims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alphatims/README.html