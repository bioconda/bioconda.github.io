:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'teloscope'
.. highlight: bash

teloscope
=========

.. conda:recipe:: teloscope
   :replaces_section_title:
   :noindex:

   A telomere annotation tools for genome assemblies.

   :homepage: https://github.com/vgl-hub/teloscope
   :documentation: https://github.com/vgl-hub/teloscope/blob/v0.1.1/README.md
   
   :license: MIT
   :recipe: /`teloscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/teloscope/meta.yaml>`_
   :links: biotools: :biotools:`teloscope`, usegalaxy-eu: :usegalaxy-eu:`teloscope`, doi: :doi:`10.1093/bioinformatics/btac460`

   


.. conda:package:: teloscope

   |downloads_teloscope| |docker_teloscope|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-0</code>,  <code>0.1.0-0</code>,  <code>0.0.9-0</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-0</code>,  <code>0.0.4-1</code>,  </span></summary>
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.0,<4.0a0``
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

      mamba install teloscope

   and update with::

      mamba update teloscope

  To create a new environment, run::

      mamba create --name myenvname teloscope

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/teloscope:<tag>

   (see `teloscope/tags`_ for valid values for ``<tag>``)


.. |downloads_teloscope| image:: https://img.shields.io/conda/dn/bioconda/teloscope.svg?style=flat
   :target: https://anaconda.org/bioconda/teloscope
   :alt:   (downloads)
.. |docker_teloscope| image:: https://quay.io/repository/biocontainers/teloscope/status
   :target: https://quay.io/repository/biocontainers/teloscope
.. _`teloscope/tags`: https://quay.io/repository/biocontainers/teloscope?tab=tags


.. raw:: html

    <script>
        var package = "teloscope";
        var versions = ["0.1.1","0.1.0","0.0.9","0.0.8","0.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/teloscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/teloscope/README.html