:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggcat'
.. highlight: bash

ggcat
=====

.. conda:recipe:: ggcat
   :replaces_section_title:
   :noindex:

   Compacted and colored de Bruijn graph construction and querying.

   :homepage: https://github.com/algbio/ggcat
   :documentation: https://github.com/algbio/ggcat/blob/v2.0.0/README.md
   
   :license: MIT / MIT
   :recipe: /`ggcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcat/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.277615.122`

   


.. conda:package:: ggcat

   |downloads_ggcat| |docker_ggcat|

   :versions:
      
      

      ``2.0.0-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
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

      mamba install ggcat

   and update with::

      mamba update ggcat

  To create a new environment, run::

      mamba create --name myenvname ggcat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ggcat:<tag>

   (see `ggcat/tags`_ for valid values for ``<tag>``)


.. |downloads_ggcat| image:: https://img.shields.io/conda/dn/bioconda/ggcat.svg?style=flat
   :target: https://anaconda.org/bioconda/ggcat
   :alt:   (downloads)
.. |docker_ggcat| image:: https://quay.io/repository/biocontainers/ggcat/status
   :target: https://quay.io/repository/biocontainers/ggcat
.. _`ggcat/tags`: https://quay.io/repository/biocontainers/ggcat?tab=tags


.. raw:: html

    <script>
        var package = "ggcat";
        var versions = ["2.0.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggcat/README.html