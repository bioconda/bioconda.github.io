:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldmason'
.. highlight: bash

foldmason
=========

.. conda:recipe:: foldmason
   :replaces_section_title:
   :noindex:

   Multiple Protein Structure Alignment at Scale with FoldMason

   :homepage: https://github.com/steineggerlab/foldmason
   :license: GPL / GPL-3
   :recipe: /`foldmason <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldmason>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldmason/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.08.01.606130v3`, biotools: :biotools:`foldmason`

   


.. conda:package:: foldmason

   |downloads_foldmason| |docker_foldmason|

   :versions:
      
      

      ``4.dd3c235-0``,  ``3.954d202-0``,  ``2.7bd21ed-0``,  ``1.763a428-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends wget: 
   :depends zlib: 
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

      mamba install foldmason

   and update with::

      mamba update foldmason

  To create a new environment, run::

      mamba create --name myenvname foldmason

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/foldmason:<tag>

   (see `foldmason/tags`_ for valid values for ``<tag>``)


.. |downloads_foldmason| image:: https://img.shields.io/conda/dn/bioconda/foldmason.svg?style=flat
   :target: https://anaconda.org/bioconda/foldmason
   :alt:   (downloads)
.. |docker_foldmason| image:: https://quay.io/repository/biocontainers/foldmason/status
   :target: https://quay.io/repository/biocontainers/foldmason
.. _`foldmason/tags`: https://quay.io/repository/biocontainers/foldmason?tab=tags


.. raw:: html

    <script>
        var package = "foldmason";
        var versions = ["4.dd3c235","3.954d202","2.7bd21ed","1.763a428"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldmason/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldmason/README.html