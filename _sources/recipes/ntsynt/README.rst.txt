:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntsynt'
.. highlight: bash

ntsynt
======

.. conda:recipe:: ntsynt
   :replaces_section_title:
   :noindex:

   Detecting multi\-genome synteny blocks using minimizer graph mapping.

   :homepage: https://github.com/bcgsc/ntsynt
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ntsynt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntsynt/meta.yaml>`_

   


.. conda:package:: ntsynt

   |downloads_ntsynt| |docker_ntsynt|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.7.1``
   :depends btllib: ``>=1.7.5,<2.0a0``
   :depends intervaltree: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends ncls: 
   :depends pybedtools: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends seqtk: 
   :depends snakemake-minimal: 
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

      mamba install ntsynt

   and update with::

      mamba update ntsynt

  To create a new environment, run::

      mamba create --name myenvname ntsynt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntsynt:<tag>

   (see `ntsynt/tags`_ for valid values for ``<tag>``)


.. |downloads_ntsynt| image:: https://img.shields.io/conda/dn/bioconda/ntsynt.svg?style=flat
   :target: https://anaconda.org/bioconda/ntsynt
   :alt:   (downloads)
.. |docker_ntsynt| image:: https://quay.io/repository/biocontainers/ntsynt/status
   :target: https://quay.io/repository/biocontainers/ntsynt
.. _`ntsynt/tags`: https://quay.io/repository/biocontainers/ntsynt?tab=tags


.. raw:: html

    <script>
        var package = "ntsynt";
        var versions = ["1.0.3","1.0.2","1.0.2","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntsynt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntsynt/README.html