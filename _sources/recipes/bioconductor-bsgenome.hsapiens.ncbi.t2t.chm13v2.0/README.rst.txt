:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0
=================================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0
   :replaces_section_title:
   :noindex:

   T2T\-CHM13v2.0 assembly \(Homo sapiens\) wrapped in a BSgenome object

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Hsapiens.NCBI.T2T.CHM13v2.0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/meta.yaml>`_

   The T2T\-CHM13v2.0 assembly \(accession GCA\_009914755.4\)\, as submitted to NCBI by the T2T Consortium\, and wrapped in a BSgenome object. Companion paper\: \"The complete sequence of a human genome\" by Nurk S\, Koren S\, Rhie A\, Rautiainen M\, et al. Science\, 2022.


.. conda:package:: bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0

   |downloads_bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0| |docker_bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
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

      mamba install bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0

   and update with::

      mamba update bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0:<tag>

   (see `bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0
.. _`bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0";
        var versions = ["1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ncbi.t2t.chm13v2.0/README.html