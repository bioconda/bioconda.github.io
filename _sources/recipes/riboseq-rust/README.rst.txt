:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboseq-rust'
.. highlight: bash

riboseq-rust
============

.. conda:recipe:: riboseq-rust
   :replaces_section_title:
   :noindex:

   Ribo\-seq Unit Step Transformation. Tools to characterise the determinants of ribosome profiling read density across mRNA. May be used to examine relative decoding rates and and for quality assessment

   :homepage: https://lapti.ucc.ie/rust/
   :license: GPL-3.0
   :recipe: /`riboseq-rust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseq-rust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseq-rust/meta.yaml>`_

   


.. conda:package:: riboseq-rust

   |downloads_riboseq-rust| |docker_riboseq-rust|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends argparse: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install riboseq-rust

   and update with::

      mamba update riboseq-rust

  To create a new environment, run::

      mamba create --name myenvname riboseq-rust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/riboseq-rust:<tag>

   (see `riboseq-rust/tags`_ for valid values for ``<tag>``)


.. |downloads_riboseq-rust| image:: https://img.shields.io/conda/dn/bioconda/riboseq-rust.svg?style=flat
   :target: https://anaconda.org/bioconda/riboseq-rust
   :alt:   (downloads)
.. |docker_riboseq-rust| image:: https://quay.io/repository/biocontainers/riboseq-rust/status
   :target: https://quay.io/repository/biocontainers/riboseq-rust
.. _`riboseq-rust/tags`: https://quay.io/repository/biocontainers/riboseq-rust?tab=tags


.. raw:: html

    <script>
        var package = "riboseq-rust";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseq-rust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseq-rust/README.html