:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abritamr'
.. highlight: bash

abritamr
========

.. conda:recipe:: abritamr
   :replaces_section_title:
   :noindex:

   Running AMRFinderPlus for MDU

   :homepage: https://github.com/MDU-PHL/abritamr
   :license: GPL3 / GPL-3.0-only
   :recipe: /`abritamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abritamr/meta.yaml>`_
   :links: biotools: :biotools:`abritamr`

   


.. conda:package:: abritamr

   |downloads_abritamr| |docker_abritamr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.17-1</code>,  <code>1.0.17-0</code>,  <code>1.0.14-1</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  </span></summary>
      

      ``1.0.17-1``,  ``1.0.17-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends hmmer: 
   :depends ncbi-amrfinderplus: ``3.12.8.*``
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends xlsxwriter: 
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

      mamba install abritamr

   and update with::

      mamba update abritamr

  To create a new environment, run::

      mamba create --name myenvname abritamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abritamr:<tag>

   (see `abritamr/tags`_ for valid values for ``<tag>``)


.. |downloads_abritamr| image:: https://img.shields.io/conda/dn/bioconda/abritamr.svg?style=flat
   :target: https://anaconda.org/bioconda/abritamr
   :alt:   (downloads)
.. |docker_abritamr| image:: https://quay.io/repository/biocontainers/abritamr/status
   :target: https://quay.io/repository/biocontainers/abritamr
.. _`abritamr/tags`: https://quay.io/repository/biocontainers/abritamr?tab=tags


.. raw:: html

    <script>
        var package = "abritamr";
        var versions = ["1.0.17","1.0.17","1.0.14","1.0.14","1.0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abritamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abritamr/README.html