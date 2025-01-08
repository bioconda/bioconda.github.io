:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copyneutralima'
.. highlight: bash

bioconductor-copyneutralima
===========================

.. conda:recipe:: bioconductor-copyneutralima
   :replaces_section_title:
   :noindex:

   Copy Neutral Illumina Methylation Arrays

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CopyNeutralIMA.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copyneutralima <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copyneutralima/meta.yaml>`_

   Provides a set of genomic copy neutral samples hybridized using Illumina Methylation arrays \(450k and EPIC\).


.. conda:package:: bioconductor-copyneutralima

   |downloads_bioconductor-copyneutralima| |docker_bioconductor-copyneutralima|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rdpack: ``>=0.8``
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

      mamba install bioconductor-copyneutralima

   and update with::

      mamba update bioconductor-copyneutralima

  To create a new environment, run::

      mamba create --name myenvname bioconductor-copyneutralima

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copyneutralima:<tag>

   (see `bioconductor-copyneutralima/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copyneutralima| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copyneutralima.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copyneutralima
   :alt:   (downloads)
.. |docker_bioconductor-copyneutralima| image:: https://quay.io/repository/biocontainers/bioconductor-copyneutralima/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copyneutralima
.. _`bioconductor-copyneutralima/tags`: https://quay.io/repository/biocontainers/bioconductor-copyneutralima?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copyneutralima";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copyneutralima/README.html