:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vambcore'
.. highlight: bash

vambcore
========

.. conda:recipe:: vambcore
   :replaces_section_title:
   :noindex:

   Performant backend functions for the Vamb binning tool

   :homepage: https://github.com/jakobnissen/vambcore
   :license: MIT / MIT
   :recipe: /`vambcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vambcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vambcore/meta.yaml>`_

   


.. conda:package:: vambcore

   |downloads_vambcore| |docker_vambcore|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
   :depends libgcc: ``>=13``
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
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

      mamba install vambcore

   and update with::

      mamba update vambcore

  To create a new environment, run::

      mamba create --name myenvname vambcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vambcore:<tag>

   (see `vambcore/tags`_ for valid values for ``<tag>``)


.. |downloads_vambcore| image:: https://img.shields.io/conda/dn/bioconda/vambcore.svg?style=flat
   :target: https://anaconda.org/bioconda/vambcore
   :alt:   (downloads)
.. |docker_vambcore| image:: https://quay.io/repository/biocontainers/vambcore/status
   :target: https://quay.io/repository/biocontainers/vambcore
.. _`vambcore/tags`: https://quay.io/repository/biocontainers/vambcore?tab=tags


.. raw:: html

    <script>
        var package = "vambcore";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vambcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vambcore/README.html