:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crussmap'
.. highlight: bash

crussmap
========

.. conda:recipe:: crussmap
   :replaces_section_title:
   :noindex:

   crussmap is a faster tool to convert genome coordinates between difference reference assemblies.

   :homepage: https://github.com/wjwei-handsome/crussmap
   :documentation: https://crates.io/crates/crussmap
   
   :license: MIT / MIT
   :recipe: /`crussmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crussmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crussmap/meta.yaml>`_

   


.. conda:package:: crussmap

   |downloads_crussmap| |docker_crussmap|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends openssl: ``>=3.6.0,<4.0a0``
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

      mamba install crussmap

   and update with::

      mamba update crussmap

  To create a new environment, run::

      mamba create --name myenvname crussmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crussmap:<tag>

   (see `crussmap/tags`_ for valid values for ``<tag>``)


.. |downloads_crussmap| image:: https://img.shields.io/conda/dn/bioconda/crussmap.svg?style=flat
   :target: https://anaconda.org/bioconda/crussmap
   :alt:   (downloads)
.. |docker_crussmap| image:: https://quay.io/repository/biocontainers/crussmap/status
   :target: https://quay.io/repository/biocontainers/crussmap
.. _`crussmap/tags`: https://quay.io/repository/biocontainers/crussmap?tab=tags


.. raw:: html

    <script>
        var package = "crussmap";
        var versions = ["1.0.1","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crussmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crussmap/README.html