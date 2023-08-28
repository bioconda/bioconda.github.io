:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-wrapper-utils'
.. highlight: bash

snakemake-wrapper-utils
=======================

.. conda:recipe:: snakemake-wrapper-utils
   :replaces_section_title:
   :noindex:

   A collection of utility functions and classes for Snakemake wrappers.

   :homepage: https://github.com/snakemake/snakemake-wrapper-utils
   :license: MIT
   :recipe: /`snakemake-wrapper-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-wrapper-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-wrapper-utils/meta.yaml>`_

   


.. conda:package:: snakemake-wrapper-utils

   |downloads_snakemake-wrapper-utils| |docker_snakemake-wrapper-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.0-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  </span></summary>
      

      ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snakemake-wrapper-utils

   and update with::

      mamba update snakemake-wrapper-utils

  To create a new environment, run::

      mamba create --name myenvname snakemake-wrapper-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-wrapper-utils:<tag>

   (see `snakemake-wrapper-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-wrapper-utils| image:: https://img.shields.io/conda/dn/bioconda/snakemake-wrapper-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-wrapper-utils
   :alt:   (downloads)
.. |docker_snakemake-wrapper-utils| image:: https://quay.io/repository/biocontainers/snakemake-wrapper-utils/status
   :target: https://quay.io/repository/biocontainers/snakemake-wrapper-utils
.. _`snakemake-wrapper-utils/tags`: https://quay.io/repository/biocontainers/snakemake-wrapper-utils?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-wrapper-utils";
        var versions = ["0.6.2","0.6.1","0.6.0","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-wrapper-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-wrapper-utils/README.html