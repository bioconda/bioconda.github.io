:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gretl'
.. highlight: bash

gretl
=====

.. conda:recipe:: gretl
   :replaces_section_title:
   :noindex:

   gretl is a tool to compute a range of statistics on variation graphs in gfa format.

   :homepage: https://github.com/moinsebi/gretl
   :license: MIT / MIT
   :recipe: /`gretl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretl/meta.yaml>`_

   


.. conda:package:: gretl

   |downloads_gretl| |docker_gretl|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends matplotlib-base: ``>=3.9``
   :depends numpy: ``>=2.1.3``
   :depends pandas: ``>=2.1.3``
   :depends python: ``3.10.*``
   :depends seaborn-base: ``>=0.13.2``
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

      mamba install gretl

   and update with::

      mamba update gretl

  To create a new environment, run::

      mamba create --name myenvname gretl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gretl:<tag>

   (see `gretl/tags`_ for valid values for ``<tag>``)


.. |downloads_gretl| image:: https://img.shields.io/conda/dn/bioconda/gretl.svg?style=flat
   :target: https://anaconda.org/bioconda/gretl
   :alt:   (downloads)
.. |docker_gretl| image:: https://quay.io/repository/biocontainers/gretl/status
   :target: https://quay.io/repository/biocontainers/gretl
.. _`gretl/tags`: https://quay.io/repository/biocontainers/gretl?tab=tags


.. raw:: html

    <script>
        var package = "gretl";
        var versions = ["0.1.1","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gretl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gretl/README.html