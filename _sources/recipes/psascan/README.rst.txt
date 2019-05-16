:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psascan'
.. highlight: bash

psascan
=======

.. conda:recipe:: psascan
   :replaces_section_title:

   A parallel external memory suffix array construction algorithm

   :homepage: https://www.cs.helsinki.fi/group/pads/pSAscan.html
   :license: MIT
   :recipe: /`psascan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psascan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psascan/meta.yaml>`_

   


.. conda:package:: psascan

   |downloads_psascan| |docker_psascan|

   :versions: 0.1.0-0
   
   :depends libdivsufsort: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psascan

   and update with::

      conda update psascan

   or use the docker container::

      docker pull quay.io/biocontainers/psascan:<tag>

   (see `psascan/tags`_ for valid values for ``<tag>``)


.. |downloads_psascan| image:: https://img.shields.io/conda/dn/bioconda/psascan.svg?style=flat
   :target: https://anaconda.org/bioconda/psascan
   :alt:   (downloads)
.. |docker_psascan| image:: https://quay.io/repository/biocontainers/psascan/status
   :target: https://quay.io/repository/biocontainers/psascan
.. _`psascan/tags`: https://quay.io/repository/biocontainers/psascan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psascan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psascan/README.html