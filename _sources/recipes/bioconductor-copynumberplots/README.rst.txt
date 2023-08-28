:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copynumberplots'
.. highlight: bash

bioconductor-copynumberplots
============================

.. conda:recipe:: bioconductor-copynumberplots
   :replaces_section_title:
   :noindex:

   Create Copy\-Number Plots using karyoploteR functionality

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CopyNumberPlots.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copynumberplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumberplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumberplots/meta.yaml>`_

   CopyNumberPlots have a set of functions extending karyoploteRs functionality to create beautiful\, customizable and flexible plots of copy\-number related data.


.. conda:package:: bioconductor-copynumberplots

   |downloads_bioconductor-copynumberplots| |docker_bioconductor-copynumberplots|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-cn.mops: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-karyoploter: ``>=1.26.0,<1.27.0``
   :depends bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rhdf5: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-copynumberplots

   and update with::

      mamba update bioconductor-copynumberplots

  To create a new environment, run::

      mamba create --name myenvname bioconductor-copynumberplots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copynumberplots:<tag>

   (see `bioconductor-copynumberplots/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copynumberplots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copynumberplots.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copynumberplots
   :alt:   (downloads)
.. |docker_bioconductor-copynumberplots| image:: https://quay.io/repository/biocontainers/bioconductor-copynumberplots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copynumberplots
.. _`bioconductor-copynumberplots/tags`: https://quay.io/repository/biocontainers/bioconductor-copynumberplots?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copynumberplots";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copynumberplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copynumberplots/README.html