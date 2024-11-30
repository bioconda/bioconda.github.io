:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntstat'
.. highlight: bash

ntstat
======

.. conda:recipe:: ntstat
   :replaces_section_title:
   :noindex:

   a toolkit for statistical analysis of k\-mer frequency and depth

   :homepage: https://github.com/bcgsc/ntStat
   :license: GPL-3.0-or-later
   :recipe: /`ntstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntstat/meta.yaml>`_

   


.. conda:package:: ntstat

   |downloads_ntstat| |docker_ntstat|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.7.2``
   :depends btllib: ``>=1.7.3,<2.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends matplotlib-base: 
   :depends ntcard: 
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends tabulate: 
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

      mamba install ntstat

   and update with::

      mamba update ntstat

  To create a new environment, run::

      mamba create --name myenvname ntstat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntstat:<tag>

   (see `ntstat/tags`_ for valid values for ``<tag>``)


.. |downloads_ntstat| image:: https://img.shields.io/conda/dn/bioconda/ntstat.svg?style=flat
   :target: https://anaconda.org/bioconda/ntstat
   :alt:   (downloads)
.. |docker_ntstat| image:: https://quay.io/repository/biocontainers/ntstat/status
   :target: https://quay.io/repository/biocontainers/ntstat
.. _`ntstat/tags`: https://quay.io/repository/biocontainers/ntstat?tab=tags


.. raw:: html

    <script>
        var package = "ntstat";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntstat/README.html