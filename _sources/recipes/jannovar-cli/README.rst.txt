:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jannovar-cli'
.. highlight: bash

jannovar-cli
============

.. conda:recipe:: jannovar-cli
   :replaces_section_title:
   :noindex:

   Java tool for performing annotation of VCF files

   :homepage: https://github.com/charite/jannovar
   :license: BSD2
   :recipe: /`jannovar-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jannovar-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jannovar-cli/meta.yaml>`_

   


.. conda:package:: jannovar-cli

   |downloads_jannovar-cli| |docker_jannovar-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.36-0</code>,  <code>0.35-1</code>,  <code>0.35-0</code>,  <code>0.34-0</code>,  <code>0.33-0</code>,  <code>0.31-0</code>,  <code>0.29-0</code>,  <code>0.28-0</code>,  <code>0.27-1</code>,  </span></summary>
      

      ``0.36-0``,  ``0.35-1``,  ``0.35-0``,  ``0.34-0``,  ``0.33-0``,  ``0.31-0``,  ``0.29-0``,  ``0.28-0``,  ``0.27-1``,  ``0.26-1``,  ``0.25-1``,  ``0.25-0``,  ``0.24-2``,  ``0.24-1``,  ``0.23-1``,  ``0.23-0``,  ``0.22-0``,  ``0.21-0``,  ``0.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
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

      mamba install jannovar-cli

   and update with::

      mamba update jannovar-cli

  To create a new environment, run::

      mamba create --name myenvname jannovar-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jannovar-cli:<tag>

   (see `jannovar-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_jannovar-cli| image:: https://img.shields.io/conda/dn/bioconda/jannovar-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/jannovar-cli
   :alt:   (downloads)
.. |docker_jannovar-cli| image:: https://quay.io/repository/biocontainers/jannovar-cli/status
   :target: https://quay.io/repository/biocontainers/jannovar-cli
.. _`jannovar-cli/tags`: https://quay.io/repository/biocontainers/jannovar-cli?tab=tags


.. raw:: html

    <script>
        var package = "jannovar-cli";
        var versions = ["0.36","0.35","0.35","0.34","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jannovar-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jannovar-cli/README.html