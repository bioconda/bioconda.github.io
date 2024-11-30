:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msstitch'
.. highlight: bash

msstitch
========

.. conda:recipe:: msstitch
   :replaces_section_title:
   :noindex:

   MS proteomics post processing utilities

   :homepage: https://github.com/lehtiolab/msstitch
   :license: MIT / MIT License
   :recipe: /`msstitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msstitch/meta.yaml>`_

   


.. conda:package:: msstitch

   |downloads_msstitch| |docker_msstitch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.16-0</code>,  <code>3.15-0</code>,  <code>3.14-0</code>,  <code>3.13-0</code>,  <code>3.12-0</code>,  <code>3.11-0</code>,  <code>3.10-0</code>,  <code>3.9-0</code>,  <code>3.8-0</code>,  </span></summary>
      

      ``3.16-0``,  ``3.15-0``,  ``3.14-0``,  ``3.13-0``,  ``3.12-0``,  ``3.11-0``,  ``3.10-0``,  ``3.9-0``,  ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5-0``,  ``3.4-0``,  ``3.3-0``,  ``3.2-0``,  ``3.1-0``,  ``3.0-0``,  ``2.19-0``,  ``2.18-0``,  ``2.17-0``,  ``2.16-0``,  ``2.15-0``,  ``2.14-0``,  ``2.13-1``,  ``2.13-0``,  ``2.12-0``,  ``2.11-0``,  ``2.10-0``,  ``2.9-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4-0``,  ``2.3-0``,  ``2.2-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.69``
   :depends lxml: 
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install msstitch

   and update with::

      mamba update msstitch

  To create a new environment, run::

      mamba create --name myenvname msstitch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msstitch:<tag>

   (see `msstitch/tags`_ for valid values for ``<tag>``)


.. |downloads_msstitch| image:: https://img.shields.io/conda/dn/bioconda/msstitch.svg?style=flat
   :target: https://anaconda.org/bioconda/msstitch
   :alt:   (downloads)
.. |docker_msstitch| image:: https://quay.io/repository/biocontainers/msstitch/status
   :target: https://quay.io/repository/biocontainers/msstitch
.. _`msstitch/tags`: https://quay.io/repository/biocontainers/msstitch?tab=tags


.. raw:: html

    <script>
        var package = "msstitch";
        var versions = ["3.16","3.15","3.14","3.13","3.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msstitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msstitch/README.html