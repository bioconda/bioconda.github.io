:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats'
.. highlight: bash

rmats
=====

.. conda:recipe:: rmats
   :replaces_section_title:

   MATS is a computational tool to detect differential alternative splicing events from RNA\-Seq data.

   :homepage: http://rnaseq-mats.sourceforge.net
   :license: Free for non-commercial use, see LICENSE file
   :recipe: /`rmats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats/meta.yaml>`_

   


.. conda:package:: rmats

   |downloads_rmats| |docker_rmats|

   :versions: 4.0.2-4, 4.0.2-3, 4.0.2-2, 4.0.2-1, 4.0.2-0, 3.2.5-2, 3.2.5-1, 3.2.5-0, 3.2.2beta-0
   
   :depends gsl: >=1.16,<1.17.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libgfortran: 
   :depends libgfortran-ng: >=7,<8.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :depends star: >=2.5
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rmats

   and update with::

      conda update rmats

   or use the docker container::

      docker pull quay.io/biocontainers/rmats:<tag>

   (see `rmats/tags`_ for valid values for ``<tag>``)


.. |downloads_rmats| image:: https://img.shields.io/conda/dn/bioconda/rmats.svg?style=flat
   :alt:   (downloads)
.. |docker_rmats| image:: https://quay.io/repository/biocontainers/rmats/status
   :target: https://quay.io/repository/biocontainers/rmats
.. _`rmats/tags`: https://quay.io/repository/biocontainers/rmats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats/README.html