:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affymetrixdatatestfiles'
.. highlight: bash

bioconductor-affymetrixdatatestfiles
====================================

.. conda:recipe:: bioconductor-affymetrixdatatestfiles
   :replaces_section_title:
   :noindex:

   Affymetrix data files \(CEL\, CDF\, CHP\, EXP\, PGF\, PSI\) for testing

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/AffymetrixDataTestFiles.html
   :license: LGPL-2.1
   :recipe: /`bioconductor-affymetrixdatatestfiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymetrixdatatestfiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affymetrixdatatestfiles/meta.yaml>`_

   This package contains annotation data files and sample data files of Affymetrix file formats.  The files originate from the Affymetrix\' Fusion SDK distribution and other official sources.


.. conda:package:: bioconductor-affymetrixdatatestfiles

   |downloads_bioconductor-affymetrixdatatestfiles| |docker_bioconductor-affymetrixdatatestfiles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  <code>0.28.0-0</code>,  <code>0.27.0-0</code>,  <code>0.26.0-0</code>,  </span></summary>
      

      ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-affymetrixdatatestfiles

   and update with::

      mamba update bioconductor-affymetrixdatatestfiles

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affymetrixdatatestfiles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affymetrixdatatestfiles:<tag>

   (see `bioconductor-affymetrixdatatestfiles/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affymetrixdatatestfiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affymetrixdatatestfiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affymetrixdatatestfiles
   :alt:   (downloads)
.. |docker_bioconductor-affymetrixdatatestfiles| image:: https://quay.io/repository/biocontainers/bioconductor-affymetrixdatatestfiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affymetrixdatatestfiles
.. _`bioconductor-affymetrixdatatestfiles/tags`: https://quay.io/repository/biocontainers/bioconductor-affymetrixdatatestfiles?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affymetrixdatatestfiles";
        var versions = ["0.38.0","0.35.0","0.32.0","0.32.0","0.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affymetrixdatatestfiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affymetrixdatatestfiles/README.html