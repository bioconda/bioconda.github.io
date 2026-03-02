:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cin-signature-quantification'
.. highlight: bash

r-cin-signature-quantification
==============================

.. conda:recipe:: r-cin-signature-quantification
   :replaces_section_title:
   :noindex:

   Quantification of copy number signatures in cancer samples from copy number profiles. The signatures are a readout of mutational processes resulting in chromosomal instability \(CIN\). Methods from Drews et al. \(Nature\, 2022\) and Macintyre et al. \(Nature Genetics\, 2018\) are included.

   :homepage: https://github.com/markowetzlab/CINSignatureQuantification
   :license: ASL
   :recipe: /`r-cin-signature-quantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cin-signature-quantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cin-signature-quantification/meta.yaml>`_

   


.. conda:package:: r-cin-signature-quantification

   |downloads_r-cin-signature-quantification| |docker_r-cin-signature-quantification|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.46.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-data.table: ``>=1.14``
   :depends r-doparallel: ``>=1.0.16``
   :depends r-foreach: ``>=1.5.1``
   :depends r-knitr: 
   :depends r-limsolve: ``>=1.5.6``
   :depends r-rmarkdown: 
   :depends r-stringr: ``>=1.4``
   :depends r-testthat: ``>=3.0.0``
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

      mamba install r-cin-signature-quantification

   and update with::

      mamba update r-cin-signature-quantification

  To create a new environment, run::

      mamba create --name myenvname r-cin-signature-quantification

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cin-signature-quantification:<tag>

   (see `r-cin-signature-quantification/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cin-signature-quantification| image:: https://img.shields.io/conda/dn/bioconda/r-cin-signature-quantification.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cin-signature-quantification
   :alt:   (downloads)
.. |docker_r-cin-signature-quantification| image:: https://quay.io/repository/biocontainers/r-cin-signature-quantification/status
   :target: https://quay.io/repository/biocontainers/r-cin-signature-quantification
.. _`r-cin-signature-quantification/tags`: https://quay.io/repository/biocontainers/r-cin-signature-quantification?tab=tags


.. raw:: html

    <script>
        var package = "r-cin-signature-quantification";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cin-signature-quantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cin-signature-quantification/README.html