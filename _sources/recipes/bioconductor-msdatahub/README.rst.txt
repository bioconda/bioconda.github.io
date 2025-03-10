:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msdatahub'
.. highlight: bash

bioconductor-msdatahub
======================

.. conda:recipe:: bioconductor-msdatahub
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data on ExperimentHub

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsDataHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msdatahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub/meta.yaml>`_

   The MsDataHub package uses the ExperimentHub infrastructure to distribute raw mass spectrometry data files\, peptide spectrum matches or quantitative data from proteomics and metabolomics experiments.


.. conda:package:: bioconductor-msdatahub

   |downloads_bioconductor-msdatahub| |docker_bioconductor-msdatahub|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
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

      mamba install bioconductor-msdatahub

   and update with::

      mamba update bioconductor-msdatahub

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msdatahub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msdatahub:<tag>

   (see `bioconductor-msdatahub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msdatahub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msdatahub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msdatahub
   :alt:   (downloads)
.. |docker_bioconductor-msdatahub| image:: https://quay.io/repository/biocontainers/bioconductor-msdatahub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msdatahub
.. _`bioconductor-msdatahub/tags`: https://quay.io/repository/biocontainers/bioconductor-msdatahub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msdatahub";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html