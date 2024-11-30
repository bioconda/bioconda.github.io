:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picard-slim'
.. highlight: bash

picard-slim
===========

.. conda:recipe:: picard-slim
   :replaces_section_title:
   :noindex:

   Java tools for working with NGS data in the BAM format.

   :homepage: http://broadinstitute.github.io/picard/
   :developer docs: https://github.com/broadinstitute/picard
   :license: MIT / MIT
   :recipe: /`picard-slim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard-slim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picard-slim/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`picard_MarkDuplicates`

   Java tools for working with NGS data in the BAM format. This package lacks the R dependency that is only required for some metrics tasks. This keeps the size of the package smaller\, at the cost of breaking some of Picards\'s commands. The \'picard\' package contains all the necessary dependencies.


.. conda:package:: picard-slim

   |downloads_picard-slim| |docker_picard-slim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.27.4-0</code>,  <code>2.27.3-0</code>,  <code>2.27.2-0</code>,  <code>2.27.1-0</code>,  </span></summary>
      

      ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.27.4-0``,  ``2.27.3-0``,  ``2.27.2-0``,  ``2.27.1-0``,  ``2.27.0-0``,  ``2.26.11-0``,  ``2.26.10-0``,  ``2.26.9-0``,  ``2.26.8-0``,  ``2.26.7-0``,  ``2.26.6-0``,  ``2.26.5-0``,  ``2.26.4-0``,  ``2.26.3-0``,  ``2.26.2-0``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.25.7-0``,  ``2.25.6-0``,  ``2.25.5-0``,  ``2.25.4-0``,  ``2.25.3-0``,  ``2.25.2-0``,  ``2.25.1-1``,  ``2.25.1-0``,  ``2.25.0-1``,  ``2.25.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.23.9-0``,  ``2.23.8-0``,  ``2.23.7-0``,  ``2.23.6-0``,  ``2.23.5-0``,  ``2.23.4-0``,  ``2.23.3-0``,  ``2.23.2-0``,  ``2.23.1-0``,  ``2.23.0-0``,  ``2.22.9-0``,  ``2.22.8-0``,  ``2.22.7-0``,  ``2.22.6-0``,  ``2.22.5-0``,  ``2.22.4-0``,  ``2.22.3-0``,  ``2.22.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.21.9-0``,  ``2.21.8-0``,  ``2.21.7-0``,  ``2.21.6-0``,  ``2.21.5-0``,  ``2.21.4-0``,  ``2.21.3-0``,  ``2.21.2-0``,  ``2.21.1-0``,  ``2.20.8-0``,  ``2.20.7-0``,  ``2.20.6-0``,  ``2.20.5-0``,  ``2.20.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
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

      mamba install picard-slim

   and update with::

      mamba update picard-slim

  To create a new environment, run::

      mamba create --name myenvname picard-slim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/picard-slim:<tag>

   (see `picard-slim/tags`_ for valid values for ``<tag>``)


.. |downloads_picard-slim| image:: https://img.shields.io/conda/dn/bioconda/picard-slim.svg?style=flat
   :target: https://anaconda.org/bioconda/picard-slim
   :alt:   (downloads)
.. |docker_picard-slim| image:: https://quay.io/repository/biocontainers/picard-slim/status
   :target: https://quay.io/repository/biocontainers/picard-slim
.. _`picard-slim/tags`: https://quay.io/repository/biocontainers/picard-slim?tab=tags


.. raw:: html

    <script>
        var package = "picard-slim";
        var versions = ["3.3.0","3.2.0","3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picard-slim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picard-slim/README.html