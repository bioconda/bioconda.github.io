:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg19'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg19
========================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg19
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(UCSC version hg19\, based on GRCh37.p13\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Hsapiens.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg19\, based on GRCh37.p13\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg19

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-9</code>,  <code>1.4.3-8</code>,  <code>1.4.3-7</code>,  <code>1.4.3-6</code>,  <code>1.4.3-5</code>,  <code>1.4.3-4</code>,  <code>1.4.3-3</code>,  <code>1.4.3-2</code>,  <code>1.4.3-1</code>,  </span></summary>
      

      ``1.4.3-9``,  ``1.4.3-8``,  ``1.4.3-7``,  ``1.4.3-6``,  ``1.4.3-5``,  ``1.4.3-4``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.0-8``,  ``1.4.0-7``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
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

      mamba install bioconductor-bsgenome.hsapiens.ucsc.hg19

   and update with::

      mamba update bioconductor-bsgenome.hsapiens.ucsc.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.hsapiens.ucsc.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19:<tag>

   (see `bioconductor-bsgenome.hsapiens.ucsc.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg19
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg19";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg19/README.html