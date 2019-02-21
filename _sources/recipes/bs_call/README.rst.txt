:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bs_call'
.. highlight: bash

bs_call
=======

.. conda:recipe:: bs_call
   :replaces_section_title:

   DNA methylation and variant Caller for Bisulfite Sequencing Data.

   :homepage: https://github.com/heathsc/bs_call
   :license: GPL-3.0
   :recipe: /`bs_call <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs_call>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs_call/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: bs_call

   |downloads_bs_call| |docker_bs_call|

   :versions: 2.02-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends openmp: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bs_call

   and update with::

      conda update bs_call

   or use the docker container::

      docker pull quay.io/biocontainers/bs_call:<tag>

   (see `bs_call/tags`_ for valid values for ``<tag>``)


.. |downloads_bs_call| image:: https://img.shields.io/conda/dn/bioconda/bs_call.svg?style=flat
   :alt:   (downloads)
.. |docker_bs_call| image:: https://quay.io/repository/biocontainers/bs_call/status
   :target: https://quay.io/repository/biocontainers/bs_call
.. _`bs_call/tags`: https://quay.io/repository/biocontainers/bs_call?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bs_call/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bs_call/README.html