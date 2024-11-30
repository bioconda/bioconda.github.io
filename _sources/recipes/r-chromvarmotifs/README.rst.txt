:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chromvarmotifs'
.. highlight: bash

r-chromvarmotifs
================

.. conda:recipe:: r-chromvarmotifs
   :replaces_section_title:
   :noindex:

   Stores several motifs as PWMatrixList objects for use in R with packages like motifmatchr and chromVAR.

   :homepage: https://github.com/GreenleafLab/chromVARmotifs
   :license: MIT / MIT
   :recipe: /`r-chromvarmotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromvarmotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromvarmotifs/meta.yaml>`_

   


.. conda:package:: r-chromvarmotifs

   |downloads_r-chromvarmotifs| |docker_r-chromvarmotifs|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bioconductor-tfbstools: 
   :depends r-base: ``>=4.1,<4.2.0a0``
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

      mamba install r-chromvarmotifs

   and update with::

      mamba update r-chromvarmotifs

  To create a new environment, run::

      mamba create --name myenvname r-chromvarmotifs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-chromvarmotifs:<tag>

   (see `r-chromvarmotifs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-chromvarmotifs| image:: https://img.shields.io/conda/dn/bioconda/r-chromvarmotifs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chromvarmotifs
   :alt:   (downloads)
.. |docker_r-chromvarmotifs| image:: https://quay.io/repository/biocontainers/r-chromvarmotifs/status
   :target: https://quay.io/repository/biocontainers/r-chromvarmotifs
.. _`r-chromvarmotifs/tags`: https://quay.io/repository/biocontainers/r-chromvarmotifs?tab=tags


.. raw:: html

    <script>
        var package = "r-chromvarmotifs";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chromvarmotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chromvarmotifs/README.html