:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arborator'
.. highlight: bash

arborator
=========

.. conda:recipe:: arborator
   :replaces_section_title:
   :noindex:

   Arborator\: Simplifying operationalized pathogen surveillance and outbreak detection.

   :homepage: https://github.com/phac-nml/arborator
   :license: APACHE / Apache-2.0
   :recipe: /`arborator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arborator/meta.yaml>`_

   


.. conda:package:: arborator

   |downloads_arborator| |docker_arborator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.0-5</code>,  <code>1.0.0-4</code>,  <code>1.0.0-3</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends fastparquet: ``>=2023.4.0``
   :depends genomic_address_service: 
   :depends numba: ``>=0.57.1,<=0.61.2``
   :depends numpy: ``>=1.24.4,<2.0.0``
   :depends openpyxl: 
   :depends pandas: ``>=2.0.2,<2.2.0``
   :depends profile_dists: 
   :depends psutil: 
   :depends pyarrow: ``>=14.0.0``
   :depends pytables: ``>=3.8.0``
   :depends python: ``>=3.8.2,<3.12``
   :depends scipy: 
   :depends six: ``>=1.16.0``
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

      mamba install arborator

   and update with::

      mamba update arborator

  To create a new environment, run::

      mamba create --name myenvname arborator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arborator:<tag>

   (see `arborator/tags`_ for valid values for ``<tag>``)


.. |downloads_arborator| image:: https://img.shields.io/conda/dn/bioconda/arborator.svg?style=flat
   :target: https://anaconda.org/bioconda/arborator
   :alt:   (downloads)
.. |docker_arborator| image:: https://quay.io/repository/biocontainers/arborator/status
   :target: https://quay.io/repository/biocontainers/arborator
.. _`arborator/tags`: https://quay.io/repository/biocontainers/arborator?tab=tags


.. raw:: html

    <script>
        var package = "arborator";
        var versions = ["1.2.1","1.2.0","1.2.0","1.1.0","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arborator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arborator/README.html