:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cagee'
.. highlight: bash

cagee
=====

.. conda:recipe:: cagee
   :replaces_section_title:
   :noindex:

   Analyzes changes in gene expression in a way that accounts for phylogenetic history and provides a statistical foundation for evolutionary inferences

   :homepage: https://github.com/hahnlab/CAGEE
   :license: ECL
   :recipe: /`cagee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cagee/meta.yaml>`_

   


.. conda:package:: cagee

   |downloads_cagee| |docker_cagee|

   :versions:
      
      

      ``1.2-0``,  ``1.1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mkl: ``>=2020.4``
   :depends zstd: ``>=1.5.6,<1.6.0a0``
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

      mamba install cagee

   and update with::

      mamba update cagee

  To create a new environment, run::

      mamba create --name myenvname cagee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cagee:<tag>

   (see `cagee/tags`_ for valid values for ``<tag>``)


.. |downloads_cagee| image:: https://img.shields.io/conda/dn/bioconda/cagee.svg?style=flat
   :target: https://anaconda.org/bioconda/cagee
   :alt:   (downloads)
.. |docker_cagee| image:: https://quay.io/repository/biocontainers/cagee/status
   :target: https://quay.io/repository/biocontainers/cagee
.. _`cagee/tags`: https://quay.io/repository/biocontainers/cagee?tab=tags


.. raw:: html

    <script>
        var package = "cagee";
        var versions = ["1.2","1.1.1","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cagee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cagee/README.html