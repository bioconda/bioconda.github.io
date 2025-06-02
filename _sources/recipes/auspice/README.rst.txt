:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'auspice'
.. highlight: bash

auspice
=======

.. conda:recipe:: auspice
   :replaces_section_title:
   :noindex:

   Auspice is an open\-source interactive tool for visualising phylogenomic data

   :homepage: https://docs.nextstrain.org/projects/auspice/
   :developer docs: https://github.com/nextstrain/auspice
   :license: AGPL / AGPL-3.0-only
   :recipe: /`auspice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty407`

   


.. conda:package:: auspice

   |downloads_auspice| |docker_auspice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.63.0-0</code>,  <code>2.62.0-0</code>,  <code>2.59.1-1</code>,  <code>2.59.1-0</code>,  <code>2.59.0-0</code>,  <code>2.58.0-0</code>,  <code>2.57.0-0</code>,  <code>2.56.1-0</code>,  <code>2.56.0-3</code>,  </span></summary>
      

      ``2.63.0-0``,  ``2.62.0-0``,  ``2.59.1-1``,  ``2.59.1-0``,  ``2.59.0-0``,  ``2.58.0-0``,  ``2.57.0-0``,  ``2.56.1-0``,  ``2.56.0-3``,  ``2.56.0-2``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.54.1-1``,  ``2.54.1-0``,  ``2.53.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.49.0-0``,  ``2.48.0-0``,  ``2.47.0-0``,  ``2.46.0-2``,  ``2.46.0-0``,  ``2.45.1-2``,  ``2.45.1-1``,  ``2.45.1-0``,  ``2.45.0-0``,  ``2.44.0-0``,  ``2.43.0-0``,  ``2.42.0-0``,  ``2.40.1-0``,  ``2.40.0-0``,  ``2.39.0-1``,  ``2.39.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.37.3-1``,  ``2.37.3-0``,  ``2.37.1-1``,  ``2.37.1-0``,  ``2.29.1-1``,  ``2.29.1-0``,  ``2.23.0-1``,  ``2.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends icu: ``>=73.2,<74.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends nodejs: ``20.*|22.*``
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

      mamba install auspice

   and update with::

      mamba update auspice

  To create a new environment, run::

      mamba create --name myenvname auspice

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/auspice:<tag>

   (see `auspice/tags`_ for valid values for ``<tag>``)


.. |downloads_auspice| image:: https://img.shields.io/conda/dn/bioconda/auspice.svg?style=flat
   :target: https://anaconda.org/bioconda/auspice
   :alt:   (downloads)
.. |docker_auspice| image:: https://quay.io/repository/biocontainers/auspice/status
   :target: https://quay.io/repository/biocontainers/auspice
.. _`auspice/tags`: https://quay.io/repository/biocontainers/auspice?tab=tags


.. raw:: html

    <script>
        var package = "auspice";
        var versions = ["2.63.0","2.62.0","2.59.1","2.59.1","2.59.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/auspice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/auspice/README.html