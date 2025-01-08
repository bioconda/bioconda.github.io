:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pmm'
.. highlight: bash

bioconductor-pmm
================

.. conda:recipe:: bioconductor-pmm
   :replaces_section_title:
   :noindex:

   Parallel Mixed Model

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/pmm.html
   :license: GPL-3
   :recipe: /`bioconductor-pmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pmm/meta.yaml>`_
   :links: biotools: :biotools:`pmm`, doi: :doi:`10.3929/ethz-a-010607487`

   The Parallel Mixed Model \(PMM\) approach is suitable for hit selection and cross\-comparison of RNAi screens generated in experiments that are performed in parallel under several conditions. For example\, we could think of the measurements or readouts from cells under RNAi knock\-down\, which are infected with several pathogens or which are grown from different cell lines.


.. conda:package:: bioconductor-pmm

   |downloads_bioconductor-pmm| |docker_bioconductor-pmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-lme4: 
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

      mamba install bioconductor-pmm

   and update with::

      mamba update bioconductor-pmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pmm:<tag>

   (see `bioconductor-pmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pmm
   :alt:   (downloads)
.. |docker_bioconductor-pmm| image:: https://quay.io/repository/biocontainers/bioconductor-pmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pmm
.. _`bioconductor-pmm/tags`: https://quay.io/repository/biocontainers/bioconductor-pmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pmm";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pmm/README.html