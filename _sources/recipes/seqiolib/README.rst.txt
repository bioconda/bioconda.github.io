:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqiolib'
.. highlight: bash

seqiolib
========

.. conda:recipe:: seqiolib
   :replaces_section_title:
   :noindex:

   Library to read\, write sequence\, variants\, regions to use them for training of machine learning algorithms.

   :homepage: https://github.com/visze/seqiolib
   :license: MIT / MIT
   :recipe: /`seqiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqiolib/meta.yaml>`_

   


.. conda:package:: seqiolib

   |downloads_seqiolib| |docker_seqiolib|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends numpy: 
   :depends pyfaidx: 
   :depends python: ``>=3``
   :depends tensorflow: ``2.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqiolib

   and update with::

      conda update seqiolib

   or use the docker container::

      docker pull quay.io/biocontainers/seqiolib:<tag>

   (see `seqiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_seqiolib| image:: https://img.shields.io/conda/dn/bioconda/seqiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/seqiolib
   :alt:   (downloads)
.. |docker_seqiolib| image:: https://quay.io/repository/biocontainers/seqiolib/status
   :target: https://quay.io/repository/biocontainers/seqiolib
.. _`seqiolib/tags`: https://quay.io/repository/biocontainers/seqiolib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqiolib/README.html