:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectraltad'
.. highlight: bash

bioconductor-spectraltad
========================

.. conda:recipe:: bioconductor-spectraltad
   :replaces_section_title:
   :noindex:

   SpectralTAD\: Hierarchical TAD detection using spectral clustering

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SpectralTAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spectraltad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraltad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraltad/meta.yaml>`_

   SpectralTAD is an R package designed to identify Topologically Associated Domains \(TADs\) from Hi\-C contact matrices. It uses a modified version of spectral clustering that uses a sliding window to quickly detect TADs. The function works on a range of different formats of contact matrices and returns a bed file of TAD coordinates. The method does not require users to adjust any parameters to work and gives them control over the number of hierarchical levels to be returned.


.. conda:package:: bioconductor-spectraltad

   |downloads_bioconductor-spectraltad| |docker_bioconductor-spectraltad|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-hiccompare: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-primme: 
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

      mamba install bioconductor-spectraltad

   and update with::

      mamba update bioconductor-spectraltad

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spectraltad

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spectraltad:<tag>

   (see `bioconductor-spectraltad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spectraltad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectraltad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectraltad
   :alt:   (downloads)
.. |docker_bioconductor-spectraltad| image:: https://quay.io/repository/biocontainers/bioconductor-spectraltad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectraltad
.. _`bioconductor-spectraltad/tags`: https://quay.io/repository/biocontainers/bioconductor-spectraltad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectraltad";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectraltad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectraltad/README.html