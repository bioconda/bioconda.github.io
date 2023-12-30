:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-interpretmsspectrum'
.. highlight: bash

r-interpretmsspectrum
=====================

.. conda:recipe:: r-interpretmsspectrum
   :replaces_section_title:
   :noindex:

   Annotate and interpret deconvoluted mass spectra \(mass\*intensity pairs\) from high resolution mass spectrometry devices.

   :homepage: http://dx.doi.org/10.1021/acs.analchem.6b02743
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-interpretmsspectrum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-interpretmsspectrum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-interpretmsspectrum/meta.yaml>`_

   


.. conda:package:: r-interpretmsspectrum

   |downloads_r-interpretmsspectrum| |docker_r-interpretmsspectrum|

   :versions:
      
      

      ``1.3.3-1``,  ``1.3.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends bioconductor-rdisop: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-envipat: 
   :depends r-plyr: 
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

      mamba install r-interpretmsspectrum

   and update with::

      mamba update r-interpretmsspectrum

  To create a new environment, run::

      mamba create --name myenvname r-interpretmsspectrum

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-interpretmsspectrum:<tag>

   (see `r-interpretmsspectrum/tags`_ for valid values for ``<tag>``)


.. |downloads_r-interpretmsspectrum| image:: https://img.shields.io/conda/dn/bioconda/r-interpretmsspectrum.svg?style=flat
   :target: https://anaconda.org/bioconda/r-interpretmsspectrum
   :alt:   (downloads)
.. |docker_r-interpretmsspectrum| image:: https://quay.io/repository/biocontainers/r-interpretmsspectrum/status
   :target: https://quay.io/repository/biocontainers/r-interpretmsspectrum
.. _`r-interpretmsspectrum/tags`: https://quay.io/repository/biocontainers/r-interpretmsspectrum?tab=tags


.. raw:: html

    <script>
        var package = "r-interpretmsspectrum";
        var versions = ["1.3.3","1.3.3","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-interpretmsspectrum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-interpretmsspectrum/README.html