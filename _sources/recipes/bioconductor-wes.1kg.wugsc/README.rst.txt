:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wes.1kg.wugsc'
.. highlight: bash

bioconductor-wes.1kg.wugsc
==========================

.. conda:recipe:: bioconductor-wes.1kg.wugsc
   :replaces_section_title:
   :noindex:

   Whole Exome Sequencing \(WES\) of chromosome 22 401st to 500th exon from the 1000 Genomes \(1KG\) Project by the Washington University Genome Sequencing Center \(WUGSC\).

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/WES.1KG.WUGSC.html
   :license: GPL-2
   :recipe: /`bioconductor-wes.1kg.wugsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wes.1kg.wugsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wes.1kg.wugsc/meta.yaml>`_

   The assembled .bam files of whole exome sequencing data from the 1000 Genomes Project. 46 samples sequenced by the Washington University Genome Sequencing Center are included.


.. conda:package:: bioconductor-wes.1kg.wugsc

   |downloads_bioconductor-wes.1kg.wugsc| |docker_bioconductor-wes.1kg.wugsc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.29.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.29.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-wes.1kg.wugsc

   and update with::

      mamba update bioconductor-wes.1kg.wugsc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wes.1kg.wugsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wes.1kg.wugsc:<tag>

   (see `bioconductor-wes.1kg.wugsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wes.1kg.wugsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wes.1kg.wugsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wes.1kg.wugsc
   :alt:   (downloads)
.. |docker_bioconductor-wes.1kg.wugsc| image:: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc
.. _`bioconductor-wes.1kg.wugsc/tags`: https://quay.io/repository/biocontainers/bioconductor-wes.1kg.wugsc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wes.1kg.wugsc";
        var versions = ["1.38.0","1.34.0","1.32.0","1.29.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wes.1kg.wugsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wes.1kg.wugsc/README.html