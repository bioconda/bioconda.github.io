:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quaqc'
.. highlight: bash

quaqc
=====

.. conda:recipe:: quaqc
   :replaces_section_title:
   :noindex:

   Quick ATAC\-seq Quality Control.

   :homepage: https://github.com/bjmt/quaqc
   :documentation: https://github.com/bjmt/quaqc/blob/v1.3d/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`quaqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quaqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quaqc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae649`

   


.. conda:package:: quaqc

   |downloads_quaqc| |docker_quaqc|

   :versions:
      
      

      ``1.3d-1``,  ``1.3d-0``

      

   
   :depends htslib: ``>=1.17``
   :depends htslib: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
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

      mamba install quaqc

   and update with::

      mamba update quaqc

  To create a new environment, run::

      mamba create --name myenvname quaqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quaqc:<tag>

   (see `quaqc/tags`_ for valid values for ``<tag>``)


.. |downloads_quaqc| image:: https://img.shields.io/conda/dn/bioconda/quaqc.svg?style=flat
   :target: https://anaconda.org/bioconda/quaqc
   :alt:   (downloads)
.. |docker_quaqc| image:: https://quay.io/repository/biocontainers/quaqc/status
   :target: https://quay.io/repository/biocontainers/quaqc
.. _`quaqc/tags`: https://quay.io/repository/biocontainers/quaqc?tab=tags


.. raw:: html

    <script>
        var package = "quaqc";
        var versions = ["1.3d","1.3d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quaqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quaqc/README.html