:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mfascicularis.ncbi.6.0'
.. highlight: bash

bioconductor-bsgenome.mfascicularis.ncbi.6.0
============================================

.. conda:recipe:: bioconductor-bsgenome.mfascicularis.ncbi.6.0
   :replaces_section_title:
   :noindex:

   Full genome sequences for Macaca fascicularis \(Macaca\_fascicularis\_6.0\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Mfascicularis.NCBI.6.0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mfascicularis.ncbi.6.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mfascicularis.ncbi.6.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mfascicularis.ncbi.6.0/meta.yaml>`_

   Full genome sequences for Macaca fascicularis \(Crab\-eating macaque\) as provided by NCBI \(assembly Macaca\_fascicularis\_6.0\, assembly accession GCA\_011100615.1\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.mfascicularis.ncbi.6.0

   |downloads_bioconductor-bsgenome.mfascicularis.ncbi.6.0| |docker_bioconductor-bsgenome.mfascicularis.ncbi.6.0|

   :versions:
      
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``

      

   
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

      mamba install bioconductor-bsgenome.mfascicularis.ncbi.6.0

   and update with::

      mamba update bioconductor-bsgenome.mfascicularis.ncbi.6.0

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mfascicularis.ncbi.6.0

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mfascicularis.ncbi.6.0:<tag>

   (see `bioconductor-bsgenome.mfascicularis.ncbi.6.0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mfascicularis.ncbi.6.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mfascicularis.ncbi.6.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mfascicularis.ncbi.6.0
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mfascicularis.ncbi.6.0| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfascicularis.ncbi.6.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfascicularis.ncbi.6.0
.. _`bioconductor-bsgenome.mfascicularis.ncbi.6.0/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mfascicularis.ncbi.6.0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mfascicularis.ncbi.6.0";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mfascicularis.ncbi.6.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mfascicularis.ncbi.6.0/README.html