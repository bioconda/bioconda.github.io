:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spacepac'
.. highlight: bash

bioconductor-spacepac
=====================

.. conda:recipe:: bioconductor-spacepac
   :replaces_section_title:
   :noindex:

   Identification of Mutational Clusters in 3D Protein Space via Simulation.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SpacePAC.html
   :license: GPL-2
   :recipe: /`bioconductor-spacepac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacepac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacepac/meta.yaml>`_
   :links: biotools: :biotools:`spacepac`, doi: :doi:`10.1186/1471-2105-15-231`

   Identifies clustering of somatic mutations in proteins via a simulation approach while considering the protein\'s tertiary structure.


.. conda:package:: bioconductor-spacepac

   |downloads_bioconductor-spacepac| |docker_bioconductor-spacepac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.3-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ipac: ``>=1.44.0,<1.45.0``
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

      mamba install bioconductor-spacepac

   and update with::

      mamba update bioconductor-spacepac

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spacepac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spacepac:<tag>

   (see `bioconductor-spacepac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spacepac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spacepac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spacepac
   :alt:   (downloads)
.. |docker_bioconductor-spacepac| image:: https://quay.io/repository/biocontainers/bioconductor-spacepac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spacepac
.. _`bioconductor-spacepac/tags`: https://quay.io/repository/biocontainers/bioconductor-spacepac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spacepac";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spacepac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spacepac/README.html