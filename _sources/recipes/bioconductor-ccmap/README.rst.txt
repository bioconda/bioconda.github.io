:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccmap'
.. highlight: bash

bioconductor-ccmap
==================

.. conda:recipe:: bioconductor-ccmap
   :replaces_section_title:
   :noindex:

   Combination Connectivity Mapping

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ccmap.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccmap/meta.yaml>`_

   Finds drugs and drug combinations that are predicted to reverse or mimic gene expression signatures. These drugs might reverse diseases or mimic healthy lifestyles.


.. conda:package:: bioconductor-ccmap

   |downloads_bioconductor-ccmap| |docker_bioconductor-ccmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-ccdata: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: ``>=1.30.4``
   :depends r-data.table: ``>=1.10.4``
   :depends r-doparallel: ``>=1.0.10``
   :depends r-foreach: ``>=1.4.3``
   :depends r-lsa: ``>=0.73.1``
   :depends r-xgboost: ``>=0.6.4``
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

      mamba install bioconductor-ccmap

   and update with::

      mamba update bioconductor-ccmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ccmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccmap:<tag>

   (see `bioconductor-ccmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccmap
   :alt:   (downloads)
.. |docker_bioconductor-ccmap| image:: https://quay.io/repository/biocontainers/bioconductor-ccmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccmap
.. _`bioconductor-ccmap/tags`: https://quay.io/repository/biocontainers/bioconductor-ccmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccmap";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccmap/README.html