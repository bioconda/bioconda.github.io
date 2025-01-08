:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fdb.infiniummethylation.hg18'
.. highlight: bash

bioconductor-fdb.infiniummethylation.hg18
=========================================

.. conda:recipe:: bioconductor-fdb.infiniummethylation.hg18
   :replaces_section_title:
   :noindex:

   Annotation package for Illumina Infinium DNA methylation probes

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/FDb.InfiniumMethylation.hg18.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fdb.infiniummethylation.hg18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fdb.infiniummethylation.hg18/meta.yaml>`_

   Compiled HumanMethylation27 and HumanMethylation450 annotations


.. conda:package:: bioconductor-fdb.infiniummethylation.hg18

   |downloads_bioconductor-fdb.infiniummethylation.hg18| |docker_bioconductor-fdb.infiniummethylation.hg18|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-13</code>,  <code>2.2.0-12</code>,  <code>2.2.0-11</code>,  <code>2.2.0-10</code>,  <code>2.2.0-9</code>,  <code>2.2.0-8</code>,  <code>2.2.0-7</code>,  <code>2.2.0-6</code>,  <code>2.2.0-5</code>,  </span></summary>
      

      ``2.2.0-13``,  ``2.2.0-12``,  ``2.2.0-11``,  ``2.2.0-10``,  ``2.2.0-9``,  ``2.2.0-8``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
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

      mamba install bioconductor-fdb.infiniummethylation.hg18

   and update with::

      mamba update bioconductor-fdb.infiniummethylation.hg18

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fdb.infiniummethylation.hg18

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fdb.infiniummethylation.hg18:<tag>

   (see `bioconductor-fdb.infiniummethylation.hg18/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fdb.infiniummethylation.hg18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fdb.infiniummethylation.hg18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fdb.infiniummethylation.hg18
   :alt:   (downloads)
.. |docker_bioconductor-fdb.infiniummethylation.hg18| image:: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18
.. _`bioconductor-fdb.infiniummethylation.hg18/tags`: https://quay.io/repository/biocontainers/bioconductor-fdb.infiniummethylation.hg18?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fdb.infiniummethylation.hg18";
        var versions = ["2.2.0","2.2.0","2.2.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fdb.infiniummethylation.hg18/README.html