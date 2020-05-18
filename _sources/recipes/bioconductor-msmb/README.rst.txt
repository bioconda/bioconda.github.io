:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmb'
.. highlight: bash

bioconductor-msmb
=================

.. conda:recipe:: bioconductor-msmb
   :replaces_section_title:

   Data sets for the book \'Modern Statistics for Biology\'

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/MSMB.html
   :license: LGPL
   :recipe: /`bioconductor-msmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmb/meta.yaml>`_

   Data sets for the book \'Modern Statistics for Modern Biology\'\, S.P. Holmes and W. Huber.


.. conda:package:: bioconductor-msmb

   |downloads_bioconductor-msmb| |docker_bioconductor-msmb|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.2.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msmb

   and update with::

      conda update bioconductor-msmb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msmb:<tag>

   (see `bioconductor-msmb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msmb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmb
   :alt:   (downloads)
.. |docker_bioconductor-msmb| image:: https://quay.io/repository/biocontainers/bioconductor-msmb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmb
.. _`bioconductor-msmb/tags`: https://quay.io/repository/biocontainers/bioconductor-msmb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmb/README.html