:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mfassignr'
.. highlight: bash

r-mfassignr
===========

.. conda:recipe:: r-mfassignr
   :replaces_section_title:
   :noindex:

   The MFAssignR package was designed for multi\-element molecular formula \(MF\)
   assignment of ultrahigh resolution mass spectrometry measurements.
   A number of tools for internal mass recalibration\, MF assignment\, signal\-to\-noise evaluation\,
   and unambiguous formula selections are provided. 


   :homepage: https://github.com/RECETOX/MFAssignR
   :license: GPL-3.0-or-later
   :recipe: /`r-mfassignr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mfassignr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mfassignr/meta.yaml>`_

   


.. conda:package:: r-mfassignr

   |downloads_r-mfassignr| |docker_r-mfassignr|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-colorramps: ``>=2.3``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-gtools: ``>=3.9.5``
   :depends r-tidyr: ``>=0.8.1``
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

      mamba install r-mfassignr

   and update with::

      mamba update r-mfassignr

  To create a new environment, run::

      mamba create --name myenvname r-mfassignr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mfassignr:<tag>

   (see `r-mfassignr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mfassignr| image:: https://img.shields.io/conda/dn/bioconda/r-mfassignr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mfassignr
   :alt:   (downloads)
.. |docker_r-mfassignr| image:: https://quay.io/repository/biocontainers/r-mfassignr/status
   :target: https://quay.io/repository/biocontainers/r-mfassignr
.. _`r-mfassignr/tags`: https://quay.io/repository/biocontainers/r-mfassignr?tab=tags


.. raw:: html

    <script>
        var package = "r-mfassignr";
        var versions = ["1.1.1","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mfassignr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mfassignr/README.html