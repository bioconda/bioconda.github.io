:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'meta-neuro'
.. highlight: bash

meta-neuro
==========

.. conda:recipe:: meta-neuro
   :replaces_section_title:
   :noindex:

   Medial Tractography Analysis \(MeTA\)

   :homepage: https://github.com/USC-LoBeS/meta
   :documentation: https://github.com/USC-LoBeS/meta/wiki
   
   :developer docs: https://github.com/bagari/meta
   :license: BSD-3-Clause
   :recipe: /`meta-neuro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-neuro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meta-neuro/meta.yaml>`_

   MeTA is a workflow implemented to minimize microstructural heterogeneity in diffusion MRI \(dMRI\) metrics by extracting and parcellating the core volume along the bundle length in the voxel\-space directly while effectively preserving bundle shape and efficiently capturing the regional variation within and along white matter \(WM\) bundles.



.. conda:package:: meta-neuro

   |downloads_meta-neuro| |docker_meta-neuro|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends dipy: 
   :depends hdf5: ``>=1.14.2,<1.14.3.0a0``
   :depends libboost: ``>=1.82.0,<1.83.0a0``
   :depends libboost-python: ``>=1.82.0,<1.83.0a0``
   :depends libboost-python-devel: ``>=1.82.0,<1.83.0``
   :depends libcxx: ``>=18``
   :depends libitk-devel: ``5.3.0``
   :depends nibabel: 
   :depends numpy: 
   :depends pandas: 
   :depends pip: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyvista: 
   :depends qhull: 
   :depends scipy: 
   :depends setuptools: 
   :depends tqdm: 
   :depends tslearn: 
   :depends vtk: ``>=9.2.6,<9.3.0build *qt*``
   :depends vtk-base: ``>=9.2.6,<9.2.7.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install meta-neuro

   and update with::

      mamba update meta-neuro

  To create a new environment, run::

      mamba create --name myenvname meta-neuro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/meta-neuro:<tag>

   (see `meta-neuro/tags`_ for valid values for ``<tag>``)


.. |downloads_meta-neuro| image:: https://img.shields.io/conda/dn/bioconda/meta-neuro.svg?style=flat
   :target: https://anaconda.org/bioconda/meta-neuro
   :alt:   (downloads)
.. |docker_meta-neuro| image:: https://quay.io/repository/biocontainers/meta-neuro/status
   :target: https://quay.io/repository/biocontainers/meta-neuro
.. _`meta-neuro/tags`: https://quay.io/repository/biocontainers/meta-neuro?tab=tags


.. raw:: html

    <script>
        var package = "meta-neuro";
        var versions = ["1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meta-neuro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meta-neuro/README.html