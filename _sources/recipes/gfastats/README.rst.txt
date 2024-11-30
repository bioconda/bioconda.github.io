:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfastats'
.. highlight: bash

gfastats
========

.. conda:recipe:: gfastats
   :replaces_section_title:
   :noindex:

   The swiss army knife for genome assembly

   :homepage: https://github.com/vgl-hub/gfastats
   :license: MIT
   :recipe: /`gfastats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfastats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfastats/meta.yaml>`_
   :links: biotools: :biotools:`gfastats`, usegalaxy-eu: :usegalaxy-eu:`gfastats`

   


.. conda:package:: gfastats

   |downloads_gfastats| |docker_gfastats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9-0</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-3</code>,  <code>1.3.6-2</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  </span></summary>
      

      ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-3``,  ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install gfastats

   and update with::

      mamba update gfastats

  To create a new environment, run::

      mamba create --name myenvname gfastats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfastats:<tag>

   (see `gfastats/tags`_ for valid values for ``<tag>``)


.. |downloads_gfastats| image:: https://img.shields.io/conda/dn/bioconda/gfastats.svg?style=flat
   :target: https://anaconda.org/bioconda/gfastats
   :alt:   (downloads)
.. |docker_gfastats| image:: https://quay.io/repository/biocontainers/gfastats/status
   :target: https://quay.io/repository/biocontainers/gfastats
.. _`gfastats/tags`: https://quay.io/repository/biocontainers/gfastats?tab=tags


.. raw:: html

    <script>
        var package = "gfastats";
        var versions = ["1.3.9","1.3.8","1.3.8","1.3.7","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfastats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfastats/README.html