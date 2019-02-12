:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnalien'
.. highlight: bash

rnalien
=======

.. conda:recipe:: rnalien
   :replaces_section_title:

   A tool for unsupervised construction of RNA family models

   :homepage: http://rna.tbi.univie.ac.at/rnalien/tool
   :license: GPL-3
   :recipe: /`rnalien <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalien/meta.yaml>`_
   :links: biotools: :biotools:`RNAlien`, doi: :doi:`10.1093/nar/gkw558`

   


.. conda:package:: rnalien

   |downloads_rnalien| |docker_rnalien|

   :versions: 1.3.7-5, 1.3.7-4, 1.3.7-3, 1.3.7-2, 1.3.7-1, 1.3.7-0, 1.3.6-0, 1.3.5-0, 1.3.4-0, 1.2.5-0
   
   :depends gmp: 5.1*
   
   :depends infernal: ==1.1.2
   
   :depends libgcc: 
   
   :depends locarna: ==1.9.1
   
   :depends openssl: 
   
   :depends perl: 5.22.0*
   
   :depends rnacode: ==0.3
   
   :depends rnaz: ==2.1
   
   :depends viennarna: ==2.3.3
   
   :depends zlib: 1.2.11*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnalien

   and update with::

      conda update rnalien

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnalien:<tag>

   (see `rnalien/tags`_ for valid values for ``<tag>``)


.. |downloads_rnalien| image:: https://img.shields.io/conda/dn/bioconda/rnalien.svg?style=flat
   :alt:   (downloads)
.. |docker_rnalien| image:: https://quay.io/repository/biocontainers/rnalien/status
   :target: https://quay.io/repository/biocontainers/rnalien
.. _`rnalien/tags`: https://quay.io/repository/biocontainers/rnalien?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnalien/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnalien/README.html