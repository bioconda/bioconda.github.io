:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tophat'
.. highlight: bash

tophat
======

.. conda:recipe:: tophat
   :replaces_section_title:
   :noindex:

   A spliced read mapper for RNA\-Seq.

   :homepage: http://ccb.jhu.edu/software/tophat
   :developer docs: https://github.com/infphilo/tophat
   :license: Boost Software License
   :recipe: /`tophat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat/meta.yaml>`_
   :links: biotools: :biotools:`tophat2`, usegalaxy-eu: :usegalaxy-eu:`tophat2`

   


.. conda:package:: tophat

   |downloads_tophat| |docker_tophat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-0</code>,  <code>2.1.1-3</code>,  <code>2.1.1-2</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.14-0</code>,  <code>2.0.13-6</code>,  <code>2.0.13-5</code>,  </span></summary>
      

      ``2.1.2-0``,  ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.14-0``,  ``2.0.13-6``,  ``2.0.13-5``,  ``2.0.13-4``,  ``2.0.13-3``,  ``2.0.13-2``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends bowtie2: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends ncurses: ``>=6.5,<7.0a0``
   :depends python: ``>=3``
   :depends setuptools: 
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

      mamba install tophat

   and update with::

      mamba update tophat

  To create a new environment, run::

      mamba create --name myenvname tophat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tophat:<tag>

   (see `tophat/tags`_ for valid values for ``<tag>``)


.. |downloads_tophat| image:: https://img.shields.io/conda/dn/bioconda/tophat.svg?style=flat
   :target: https://anaconda.org/bioconda/tophat
   :alt:   (downloads)
.. |docker_tophat| image:: https://quay.io/repository/biocontainers/tophat/status
   :target: https://quay.io/repository/biocontainers/tophat
.. _`tophat/tags`: https://quay.io/repository/biocontainers/tophat?tab=tags


.. raw:: html

    <script>
        var package = "tophat";
        var versions = ["2.1.2","2.1.1","2.1.1","2.1.1","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat/README.html