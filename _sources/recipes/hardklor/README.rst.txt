:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hardklor'
.. highlight: bash

hardklor
========

.. conda:recipe:: hardklor
   :replaces_section_title:
   :noindex:

   Analyze mass spectra.

   :homepage: https://github.com/mhoopmann/hardklor
   :license: APACHE / Apache-2.0
   :recipe: /`hardklor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: hardklor

   |downloads_hardklor| |docker_hardklor|

   :versions:
      
      

      ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install hardklor

   and update with::

      mamba update hardklor

  To create a new environment, run::

      mamba create --name myenvname hardklor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hardklor:<tag>

   (see `hardklor/tags`_ for valid values for ``<tag>``)


.. |downloads_hardklor| image:: https://img.shields.io/conda/dn/bioconda/hardklor.svg?style=flat
   :target: https://anaconda.org/bioconda/hardklor
   :alt:   (downloads)
.. |docker_hardklor| image:: https://quay.io/repository/biocontainers/hardklor/status
   :target: https://quay.io/repository/biocontainers/hardklor
.. _`hardklor/tags`: https://quay.io/repository/biocontainers/hardklor?tab=tags


.. raw:: html

    <script>
        var package = "hardklor";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hardklor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hardklor/README.html