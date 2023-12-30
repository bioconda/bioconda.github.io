:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hsmmsinglecell'
.. highlight: bash

bioconductor-hsmmsinglecell
===========================

.. conda:recipe:: bioconductor-hsmmsinglecell
   :replaces_section_title:
   :noindex:

   Single\-cell RNA\-Seq for differentiating human skeletal muscle myoblasts \(HSMM\)

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/HSMMSingleCell.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hsmmsinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hsmmsinglecell/meta.yaml>`_

   Skeletal myoblasts undergo a well\-characterized sequence of morphological and transcriptional changes during differentiation. In this experiment\, primary human skeletal muscle myoblasts \(HSMM\) were expanded under high mitogen conditions \(GM\) and then differentiated by switching to low\-mitogen media \(DM\).  RNA\-Seq libraries were sequenced from each of several hundred cells taken over a time\-course of serum\-induced differentiation. Between 49 and 77 cells were captured at each of four time points \(0\, 24\, 48\, 72 hours\) following serum switch using the Fluidigm C1 microfluidic system. RNA from each cell was isolated and used to construct mRNA\-Seq libraries\, which were then sequenced to a depth of \~4 million reads per library\, resulting in a complete gene expression profile for each cell.


.. conda:package:: bioconductor-hsmmsinglecell

   |downloads_bioconductor-hsmmsinglecell| |docker_bioconductor-hsmmsinglecell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.114.0-0``,  ``0.112.0-1``,  ``0.112.0-0``,  ``0.110.0-1``,  ``0.110.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-hsmmsinglecell

   and update with::

      mamba update bioconductor-hsmmsinglecell

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hsmmsinglecell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hsmmsinglecell:<tag>

   (see `bioconductor-hsmmsinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hsmmsinglecell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hsmmsinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hsmmsinglecell
   :alt:   (downloads)
.. |docker_bioconductor-hsmmsinglecell| image:: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell
.. _`bioconductor-hsmmsinglecell/tags`: https://quay.io/repository/biocontainers/bioconductor-hsmmsinglecell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hsmmsinglecell";
        var versions = ["1.22.0","1.20.0","1.18.0","1.17.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hsmmsinglecell/README.html