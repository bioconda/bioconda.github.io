:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lcfit'
.. highlight: bash

lcfit
=====

.. conda:recipe:: lcfit
   :replaces_section_title:

   Likelihood curve fitting by nonlinear least squares.

   :homepage: https://github.com/matsengrp/lcfit
   :license: GPL / GPL-3.0
   :recipe: /`lcfit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lcfit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lcfit/meta.yaml>`_

   


.. conda:package:: lcfit

   |downloads_lcfit| |docker_lcfit|

   :versions: 0.5-3, 0.4-0
   
   :depends bpp-core: 
   :depends bpp-phyl: 
   :depends bpp-seq: 
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :depends nlopt: 
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lcfit

   and update with::

      conda update lcfit

   or use the docker container::

      docker pull quay.io/biocontainers/lcfit:<tag>

   (see `lcfit/tags`_ for valid values for ``<tag>``)


.. |downloads_lcfit| image:: https://img.shields.io/conda/dn/bioconda/lcfit.svg?style=flat
   :target: https://anaconda.org/bioconda/lcfit
   :alt:   (downloads)
.. |docker_lcfit| image:: https://quay.io/repository/biocontainers/lcfit/status
   :target: https://quay.io/repository/biocontainers/lcfit
.. _`lcfit/tags`: https://quay.io/repository/biocontainers/lcfit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lcfit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lcfit/README.html