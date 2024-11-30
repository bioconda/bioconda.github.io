:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy_sequence_utils'
.. highlight: bash

galaxy_sequence_utils
=====================

.. conda:recipe:: galaxy_sequence_utils
   :replaces_section_title:
   :noindex:

   Sequence Utilities from the Galaxy project

   :homepage: https://github.com/galaxyproject/sequence_utils
   :license: Academic Free License version 3.0
   :recipe: /`galaxy_sequence_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy_sequence_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy_sequence_utils/meta.yaml>`_

   


.. conda:package:: galaxy_sequence_utils

   |downloads_galaxy_sequence_utils| |docker_galaxy_sequence_utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.8``
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

      mamba install galaxy_sequence_utils

   and update with::

      mamba update galaxy_sequence_utils

  To create a new environment, run::

      mamba create --name myenvname galaxy_sequence_utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy_sequence_utils:<tag>

   (see `galaxy_sequence_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy_sequence_utils| image:: https://img.shields.io/conda/dn/bioconda/galaxy_sequence_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy_sequence_utils
   :alt:   (downloads)
.. |docker_galaxy_sequence_utils| image:: https://quay.io/repository/biocontainers/galaxy_sequence_utils/status
   :target: https://quay.io/repository/biocontainers/galaxy_sequence_utils
.. _`galaxy_sequence_utils/tags`: https://quay.io/repository/biocontainers/galaxy_sequence_utils?tab=tags


.. raw:: html

    <script>
        var package = "galaxy_sequence_utils";
        var versions = ["1.2.0","1.1.5","1.1.5","1.1.5","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy_sequence_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy_sequence_utils/README.html