:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recentrifuge'
.. highlight: bash

recentrifuge
============

.. conda:recipe:: recentrifuge
   :replaces_section_title:
   :noindex:

   Robust comparative analysis and contamination removal for metagenomics.

   :homepage: https://github.com/khyox/recentrifuge
   :documentation: https://github.com/khyox/recentrifuge/wiki
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`recentrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recentrifuge/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1006967`, biotools: :biotools:`Recentrifuge`, usegalaxy-eu: :usegalaxy-eu:`recentrifuge`

   


.. conda:package:: recentrifuge

   |downloads_recentrifuge| |docker_recentrifuge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.1-0</code>,  <code>1.15.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.13.2-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-0</code>,  <code>1.12.2-0</code>,  <code>1.12.1-0</code>,  </span></summary>
      

      ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.29.0-0``,  ``0.28.14-0``,  ``0.28.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.79``
   :depends matplotlib-base: ``>=3.3.4``
   :depends numpy: ``>=1.19.5``
   :depends openpyxl: ``3.1.2``
   :depends pandas: ``<2.0.0``
   :depends python: ``>=3.6``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install recentrifuge

   and update with::

      mamba update recentrifuge

  To create a new environment, run::

      mamba create --name myenvname recentrifuge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recentrifuge:<tag>

   (see `recentrifuge/tags`_ for valid values for ``<tag>``)


.. |downloads_recentrifuge| image:: https://img.shields.io/conda/dn/bioconda/recentrifuge.svg?style=flat
   :target: https://anaconda.org/bioconda/recentrifuge
   :alt:   (downloads)
.. |docker_recentrifuge| image:: https://quay.io/repository/biocontainers/recentrifuge/status
   :target: https://quay.io/repository/biocontainers/recentrifuge
.. _`recentrifuge/tags`: https://quay.io/repository/biocontainers/recentrifuge?tab=tags


.. raw:: html

    <script>
        var package = "recentrifuge";
        var versions = ["1.15.1","1.15.0","1.14.1","1.14.0","1.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recentrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recentrifuge/README.html