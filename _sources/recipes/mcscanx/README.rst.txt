:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcscanx'
.. highlight: bash

mcscanx
=======

.. conda:recipe:: mcscanx
   :replaces_section_title:
   :noindex:

   Multiple Collinearity Scan toolkit X version

   :homepage: https://github.com/wyp1125/MCScanX
   :license: BSD / BSD
   :recipe: /`mcscanx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcscanx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcscanx/meta.yaml>`_

   


.. conda:package:: mcscanx

   |downloads_mcscanx| |docker_mcscanx|

   :versions:
      
      

      ``0.1-0``

      

   
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

      mamba install mcscanx

   and update with::

      mamba update mcscanx

  To create a new environment, run::

      mamba create --name myenvname mcscanx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mcscanx:<tag>

   (see `mcscanx/tags`_ for valid values for ``<tag>``)


.. |downloads_mcscanx| image:: https://img.shields.io/conda/dn/bioconda/mcscanx.svg?style=flat
   :target: https://anaconda.org/bioconda/mcscanx
   :alt:   (downloads)
.. |docker_mcscanx| image:: https://quay.io/repository/biocontainers/mcscanx/status
   :target: https://quay.io/repository/biocontainers/mcscanx
.. _`mcscanx/tags`: https://quay.io/repository/biocontainers/mcscanx?tab=tags


.. raw:: html

    <script>
        var package = "mcscanx";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcscanx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcscanx/README.html