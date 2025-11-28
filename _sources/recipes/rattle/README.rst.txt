:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rattle'
.. highlight: bash

rattle
======

.. conda:recipe:: rattle
   :replaces_section_title:
   :noindex:

   Reference\-free reconstruction and quantification of transcriptomes from long\-read sequencing.

   :homepage: https://github.com/comprna/RATTLE
   :documentation: https://github.com/comprna/RATTLE/blob/v1.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`rattle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rattle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rattle/meta.yaml>`_
   :links: biotools: :biotools:`rattle`, doi: :doi:`10.1186/s13059-022-02715-w`

   


.. conda:package:: rattle

   |downloads_rattle| |docker_rattle|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install rattle

   and update with::

      mamba update rattle

  To create a new environment, run::

      mamba create --name myenvname rattle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rattle:<tag>

   (see `rattle/tags`_ for valid values for ``<tag>``)


.. |downloads_rattle| image:: https://img.shields.io/conda/dn/bioconda/rattle.svg?style=flat
   :target: https://anaconda.org/bioconda/rattle
   :alt:   (downloads)
.. |docker_rattle| image:: https://quay.io/repository/biocontainers/rattle/status
   :target: https://quay.io/repository/biocontainers/rattle
.. _`rattle/tags`: https://quay.io/repository/biocontainers/rattle?tab=tags


.. raw:: html

    <script>
        var package = "rattle";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rattle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rattle/README.html