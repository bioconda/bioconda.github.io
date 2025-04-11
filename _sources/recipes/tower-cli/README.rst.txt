:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tower-cli'
.. highlight: bash

tower-cli
=========

.. conda:recipe:: tower-cli
   :replaces_section_title:
   :noindex:

   The Tower CLI an interface to Nextflow Tower via the CLI

   :homepage: https://github.com/seqeralabs/tower-cli
   :license: MPL-2.0
   :recipe: /`tower-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tower-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tower-cli/meta.yaml>`_

   


.. conda:package:: tower-cli

   |downloads_tower-cli| |docker_tower-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.3-1</code>,  <code>0.10.3-0</code>,  <code>0.9.2-1</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=17``
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

      mamba install tower-cli

   and update with::

      mamba update tower-cli

  To create a new environment, run::

      mamba create --name myenvname tower-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tower-cli:<tag>

   (see `tower-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_tower-cli| image:: https://img.shields.io/conda/dn/bioconda/tower-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/tower-cli
   :alt:   (downloads)
.. |docker_tower-cli| image:: https://quay.io/repository/biocontainers/tower-cli/status
   :target: https://quay.io/repository/biocontainers/tower-cli
.. _`tower-cli/tags`: https://quay.io/repository/biocontainers/tower-cli?tab=tags


.. raw:: html

    <script>
        var package = "tower-cli";
        var versions = ["0.11.2","0.11.1","0.11.0","0.10.3","0.10.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tower-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tower-cli/README.html