:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtg-tools'
.. highlight: bash

rtg-tools
=========

.. conda:recipe:: rtg-tools
   :replaces_section_title:
   :noindex:

   RealTimeGenomics Tools \-\- Utilities for accurate VCF comparison and manipulation.

   :homepage: https://github.com/RealTimeGenomics/rtg-tools
   :documentation: https://realtimegenomics.github.io/rtg-tools/index.html
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rtg-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools/meta.yaml>`_
   :links: biotools: :biotools:`rtg_core`

   


.. conda:package:: rtg-tools

   |downloads_rtg-tools| |docker_rtg-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13-0</code>,  <code>3.12.1-1</code>,  <code>3.12.1-0</code>,  <code>3.12-1</code>,  <code>3.12-0</code>,  <code>3.11-0</code>,  <code>3.10.1-0</code>,  <code>3.10-0</code>,  <code>3.9.1-1</code>,  </span></summary>
      

      ``3.13-0``,  ``3.12.1-1``,  ``3.12.1-0``,  ``3.12-1``,  ``3.12-0``,  ``3.11-0``,  ``3.10.1-0``,  ``3.10-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9-0``,  ``3.8.4-0``,  ``3.8.2-0``,  ``3.7.1-0``,  ``3.6-1``,  ``3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends openjdk: 
   :depends zlib: 
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

      mamba install rtg-tools

   and update with::

      mamba update rtg-tools

  To create a new environment, run::

      mamba create --name myenvname rtg-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rtg-tools:<tag>

   (see `rtg-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_rtg-tools| image:: https://img.shields.io/conda/dn/bioconda/rtg-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/rtg-tools
   :alt:   (downloads)
.. |docker_rtg-tools| image:: https://quay.io/repository/biocontainers/rtg-tools/status
   :target: https://quay.io/repository/biocontainers/rtg-tools
.. _`rtg-tools/tags`: https://quay.io/repository/biocontainers/rtg-tools?tab=tags


.. raw:: html

    <script>
        var package = "rtg-tools";
        var versions = ["3.13","3.12.1","3.12.1","3.12","3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtg-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtg-tools/README.html