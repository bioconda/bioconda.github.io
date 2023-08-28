:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '3seq'
.. highlight: bash

3seq
====

.. conda:recipe:: 3seq
   :replaces_section_title:
   :noindex:

   3SEQ tests all sequence triplets in an alignment for a mosaic recombination signal.

   :homepage: https://mol.ax/software/3seq/
   :license: CC BY-NC-SA 4.0
   :recipe: /`3seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq/meta.yaml>`_

   


.. conda:package:: 3seq

   |downloads_3seq| |docker_3seq|

   :versions:
      
      

      ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install 3seq

   and update with::

      mamba update 3seq

  To create a new environment, run::

      mamba create --name myenvname 3seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/3seq:<tag>

   (see `3seq/tags`_ for valid values for ``<tag>``)


.. |downloads_3seq| image:: https://img.shields.io/conda/dn/bioconda/3seq.svg?style=flat
   :target: https://anaconda.org/bioconda/3seq
   :alt:   (downloads)
.. |docker_3seq| image:: https://quay.io/repository/biocontainers/3seq/status
   :target: https://quay.io/repository/biocontainers/3seq
.. _`3seq/tags`: https://quay.io/repository/biocontainers/3seq?tab=tags


.. raw:: html

    <script>
        var package = "3seq";
        var versions = ["1.8","1.8","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/3seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/3seq/README.html