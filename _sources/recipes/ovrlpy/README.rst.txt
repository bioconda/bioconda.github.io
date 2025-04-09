:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ovrlpy'
.. highlight: bash

ovrlpy
======

.. conda:recipe:: ovrlpy
   :replaces_section_title:
   :noindex:

   A python tool to investigate cell overlaps in imaging\-based spatial transcriptomics data.

   :homepage: https://github.com/HiDiHlabs/ovrl.py
   :documentation: https://ovrlpy.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`ovrlpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ovrlpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ovrlpy/meta.yaml>`_

   


.. conda:package:: ovrlpy

   |downloads_ovrlpy| |docker_ovrlpy|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends matplotlib-base: ``>=3.8,<4.dev0``
   :depends matplotlib-scalebar: 
   :depends numpy: ``>=1.25,<2.dev0``
   :depends pandas: ``>=2.0,<3.dev0``
   :depends python: ``>=3.11,<3.14``
   :depends scikit-image: ``>=0.18``
   :depends scikit-learn: ``>=1.1,<2.dev0``
   :depends scipy: ``>=1.11,<2.dev0``
   :depends tqdm: ``>=4.65,<5.dev0``
   :depends umap-learn: ``>=0.5,<1.dev0``
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

      mamba install ovrlpy

   and update with::

      mamba update ovrlpy

  To create a new environment, run::

      mamba create --name myenvname ovrlpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ovrlpy:<tag>

   (see `ovrlpy/tags`_ for valid values for ``<tag>``)


.. |downloads_ovrlpy| image:: https://img.shields.io/conda/dn/bioconda/ovrlpy.svg?style=flat
   :target: https://anaconda.org/bioconda/ovrlpy
   :alt:   (downloads)
.. |docker_ovrlpy| image:: https://quay.io/repository/biocontainers/ovrlpy/status
   :target: https://quay.io/repository/biocontainers/ovrlpy
.. _`ovrlpy/tags`: https://quay.io/repository/biocontainers/ovrlpy?tab=tags


.. raw:: html

    <script>
        var package = "ovrlpy";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ovrlpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ovrlpy/README.html