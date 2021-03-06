:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylobayes-mpi'
.. highlight: bash

phylobayes-mpi
==============

.. conda:recipe:: phylobayes-mpi
   :replaces_section_title:
   :noindex:

   A Bayesian software for phylogentic reconstrunction using mixture models

   :homepage: https://github.com/bayesiancook/pbmpi
   :license: GPL2
   :recipe: /`phylobayes-mpi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylobayes-mpi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylobayes-mpi/meta.yaml>`_

   


.. conda:package:: phylobayes-mpi

   |downloads_phylobayes-mpi| |docker_phylobayes-mpi|

   :versions:
      
      

      ``1.8c-1``,  ``1.8c-0``,  ``1.8b-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmpi: ``>=4.1.0,<5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylobayes-mpi

   and update with::

      conda update phylobayes-mpi

   or use the docker container::

      docker pull quay.io/biocontainers/phylobayes-mpi:<tag>

   (see `phylobayes-mpi/tags`_ for valid values for ``<tag>``)


.. |downloads_phylobayes-mpi| image:: https://img.shields.io/conda/dn/bioconda/phylobayes-mpi.svg?style=flat
   :target: https://anaconda.org/bioconda/phylobayes-mpi
   :alt:   (downloads)
.. |docker_phylobayes-mpi| image:: https://quay.io/repository/biocontainers/phylobayes-mpi/status
   :target: https://quay.io/repository/biocontainers/phylobayes-mpi
.. _`phylobayes-mpi/tags`: https://quay.io/repository/biocontainers/phylobayes-mpi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylobayes-mpi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylobayes-mpi/README.html