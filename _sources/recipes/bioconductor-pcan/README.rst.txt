:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcan'
.. highlight: bash

bioconductor-pcan
=================

.. conda:recipe:: bioconductor-pcan
   :replaces_section_title:
   :noindex:

   Phenotype Consensus ANalysis \(PCAN\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PCAN.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-pcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcan/meta.yaml>`_
   :links: biotools: :biotools:`pcan`

   Phenotypes comparison based on a pathway consensus approach. Assess the relationship between candidate genes and a set of phenotypes based on additional genes related to the candidate \(e.g. Pathways or network neighbors\).


.. conda:package:: bioconductor-pcan

   |downloads_bioconductor-pcan| |docker_bioconductor-pcan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
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

      mamba install bioconductor-pcan

   and update with::

      mamba update bioconductor-pcan

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcan:<tag>

   (see `bioconductor-pcan/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcan
   :alt:   (downloads)
.. |docker_bioconductor-pcan| image:: https://quay.io/repository/biocontainers/bioconductor-pcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcan
.. _`bioconductor-pcan/tags`: https://quay.io/repository/biocontainers/bioconductor-pcan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcan";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcan/README.html