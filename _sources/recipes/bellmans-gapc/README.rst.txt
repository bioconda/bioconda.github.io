:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bellmans-gapc'
.. highlight: bash

bellmans-gapc
=============

.. conda:recipe:: bellmans-gapc
   :replaces_section_title:
   :noindex:

   A language and compiler for algebraic dynamic programming.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/gapc
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bellmans-gapc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bellmans-gapc/meta.yaml>`_

   


.. conda:package:: bellmans-gapc

   |downloads_bellmans-gapc| |docker_bellmans-gapc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2024.01.12-3</code>,  <code>2024.01.12-2</code>,  <code>2024.01.12-1</code>,  <code>2024.01.12-0</code>,  <code>2023.07.05-0</code>,  <code>2022.07.04-2</code>,  <code>2022.07.04-1</code>,  <code>2022.07.04-0</code>,  <code>2021.04.28-2</code>,  </span></summary>
      

      ``2024.01.12-3``,  ``2024.01.12-2``,  ``2024.01.12-1``,  ``2024.01.12-0``,  ``2023.07.05-0``,  ``2022.07.04-2``,  ``2022.07.04-1``,  ``2022.07.04-0``,  ``2021.04.28-2``,  ``2021.04.28-1``,  ``2021.04.28-0``,  ``2020.12.08-1``,  ``2020.12.08-0``,  ``2020.07.07-0``,  ``2020.01.08-1``,  ``2020.01.08-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blas: 
   :depends boost-cpp: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends make: 
   :depends sed: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bellmans-gapc

   and update with::

      mamba update bellmans-gapc

  To create a new environment, run::

      mamba create --name myenvname bellmans-gapc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bellmans-gapc:<tag>

   (see `bellmans-gapc/tags`_ for valid values for ``<tag>``)


.. |downloads_bellmans-gapc| image:: https://img.shields.io/conda/dn/bioconda/bellmans-gapc.svg?style=flat
   :target: https://anaconda.org/bioconda/bellmans-gapc
   :alt:   (downloads)
.. |docker_bellmans-gapc| image:: https://quay.io/repository/biocontainers/bellmans-gapc/status
   :target: https://quay.io/repository/biocontainers/bellmans-gapc
.. _`bellmans-gapc/tags`: https://quay.io/repository/biocontainers/bellmans-gapc?tab=tags


.. raw:: html

    <script>
        var package = "bellmans-gapc";
        var versions = ["2024.01.12","2024.01.12","2024.01.12","2024.01.12","2023.07.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bellmans-gapc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bellmans-gapc/README.html