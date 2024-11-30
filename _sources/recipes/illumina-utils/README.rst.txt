:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumina-utils'
.. highlight: bash

illumina-utils
==============

.. conda:recipe:: illumina-utils
   :replaces_section_title:
   :noindex:

   A library and collection of scripts to work with Illumina paired\-end data \(for CASAVA 1.8\+\).

   :homepage: https://github.com/meren/illumina-utils
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`illumina-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumina-utils/meta.yaml>`_

   


.. conda:package:: illumina-utils

   |downloads_illumina-utils| |docker_illumina-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.13-0</code>,  <code>2.12-0</code>,  <code>2.11-0</code>,  <code>2.10-0</code>,  <code>2.9-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6-0</code>,  <code>2.5-0</code>,  </span></summary>
      

      ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends python-levenshtein: 
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

      mamba install illumina-utils

   and update with::

      mamba update illumina-utils

  To create a new environment, run::

      mamba create --name myenvname illumina-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/illumina-utils:<tag>

   (see `illumina-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_illumina-utils| image:: https://img.shields.io/conda/dn/bioconda/illumina-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/illumina-utils
   :alt:   (downloads)
.. |docker_illumina-utils| image:: https://quay.io/repository/biocontainers/illumina-utils/status
   :target: https://quay.io/repository/biocontainers/illumina-utils
.. _`illumina-utils/tags`: https://quay.io/repository/biocontainers/illumina-utils?tab=tags


.. raw:: html

    <script>
        var package = "illumina-utils";
        var versions = ["2.13","2.12","2.11","2.10","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumina-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumina-utils/README.html