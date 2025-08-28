:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phist'
.. highlight: bash

phist
=====

.. conda:recipe:: phist
   :replaces_section_title:
   :noindex:

   Phage\-Host Interaction Search Tool.

   :homepage: https://github.com/refresh-bio/PHIST
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab837`

   


.. conda:package:: phist

   |downloads_phist| |docker_phist|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends kmer-db: ``>=2.3.1,<3.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install phist

   and update with::

      mamba update phist

  To create a new environment, run::

      mamba create --name myenvname phist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phist:<tag>

   (see `phist/tags`_ for valid values for ``<tag>``)


.. |downloads_phist| image:: https://img.shields.io/conda/dn/bioconda/phist.svg?style=flat
   :target: https://anaconda.org/bioconda/phist
   :alt:   (downloads)
.. |docker_phist| image:: https://quay.io/repository/biocontainers/phist/status
   :target: https://quay.io/repository/biocontainers/phist
.. _`phist/tags`: https://quay.io/repository/biocontainers/phist?tab=tags


.. raw:: html

    <script>
        var package = "phist";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phist/README.html