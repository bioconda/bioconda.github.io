:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphprot'
.. highlight: bash

graphprot
=========

.. conda:recipe:: graphprot
   :replaces_section_title:

   GraphProt is a tool for modelling binding preferences of RNA\-binding proteins from high\-throughput experiments such as CLIP\-seq and RNAcompete.

   :homepage: https://github.com/dmaticzka/graphprot
   :license: MIT
   :recipe: /`graphprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphprot/meta.yaml>`_

   


.. conda:package:: graphprot

   |downloads_graphprot| |docker_graphprot|

   :versions: 1.1.7-4, 1.1.7-2, 1.1.7-1, 1.1.7-0, 1.1.6-0
   
   :depends coreutils: 
   
   :depends curl: >=7.61.0,<8.0a0
   
   :depends gawk: 
   
   :depends libstdcxx-ng: >=4.9
   
   :depends libsvm: >=3.21,<3.22.0a0
   
   :depends make: 
   
   :depends openmp: 
   
   :depends perl-getopt-long: 
   
   :depends r-plyr: 
   
   :depends r-prroc: 
   
   :depends rnashapes: <3
   
   :depends weblogo: >=3
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphprot

   and update with::

      conda update graphprot

   or use the docker container::

      docker pull quay.io/biocontainers/graphprot:<tag>

   (see `graphprot/tags`_ for valid values for ``<tag>``)


.. |downloads_graphprot| image:: https://img.shields.io/conda/dn/bioconda/graphprot.svg?style=flat
   :alt:   (downloads)
.. |docker_graphprot| image:: https://quay.io/repository/biocontainers/graphprot/status
   :target: https://quay.io/repository/biocontainers/graphprot
.. _`graphprot/tags`: https://quay.io/repository/biocontainers/graphprot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphprot/README.html