:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moabs'
.. highlight: bash

moabs
=====

.. conda:recipe:: moabs
   :replaces_section_title:

   Methylation analysis on Bisulfite\-Sequencing reads

   :homepage: https://github.com/sunnyisgalaxy/moabs
   :license: MIT
   :recipe: /`moabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moabs/meta.yaml>`_

   


.. conda:package:: moabs

   |downloads_moabs| |docker_moabs|

   :versions: 1.3.9.3-0, 1.3.9.2-0, 1.3.9.0-0, 1.3.8.9-0, 1.3.8.8-0, 1.3.8.7-0, 1.3.8.6-1, 1.3.8.6-0, 1.3.8.5-0, 1.3.8.4-2, 1.3.8.4-1, 1.3.8.4-0, 1.3.8.2-0, 1.3.8.1-1, 1.3.8.1-0, 1.3.7.9-1, 1.3.7.9-0, 1.3.7.8-0, 1.3.7.7-0, 1.3.7.6-0, 1.3.7.5-0, 1.3.4.6-0, 1.3.4.5-1, 1.3.4.5-0, 1.3.4-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.5.0
   :depends libis: >=0.0.9
   :depends libstdcxx-ng: >=7.5.0
   :depends ncurses: >=6.1,<6.2.0a0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-config-simple: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends wget: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install moabs

   and update with::

      conda update moabs

   or use the docker container::

      docker pull quay.io/biocontainers/moabs:<tag>

   (see `moabs/tags`_ for valid values for ``<tag>``)


.. |downloads_moabs| image:: https://img.shields.io/conda/dn/bioconda/moabs.svg?style=flat
   :target: https://anaconda.org/bioconda/moabs
   :alt:   (downloads)
.. |docker_moabs| image:: https://quay.io/repository/biocontainers/moabs/status
   :target: https://quay.io/repository/biocontainers/moabs
.. _`moabs/tags`: https://quay.io/repository/biocontainers/moabs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moabs/README.html