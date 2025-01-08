:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmgf'
.. highlight: bash

bioconductor-msbackendmgf
=========================

.. conda:recipe:: bioconductor-msbackendmgf
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for Mascot Generic Format \(mgf\) Files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendMgf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmgf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmgf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmgf/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and export of MS\/MS spectra data from Mascot Generic Format \(mgf\) files. Objects defined in this package are supposed to be used with the Spectra Bioconductor package. This package thus adds mgf file support to the Spectra package.


.. conda:package:: bioconductor-msbackendmgf

   |downloads_bioconductor-msbackendmgf| |docker_bioconductor-msbackendmgf|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-mscoreutils: ``>=1.18.0,<1.19.0``
   :depends bioconductor-protgenerics: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-spectra: ``>=1.16.0,<1.17.0``
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

      mamba install bioconductor-msbackendmgf

   and update with::

      mamba update bioconductor-msbackendmgf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msbackendmgf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendmgf:<tag>

   (see `bioconductor-msbackendmgf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendmgf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmgf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmgf
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmgf| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf
.. _`bioconductor-msbackendmgf/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmgf";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmgf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmgf/README.html