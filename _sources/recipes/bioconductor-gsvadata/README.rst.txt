:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsvadata'
.. highlight: bash

bioconductor-gsvadata
=====================

.. conda:recipe:: bioconductor-gsvadata
   :replaces_section_title:
   :noindex:

   Data employed in the vignette of the GSVA package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/GSVAdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsvadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata/meta.yaml>`_

   This package stores the data employed in the vignette of the GSVA package. These data belong to the following publications\: Armstrong et al. Nat Genet 30\:41\-47\, 2002\; Cahoy et al. J Neurosci 28\:264\-278\, 2008\; Carrel and Willard\, Nature\, 434\:400\-404\, 2005\; Huang et al. PNAS\, 104\:9758\-9763\, 2007\; Pickrell et al. Nature\, 464\:768\-722\, 2010\; Skaletsky et al. Nature\, 423\:825\-837\; Verhaak et al. Cancer Cell 17\:98\-110\, 2010


.. conda:package:: bioconductor-gsvadata

   |downloads_bioconductor-gsvadata| |docker_bioconductor-gsvadata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-hgu95a.db: ``>=3.13.0,<3.14.0``
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

      mamba install bioconductor-gsvadata

   and update with::

      mamba update bioconductor-gsvadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsvadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsvadata:<tag>

   (see `bioconductor-gsvadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsvadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsvadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsvadata
   :alt:   (downloads)
.. |docker_bioconductor-gsvadata| image:: https://quay.io/repository/biocontainers/bioconductor-gsvadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsvadata
.. _`bioconductor-gsvadata/tags`: https://quay.io/repository/biocontainers/bioconductor-gsvadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsvadata";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html