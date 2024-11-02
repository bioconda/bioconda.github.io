:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aster'
.. highlight: bash

aster
=====

.. conda:recipe:: aster
   :replaces_section_title:
   :noindex:

   Accurate Species Tree EstimatoR series\; a family of optimation algorithms
   for species tree inference implemented in C\+\+


   :homepage: https://github.com/chaoszhang/ASTER
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`aster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aster/meta.yaml>`_

   


.. conda:package:: aster

   |downloads_aster| |docker_aster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.19-0</code>,  <code>1.16-2</code>,  <code>1.16-1</code>,  <code>1.16-0</code>,  <code>1.15-2</code>,  <code>1.15-1</code>,  <code>1.15-0</code>,  <code>1.13-1</code>,  <code>1.13-0</code>,  </span></summary>
      

      ``1.19-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``,  ``1.15-2``,  ``1.15-1``,  ``1.15-0``,  ``1.13-1``,  ``1.13-0``,  ``1.10-0``,  ``1.3-1``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install aster

   and update with::

      mamba update aster

  To create a new environment, run::

      mamba create --name myenvname aster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aster:<tag>

   (see `aster/tags`_ for valid values for ``<tag>``)


.. |downloads_aster| image:: https://img.shields.io/conda/dn/bioconda/aster.svg?style=flat
   :target: https://anaconda.org/bioconda/aster
   :alt:   (downloads)
.. |docker_aster| image:: https://quay.io/repository/biocontainers/aster/status
   :target: https://quay.io/repository/biocontainers/aster
.. _`aster/tags`: https://quay.io/repository/biocontainers/aster?tab=tags


.. raw:: html

    <script>
        var package = "aster";
        var versions = ["1.19","1.16","1.16","1.16","1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aster/README.html