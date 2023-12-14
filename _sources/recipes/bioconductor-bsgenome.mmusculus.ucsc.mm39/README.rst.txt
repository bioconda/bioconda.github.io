:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmusculus.ucsc.mm39'
.. highlight: bash

bioconductor-bsgenome.mmusculus.ucsc.mm39
=========================================

.. conda:recipe:: bioconductor-bsgenome.mmusculus.ucsc.mm39
   :replaces_section_title:
   :noindex:

   Full genome sequences for Mus musculus \(UCSC genome mm39\, based on GRCm39\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Mmusculus.UCSC.mm39.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmusculus.ucsc.mm39 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm39>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm39/meta.yaml>`_

   Full genome sequences for Mus musculus \(Mouse\) as provided by UCSC \(genome mm39\, based on assembly GRCm39\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.mmusculus.ucsc.mm39

   |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm39| |docker_bioconductor-bsgenome.mmusculus.ucsc.mm39|

   :versions:
      
      

      ``1.4.3-4``,  ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
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

      mamba install bioconductor-bsgenome.mmusculus.ucsc.mm39

   and update with::

      mamba update bioconductor-bsgenome.mmusculus.ucsc.mm39

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mmusculus.ucsc.mm39

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm39:<tag>

   (see `bioconductor-bsgenome.mmusculus.ucsc.mm39/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmusculus.ucsc.mm39| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm39.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmusculus.ucsc.mm39
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmusculus.ucsc.mm39| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm39/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm39
.. _`bioconductor-bsgenome.mmusculus.ucsc.mm39/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmusculus.ucsc.mm39?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mmusculus.ucsc.mm39";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.3","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm39/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmusculus.ucsc.mm39/README.html