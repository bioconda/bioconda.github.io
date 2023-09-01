:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanstemcell'
.. highlight: bash

bioconductor-humanstemcell
==========================

.. conda:recipe:: bioconductor-humanstemcell
   :replaces_section_title:
   :noindex:

   Human Stem Cells time course experiment

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/humanStemCell.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanstemcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanstemcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanstemcell/meta.yaml>`_

   Affymetrix time course experiment on human stem cells \(two time points\: undifferentiated and differentiated\).


.. conda:package:: bioconductor-humanstemcell

   |downloads_bioconductor-humanstemcell| |docker_bioconductor-humanstemcell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  <code>0.30.0-1</code>,  <code>0.30.0-0</code>,  <code>0.28.0-0</code>,  <code>0.26.0-0</code>,  </span></summary>
      

      ``0.40.0-0``,  ``0.38.0-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-hgu133plus2.db: ``>=3.13.0,<3.14.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-humanstemcell

   and update with::

      mamba update bioconductor-humanstemcell

  To create a new environment, run::

      mamba create --name myenvname bioconductor-humanstemcell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanstemcell:<tag>

   (see `bioconductor-humanstemcell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanstemcell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanstemcell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanstemcell
   :alt:   (downloads)
.. |docker_bioconductor-humanstemcell| image:: https://quay.io/repository/biocontainers/bioconductor-humanstemcell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanstemcell
.. _`bioconductor-humanstemcell/tags`: https://quay.io/repository/biocontainers/bioconductor-humanstemcell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanstemcell";
        var versions = ["0.40.0","0.38.0","0.34.0","0.34.0","0.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanstemcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanstemcell/README.html