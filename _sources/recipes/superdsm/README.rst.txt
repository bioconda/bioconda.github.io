:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superdsm'
.. highlight: bash

superdsm
========

.. conda:recipe:: superdsm
   :replaces_section_title:
   :noindex:

   SuperDSM is a globally optimal segmentation method based on superadditivity and deformable shape models for cell nuclei in fluorescence microscopy images and beyond.

   :homepage: https://github.com/BMCV/SuperDSM
   :documentation: https://superdsm.readthedocs.io
   
   :license: MIT
   :recipe: /`superdsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superdsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superdsm/meta.yaml>`_
   :links: doi: :doi:`10.1109/TPAMI.2022.3185583`

   


.. conda:package:: superdsm

   |downloads_superdsm| |docker_superdsm|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends blas: ``* mkl``
   :depends cvxopt: ``>=1.3.2,<2.0``
   :depends cvxpy: ``>=1.5.3,<2.0``
   :depends dill: ``>=0.3.2``
   :depends imagecodecs: ``>=2024.6.1``
   :depends ipython: ``>=7.31.1``
   :depends matplotlib-base: ``>=3.0,<4.0``
   :depends mkl: ``>=2020.0``
   :depends numpy: ``>=1.26,<2.0``
   :depends python: ``>=3.11``
   :depends ray-core: ``>=0.8.7``
   :depends repype: ``>=1.0.0,<1.1``
   :depends scikit-image: ``>=0.24.0``
   :depends scipy: ``>=1.13.1,<1.14``
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

      mamba install superdsm

   and update with::

      mamba update superdsm

  To create a new environment, run::

      mamba create --name myenvname superdsm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/superdsm:<tag>

   (see `superdsm/tags`_ for valid values for ``<tag>``)


.. |downloads_superdsm| image:: https://img.shields.io/conda/dn/bioconda/superdsm.svg?style=flat
   :target: https://anaconda.org/bioconda/superdsm
   :alt:   (downloads)
.. |docker_superdsm| image:: https://quay.io/repository/biocontainers/superdsm/status
   :target: https://quay.io/repository/biocontainers/superdsm
.. _`superdsm/tags`: https://quay.io/repository/biocontainers/superdsm?tab=tags


.. raw:: html

    <script>
        var package = "superdsm";
        var versions = ["0.4.0","0.3.0","0.2.0","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superdsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superdsm/README.html