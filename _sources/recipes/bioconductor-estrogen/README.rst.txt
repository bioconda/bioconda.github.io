:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-estrogen'
.. highlight: bash

bioconductor-estrogen
=====================

.. conda:recipe:: bioconductor-estrogen
   :replaces_section_title:
   :noindex:

   Microarray dataset that can be used as example for 2x2 factorial designs

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/estrogen.html
   :license: LGPL
   :recipe: /`bioconductor-estrogen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-estrogen/meta.yaml>`_

   Data from 8 Affymetrix genechips\, looking at a 2x2 factorial design \(with 2 repeats per level\).


.. conda:package:: bioconductor-estrogen

   |downloads_bioconductor-estrogen| |docker_bioconductor-estrogen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.43.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.35.0-0</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.43.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.35.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-estrogen

   and update with::

      mamba update bioconductor-estrogen

  To create a new environment, run::

      mamba create --name myenvname bioconductor-estrogen

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-estrogen:<tag>

   (see `bioconductor-estrogen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-estrogen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-estrogen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-estrogen
   :alt:   (downloads)
.. |docker_bioconductor-estrogen| image:: https://quay.io/repository/biocontainers/bioconductor-estrogen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-estrogen
.. _`bioconductor-estrogen/tags`: https://quay.io/repository/biocontainers/bioconductor-estrogen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-estrogen";
        var versions = ["1.46.0","1.43.0","1.40.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-estrogen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-estrogen/README.html