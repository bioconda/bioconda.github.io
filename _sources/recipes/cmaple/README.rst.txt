:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmaple'
.. highlight: bash

cmaple
======

.. conda:recipe:: cmaple
   :replaces_section_title:
   :noindex:

   MAximum Parsimonious Likelihood Estimation in C\/C\+\+.

   :homepage: https://github.com/iqtree/cmaple
   :documentation: https://github.com/iqtree/cmaple/wiki
   
   :license: GPL2 / GPL-2.0
   :recipe: /`cmaple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmaple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmaple/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msae134`

   


.. conda:package:: cmaple

   |downloads_cmaple| |docker_cmaple|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install cmaple

   and update with::

      mamba update cmaple

  To create a new environment, run::

      mamba create --name myenvname cmaple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmaple:<tag>

   (see `cmaple/tags`_ for valid values for ``<tag>``)


.. |downloads_cmaple| image:: https://img.shields.io/conda/dn/bioconda/cmaple.svg?style=flat
   :target: https://anaconda.org/bioconda/cmaple
   :alt:   (downloads)
.. |docker_cmaple| image:: https://quay.io/repository/biocontainers/cmaple/status
   :target: https://quay.io/repository/biocontainers/cmaple
.. _`cmaple/tags`: https://quay.io/repository/biocontainers/cmaple?tab=tags


.. raw:: html

    <script>
        var package = "cmaple";
        var versions = ["1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmaple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmaple/README.html