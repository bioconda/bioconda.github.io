:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yamda'
.. highlight: bash

yamda
=====

.. conda:recipe:: yamda
   :replaces_section_title:

   A highly scalable GPU\-accelerated de novo motif discovery software package

   :homepage: https://github.com/daquang/YAMDA
   :license: MIT
   :recipe: /`yamda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yamda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yamda/meta.yaml>`_
   :links: biotools: :biotools:`yamda`

   


.. conda:package:: yamda

   |downloads_yamda| |docker_yamda|

   :versions: 0.1.00e9c9d-0
   
   :depends bedtools: 
   :depends biopython: 
   :depends numpy: 
   :depends pyfaidx: 
   :depends python: >=3
   :depends pytorch: 
   :depends scipy: 
   :depends torchvision: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yamda

   and update with::

      conda update yamda

   or use the docker container::

      docker pull quay.io/biocontainers/yamda:<tag>

   (see `yamda/tags`_ for valid values for ``<tag>``)


.. |downloads_yamda| image:: https://img.shields.io/conda/dn/bioconda/yamda.svg?style=flat
   :target: https://anaconda.org/bioconda/yamda
   :alt:   (downloads)
.. |docker_yamda| image:: https://quay.io/repository/biocontainers/yamda/status
   :target: https://quay.io/repository/biocontainers/yamda
.. _`yamda/tags`: https://quay.io/repository/biocontainers/yamda?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yamda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yamda/README.html