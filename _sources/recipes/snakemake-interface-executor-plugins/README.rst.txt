:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-executor-plugins'
.. highlight: bash

snakemake-interface-executor-plugins
====================================

.. conda:recipe:: snakemake-interface-executor-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its executor plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-executor-plugins
   :license: MIT / MIT
   :recipe: /`snakemake-interface-executor-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-executor-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-executor-plugins

   |downloads_snakemake-interface-executor-plugins| |docker_snakemake-interface-executor-plugins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>9.3.1-0</code>,  <code>9.2.0-0</code>,  <code>9.1.1-0</code>,  <code>9.1.0-0</code>,  <code>9.0.2-0</code>,  <code>9.0.1-0</code>,  <code>9.0.0-0</code>,  <code>8.2.0-0</code>,  <code>8.1.3-0</code>,  </span></summary>
      

      ``9.3.1-0``,  ``9.2.0-0``,  ``9.1.1-0``,  ``9.1.0-0``,  ``9.0.2-0``,  ``9.0.1-0``,  ``9.0.0-0``,  ``8.2.0-0``,  ``8.1.3-0``,  ``8.1.2-0``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.2-0``,  ``7.0.3-0``,  ``7.0.2-0``,  ``7.0.1-0``,  ``6.0.0-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-0``,  ``4.0.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends argparse-dataclass: ``>=2.0.0,<3.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.17.4,<2.0.0``
   :depends throttler: ``>=1.2.2,<2.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snakemake-interface-executor-plugins

   and update with::

      mamba update snakemake-interface-executor-plugins

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-executor-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-executor-plugins:<tag>

   (see `snakemake-interface-executor-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-executor-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-executor-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-executor-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-executor-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins
.. _`snakemake-interface-executor-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-executor-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-executor-plugins";
        var versions = ["9.3.1","9.2.0","9.1.1","9.1.0","9.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-executor-plugins/README.html