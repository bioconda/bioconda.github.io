:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diamondonpy'
.. highlight: bash

diamondonpy
===========

.. conda:recipe:: diamondonpy
   :replaces_section_title:
   :noindex:

   A Python wrapper for the DIAMOND bioinformatics tool

   :homepage: https://github.com/EnzoAndree/diamondonpy
   :license: GPL-3.0-only
   :recipe: /`diamondonpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamondonpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diamondonpy/meta.yaml>`_

   


.. conda:package:: diamondonpy

   |downloads_diamondonpy| |docker_diamondonpy|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends diamond: 
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3.6``
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

      mamba install diamondonpy

   and update with::

      mamba update diamondonpy

  To create a new environment, run::

      mamba create --name myenvname diamondonpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/diamondonpy:<tag>

   (see `diamondonpy/tags`_ for valid values for ``<tag>``)


.. |downloads_diamondonpy| image:: https://img.shields.io/conda/dn/bioconda/diamondonpy.svg?style=flat
   :target: https://anaconda.org/bioconda/diamondonpy
   :alt:   (downloads)
.. |docker_diamondonpy| image:: https://quay.io/repository/biocontainers/diamondonpy/status
   :target: https://quay.io/repository/biocontainers/diamondonpy
.. _`diamondonpy/tags`: https://quay.io/repository/biocontainers/diamondonpy?tab=tags


.. raw:: html

    <script>
        var package = "diamondonpy";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diamondonpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diamondonpy/README.html