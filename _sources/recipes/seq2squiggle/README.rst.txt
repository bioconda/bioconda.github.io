:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq2squiggle'
.. highlight: bash

seq2squiggle
============

.. conda:recipe:: seq2squiggle
   :replaces_section_title:
   :noindex:

   End\-to\-end simulation of nanopore sequencing signals with feed\-forward transformers

   :homepage: https://github.com/ZKI-PH-ImageAnalysis/seq2squiggle
   :license: MIT
   :recipe: /`seq2squiggle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2squiggle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq2squiggle/meta.yaml>`_

   


.. conda:package:: seq2squiggle

   |downloads_seq2squiggle| |docker_seq2squiggle|

   :versions:
      
      

      ``0.3.0-0``

      

   
   :depends appdirs: ``>=1.4.4,<2.0.0``
   :depends lightning: ``>=2.2.5,<3.0.0``
   :depends matplotlib-base: ``>=3.9.0,<4.0.0``
   :depends numba: ``>=0.59.0,<0.60.0``
   :depends numpy: ``>=1.26.4,<2.0.0``
   :depends ont_vbz_hdf_plugin: ``>=1.0.1``
   :depends pod5: ``>=0.3.12,<0.4.0``
   :depends prettytable: ``>=3.9.0,<4.0.0``
   :depends pygithub: ``>=2.3.0,<3.0.0``
   :depends pysam: ``>=0.22.0,<0.23.0``
   :depends pyslow5: ``>=1.1.0,<2.0.0``
   :depends python: ``>=3.10.0,<4.0.0``
   :depends pytorch: ``>=2.3.1,<3.0.0``
   :depends pyyaml: ``>=6.0.1,<7.0.0``
   :depends rich-click: ``>=1.8.2,<2.0.0``
   :depends scikit-learn: ``>=1.4.0,<2.0.0``
   :depends tqdm: ``>=4.66.2,<5.0.0``
   :depends transformers: ``>=4.41.2,<5.0.0``
   :depends wandb: ``>=0.16.3,<0.17.0``
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

      mamba install seq2squiggle

   and update with::

      mamba update seq2squiggle

  To create a new environment, run::

      mamba create --name myenvname seq2squiggle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq2squiggle:<tag>

   (see `seq2squiggle/tags`_ for valid values for ``<tag>``)


.. |downloads_seq2squiggle| image:: https://img.shields.io/conda/dn/bioconda/seq2squiggle.svg?style=flat
   :target: https://anaconda.org/bioconda/seq2squiggle
   :alt:   (downloads)
.. |docker_seq2squiggle| image:: https://quay.io/repository/biocontainers/seq2squiggle/status
   :target: https://quay.io/repository/biocontainers/seq2squiggle
.. _`seq2squiggle/tags`: https://quay.io/repository/biocontainers/seq2squiggle?tab=tags


.. raw:: html

    <script>
        var package = "seq2squiggle";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq2squiggle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq2squiggle/README.html