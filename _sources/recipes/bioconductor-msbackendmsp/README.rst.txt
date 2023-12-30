:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmsp'
.. highlight: bash

bioconductor-msbackendmsp
=========================

.. conda:recipe:: bioconductor-msbackendmsp
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for NIST msp Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MsBackendMsp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmsp/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and handling of MS\/MS spectra from NIST MSP Format \(msp\) files. Import of data from files with different MSP \*flavours\* is supported. Objects from this package add support for MSP files to Bioconductor\'s Spectra package. This package is thus not supposed to be used without the Spectra package that provides a complete infrastructure for MS data handling.


.. conda:package:: bioconductor-msbackendmsp

   |downloads_bioconductor-msbackendmsp| |docker_bioconductor-msbackendmsp|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-mscoreutils: ``>=1.14.0,<1.15.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-spectra: ``>=1.12.0,<1.13.0``
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

      mamba install bioconductor-msbackendmsp

   and update with::

      mamba update bioconductor-msbackendmsp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msbackendmsp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendmsp:<tag>

   (see `bioconductor-msbackendmsp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendmsp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmsp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmsp
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmsp| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp
.. _`bioconductor-msbackendmsp/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmsp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmsp";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmsp/README.html