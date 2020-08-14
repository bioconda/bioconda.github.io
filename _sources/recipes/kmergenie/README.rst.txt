:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmergenie'
.. highlight: bash

kmergenie
=========

.. conda:recipe:: kmergenie
   :replaces_section_title:
   :noindex:

   KmerGenie estimates the best k\-mer length for genome de novo assembly

   :homepage: http://kmergenie.bx.psu.edu/
   :license: free software license
   :recipe: /`kmergenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmergenie/meta.yaml>`_
   :links: biotools: :biotools:`kmergenie`, doi: :doi:`10.1093/bioinformatics/btt310`

   


.. conda:package:: kmergenie

   |downloads_kmergenie| |docker_kmergenie|

   :versions:
      
      

      ``1.7016-5``,  ``1.7016-4``,  ``1.7016-3``,  ``1.7016-2``,  ``1.7016-1``,  ``1.7016-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmergenie

   and update with::

      conda update kmergenie

   or use the docker container::

      docker pull quay.io/biocontainers/kmergenie:<tag>

   (see `kmergenie/tags`_ for valid values for ``<tag>``)


.. |downloads_kmergenie| image:: https://img.shields.io/conda/dn/bioconda/kmergenie.svg?style=flat
   :target: https://anaconda.org/bioconda/kmergenie
   :alt:   (downloads)
.. |docker_kmergenie| image:: https://quay.io/repository/biocontainers/kmergenie/status
   :target: https://quay.io/repository/biocontainers/kmergenie
.. _`kmergenie/tags`: https://quay.io/repository/biocontainers/kmergenie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmergenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmergenie/README.html