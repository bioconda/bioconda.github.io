:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fpocketr'
.. highlight: bash

fpocketr
========

.. conda:recipe:: fpocketr
   :replaces_section_title:
   :noindex:

   CLI tool to find\, characterize\, and visualize RNA\-ligand binding pockets.

   :homepage: https://github.com/Weeks-UNC/fpocketR
   :license: MIT
   :recipe: /`fpocketr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpocketr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpocketr/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.03.13.643147`

   fpocketR is an RNA\-specific wrapper for fpocket 4.0\, providing CLI tools to find\, characterize\, and visualize RNA binding pockets for drug\-like ligands. Only available for x86\_64 architectures on linux and MacOS.



.. conda:package:: fpocketr

   |downloads_fpocketr| |docker_fpocketr|

   :versions:
      
      

      ``1.3.4-0``

      

   
   :depends biopython: ``1.83``
   :depends fpocket: ``4.0.3.*``
   :depends pandas: 
   :depends prody: ``2.3.0``
   :depends pymol-open-source: ``2.5``
   :depends python: ``>=3.11,<3.12``
   :depends rdkit: ``2023.9.6``
   :depends scipy: ``1.12.0``
   :depends seaborn: 
   :depends trimesh: ``4.2.0``
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

      mamba install fpocketr

   and update with::

      mamba update fpocketr

  To create a new environment, run::

      mamba create --name myenvname fpocketr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fpocketr:<tag>

   (see `fpocketr/tags`_ for valid values for ``<tag>``)


.. |downloads_fpocketr| image:: https://img.shields.io/conda/dn/bioconda/fpocketr.svg?style=flat
   :target: https://anaconda.org/bioconda/fpocketr
   :alt:   (downloads)
.. |docker_fpocketr| image:: https://quay.io/repository/biocontainers/fpocketr/status
   :target: https://quay.io/repository/biocontainers/fpocketr
.. _`fpocketr/tags`: https://quay.io/repository/biocontainers/fpocketr?tab=tags


.. raw:: html

    <script>
        var package = "fpocketr";
        var versions = ["1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fpocketr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fpocketr/README.html