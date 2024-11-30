:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrez'
.. highlight: bash

lrez
====

.. conda:recipe:: lrez
   :replaces_section_title:
   :noindex:

   Standalone tool and library allowing to work with barcoded linked\-reads

   :homepage: https://github.com/morispi/LRez
   :license: AGPL-3.0-or-later AND MIT
   :recipe: /`lrez <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrez>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrez/meta.yaml>`_

   


.. conda:package:: lrez

   |downloads_lrez| |docker_lrez|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.4-3</code>,  <code>2.2.4-2</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  <code>2.2.3-2</code>,  <code>2.2.3-1</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  </span></summary>
      

      ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install lrez

   and update with::

      mamba update lrez

  To create a new environment, run::

      mamba create --name myenvname lrez

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lrez:<tag>

   (see `lrez/tags`_ for valid values for ``<tag>``)


.. |downloads_lrez| image:: https://img.shields.io/conda/dn/bioconda/lrez.svg?style=flat
   :target: https://anaconda.org/bioconda/lrez
   :alt:   (downloads)
.. |docker_lrez| image:: https://quay.io/repository/biocontainers/lrez/status
   :target: https://quay.io/repository/biocontainers/lrez
.. _`lrez/tags`: https://quay.io/repository/biocontainers/lrez?tab=tags


.. raw:: html

    <script>
        var package = "lrez";
        var versions = ["2.2.4","2.2.4","2.2.4","2.2.4","2.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrez/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrez/README.html