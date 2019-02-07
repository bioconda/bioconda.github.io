.. title:: Package Recipe 'bioconductor-calib'
.. highlight: bash


bioconductor-calib
==================

.. conda:recipe:: bioconductor-calib
   :replaces_section_title:

   This package contains functions for normalizing spotted microarray data\, based on a physically motivated calibration model. The model parameters and error distributions are estimated from external control spikes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CALIB.html
   :license: LGPL
   :recipe: /`bioconductor-calib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-calib/meta.yaml>`_
   :links: biotools: :biotools:`calib`, doi: :doi:`10.1093/bioinformatics/btm159`

   


.. conda:package:: bioconductor-calib

   |downloads_bioconductor-calib| |docker_bioconductor-calib|

   :versions: 1.48.0, 1.46.0, 1.44.0, 1.42.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-calib|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-calib

   and update with::

      conda update bioconductor-calib

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-calib


.. |required_by_bioconductor-calib| conda:required_by:: bioconductor-calib
.. |downloads_bioconductor-calib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-calib.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-calib| image:: https://quay.io/repository/biocontainers/bioconductor-calib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-calib







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-calib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-calib/README.html

