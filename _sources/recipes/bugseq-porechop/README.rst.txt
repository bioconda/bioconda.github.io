:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bugseq-porechop'
.. highlight: bash

bugseq-porechop
===============

.. conda:recipe:: bugseq-porechop
   :replaces_section_title:
   :noindex:

   Adapter removal and demultiplexing of Oxford Nanopore reads \(fork of artic\-network\/Porechop\)

   :homepage: https://gitlab.com/bugseq/porechop
   :license: GPL3
   :recipe: /`bugseq-porechop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bugseq-porechop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bugseq-porechop/meta.yaml>`_

   


.. conda:package:: bugseq-porechop

   |downloads_bugseq-porechop| |docker_bugseq-porechop|

   :versions:
      
      

      ``0.3.4pre-2``,  ``0.3.4pre-1``,  ``0.3.4pre-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
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

      mamba install bugseq-porechop

   and update with::

      mamba update bugseq-porechop

  To create a new environment, run::

      mamba create --name myenvname bugseq-porechop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bugseq-porechop:<tag>

   (see `bugseq-porechop/tags`_ for valid values for ``<tag>``)


.. |downloads_bugseq-porechop| image:: https://img.shields.io/conda/dn/bioconda/bugseq-porechop.svg?style=flat
   :target: https://anaconda.org/bioconda/bugseq-porechop
   :alt:   (downloads)
.. |docker_bugseq-porechop| image:: https://quay.io/repository/biocontainers/bugseq-porechop/status
   :target: https://quay.io/repository/biocontainers/bugseq-porechop
.. _`bugseq-porechop/tags`: https://quay.io/repository/biocontainers/bugseq-porechop?tab=tags


.. raw:: html

    <script>
        var package = "bugseq-porechop";
        var versions = ["0.3.4pre","0.3.4pre","0.3.4pre"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bugseq-porechop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bugseq-porechop/README.html