:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'necat'
.. highlight: bash

necat
=====

.. conda:recipe:: necat
   :replaces_section_title:
   :noindex:

   NECAT is an error correction and de\-novo assembly tool for Nanopore long noisy reads.

   :homepage: https://github.com/xiaochuanle/NECAT
   :documentation: https://github.com/xiaochuanle/NECAT/blob/master/README.md
   
   :license: Unknown
   :recipe: /`necat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/necat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/necat/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-020-20236-7`, biotools: :biotools:`necat`, usegalaxy-eu: :usegalaxy-eu:`necat`

   


.. conda:package:: necat

   |downloads_necat| |docker_necat|

   :versions:
      
      

      ``0.0.1_update20200803-6``,  ``0.0.1_update20200803-5``,  ``0.0.1_update20200803-4``,  ``0.0.1_update20200803-3``,  ``0.0.1_update20200803-2``,  ``0.0.1_update20200803-1``,  ``0.0.1_update20200803-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends perl-env: 
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

      mamba install necat

   and update with::

      mamba update necat

  To create a new environment, run::

      mamba create --name myenvname necat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/necat:<tag>

   (see `necat/tags`_ for valid values for ``<tag>``)


.. |downloads_necat| image:: https://img.shields.io/conda/dn/bioconda/necat.svg?style=flat
   :target: https://anaconda.org/bioconda/necat
   :alt:   (downloads)
.. |docker_necat| image:: https://quay.io/repository/biocontainers/necat/status
   :target: https://quay.io/repository/biocontainers/necat
.. _`necat/tags`: https://quay.io/repository/biocontainers/necat?tab=tags


.. raw:: html

    <script>
        var package = "necat";
        var versions = ["0.0.1_update20200803","0.0.1_update20200803","0.0.1_update20200803","0.0.1_update20200803","0.0.1_update20200803"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/necat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/necat/README.html