:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-meta-suite'
.. highlight: bash

parallel-meta-suite
===================

.. conda:recipe:: parallel-meta-suite
   :replaces_section_title:
   :noindex:

   Parallel\-META\-Suite is an interactive software package for rapid and comprehensive microbiome analysis.

   :homepage: https://github.com/qdu-bioinfo/parallel-meta-suite
   :license: GPL3
   :recipe: /`parallel-meta-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite/meta.yaml>`_

   


.. conda:package:: parallel-meta-suite

   |downloads_parallel-meta-suite| |docker_parallel-meta-suite|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends hmmer: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-pheatmap: 
   :depends vsearch: 
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

      mamba install parallel-meta-suite

   and update with::

      mamba update parallel-meta-suite

  To create a new environment, run::

      mamba create --name myenvname parallel-meta-suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parallel-meta-suite:<tag>

   (see `parallel-meta-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_parallel-meta-suite| image:: https://img.shields.io/conda/dn/bioconda/parallel-meta-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-meta-suite
   :alt:   (downloads)
.. |docker_parallel-meta-suite| image:: https://quay.io/repository/biocontainers/parallel-meta-suite/status
   :target: https://quay.io/repository/biocontainers/parallel-meta-suite
.. _`parallel-meta-suite/tags`: https://quay.io/repository/biocontainers/parallel-meta-suite?tab=tags


.. raw:: html

    <script>
        var package = "parallel-meta-suite";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-meta-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-meta-suite/README.html