:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snapatac2'
.. highlight: bash

snapatac2
=========

.. conda:recipe:: snapatac2
   :replaces_section_title:
   :noindex:

   Python\/Rust package for single\-cell epigenomics analysis

   :homepage: https://github.com/kaizhang/SnapATAC2
   :documentation: https://kzhang.org/SnapATAC2/
   
   :license: MIT / MIT
   :recipe: /`snapatac2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapatac2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapatac2/meta.yaml>`_
   :links: biotools: :biotools:`snapatac`, doi: :doi:`10.1101/2023.09.11.557221`

   


.. conda:package:: snapatac2

   |downloads_snapatac2| |docker_snapatac2|

   :versions:
      
      

      ``2.5.3-0``,  ``2.5.2-0``,  ``2.5.1-0``

      

   
   :depends anndata: 
   :depends h5py: 
   :depends libgcc-ng: ``>=12``
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: 
   :depends pooch: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rustworkx: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends typing_extensions: 
   :depends umap-learn: 
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

      mamba install snapatac2

   and update with::

      mamba update snapatac2

  To create a new environment, run::

      mamba create --name myenvname snapatac2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snapatac2:<tag>

   (see `snapatac2/tags`_ for valid values for ``<tag>``)


.. |downloads_snapatac2| image:: https://img.shields.io/conda/dn/bioconda/snapatac2.svg?style=flat
   :target: https://anaconda.org/bioconda/snapatac2
   :alt:   (downloads)
.. |docker_snapatac2| image:: https://quay.io/repository/biocontainers/snapatac2/status
   :target: https://quay.io/repository/biocontainers/snapatac2
.. _`snapatac2/tags`: https://quay.io/repository/biocontainers/snapatac2?tab=tags


.. raw:: html

    <script>
        var package = "snapatac2";
        var versions = ["2.5.3","2.5.2","2.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snapatac2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snapatac2/README.html