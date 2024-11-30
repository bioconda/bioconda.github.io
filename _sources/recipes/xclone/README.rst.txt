:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xclone'
.. highlight: bash

xclone
======

.. conda:recipe:: xclone
   :replaces_section_title:
   :noindex:

   Inference of clonal Copy Number Alterations in single cells.

   :homepage: https://github.com/single-cell-genetics/XClone
   :documentation: https://xclone-cnv.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`xclone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xclone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xclone/meta.yaml>`_

   


.. conda:package:: xclone

   |downloads_xclone| |docker_xclone|

   :versions:
      
      

      ``0.3.8-0``

      

   
   :depends anndata: ``>=0.10.7,<0.11.0``
   :depends h5py: ``>=3.11.0,<4.0.0``
   :depends importlib-metadata: ``>=7.1.0,<8.0.0``
   :depends matplotlib-base: ``>=3.9.0,<4.0.0``
   :depends numpy: ``>=1.26.4,<2.0.0``
   :depends palettable: ``>=3.3.3,<4.0.0``
   :depends pandas: ``>=2.2.2,<3.0.0``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32.3,<3.0.0``
   :depends scanpy: ``>=1.10.1,<2.0.0``
   :depends scipy: ``>=1.13.1,<2.0.0``
   :depends squidpy: ``>=1.5.0,<2.0.0``
   :depends statsmodels: ``>=0.14.2,<0.15.0``
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

      mamba install xclone

   and update with::

      mamba update xclone

  To create a new environment, run::

      mamba create --name myenvname xclone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xclone:<tag>

   (see `xclone/tags`_ for valid values for ``<tag>``)


.. |downloads_xclone| image:: https://img.shields.io/conda/dn/bioconda/xclone.svg?style=flat
   :target: https://anaconda.org/bioconda/xclone
   :alt:   (downloads)
.. |docker_xclone| image:: https://quay.io/repository/biocontainers/xclone/status
   :target: https://quay.io/repository/biocontainers/xclone
.. _`xclone/tags`: https://quay.io/repository/biocontainers/xclone?tab=tags


.. raw:: html

    <script>
        var package = "xclone";
        var versions = ["0.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xclone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xclone/README.html