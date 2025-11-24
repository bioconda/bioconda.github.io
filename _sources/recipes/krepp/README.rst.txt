:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krepp'
.. highlight: bash

krepp
=====

.. conda:recipe:: krepp
   :replaces_section_title:
   :noindex:

   A k\-mer\-based maximum likelihood method for estimating distances of reads to genomes and phylogenetic placement of metagenomic samples.

   :homepage: https://github.com/bo1929/krepp
   :license: MIT / MIT
   :recipe: /`krepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krepp/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.15466359`, doi: :doi:`10.1101/2025.01.20.633730`

   


.. conda:package:: krepp

   |downloads_krepp| |docker_krepp|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libcurl: ``>=8.17.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install krepp

   and update with::

      mamba update krepp

  To create a new environment, run::

      mamba create --name myenvname krepp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/krepp:<tag>

   (see `krepp/tags`_ for valid values for ``<tag>``)


.. |downloads_krepp| image:: https://img.shields.io/conda/dn/bioconda/krepp.svg?style=flat
   :target: https://anaconda.org/bioconda/krepp
   :alt:   (downloads)
.. |docker_krepp| image:: https://quay.io/repository/biocontainers/krepp/status
   :target: https://quay.io/repository/biocontainers/krepp
.. _`krepp/tags`: https://quay.io/repository/biocontainers/krepp?tab=tags


.. raw:: html

    <script>
        var package = "krepp";
        var versions = ["0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krepp/README.html