:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'radtk'
.. highlight: bash

radtk
=====

.. conda:recipe:: radtk
   :replaces_section_title:
   :noindex:

   A collection of tools for working with RAD files.

   :homepage: https://github.com/COMBINE-lab/radtk
   :license: BSD-3-Clause
   :recipe: /`radtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/radtk/meta.yaml>`_

   


.. conda:package:: radtk

   |downloads_radtk| |docker_radtk|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install radtk

   and update with::

      mamba update radtk

  To create a new environment, run::

      mamba create --name myenvname radtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/radtk:<tag>

   (see `radtk/tags`_ for valid values for ``<tag>``)


.. |downloads_radtk| image:: https://img.shields.io/conda/dn/bioconda/radtk.svg?style=flat
   :target: https://anaconda.org/bioconda/radtk
   :alt:   (downloads)
.. |docker_radtk| image:: https://quay.io/repository/biocontainers/radtk/status
   :target: https://quay.io/repository/biocontainers/radtk
.. _`radtk/tags`: https://quay.io/repository/biocontainers/radtk?tab=tags


.. raw:: html

    <script>
        var package = "radtk";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/radtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/radtk/README.html