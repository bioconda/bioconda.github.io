:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakeobjects'
.. highlight: bash

snakeobjects
============

.. conda:recipe:: snakeobjects
   :replaces_section_title:
   :noindex:

   Snakeobjects\, an object\-oriented workflow management system based on snakemake

   :homepage: https://github.com/iossifovlab/snakeobjects
   :license: MIT
   :recipe: /`snakeobjects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeobjects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeobjects/meta.yaml>`_

   


.. conda:package:: snakeobjects

   |downloads_snakeobjects| |docker_snakeobjects|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
   :depends snakemake-minimal: 
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

      mamba install snakeobjects

   and update with::

      mamba update snakeobjects

  To create a new environment, run::

      mamba create --name myenvname snakeobjects

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakeobjects:<tag>

   (see `snakeobjects/tags`_ for valid values for ``<tag>``)


.. |downloads_snakeobjects| image:: https://img.shields.io/conda/dn/bioconda/snakeobjects.svg?style=flat
   :target: https://anaconda.org/bioconda/snakeobjects
   :alt:   (downloads)
.. |docker_snakeobjects| image:: https://quay.io/repository/biocontainers/snakeobjects/status
   :target: https://quay.io/repository/biocontainers/snakeobjects
.. _`snakeobjects/tags`: https://quay.io/repository/biocontainers/snakeobjects?tab=tags


.. raw:: html

    <script>
        var package = "snakeobjects";
        var versions = ["3.1.2","3.1.1","3.1.0","3.0.8","3.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeobjects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeobjects/README.html