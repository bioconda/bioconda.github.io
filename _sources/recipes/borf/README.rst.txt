:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'borf'
.. highlight: bash

borf
====

.. conda:recipe:: borf
   :replaces_section_title:

   ORF predictions from .fa files

   :homepage: https://github.com/betsig/borf
   :license: MIT / MIT
   :recipe: /`borf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/borf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/borf/meta.yaml>`_

   


.. conda:package:: borf

   |downloads_borf| |docker_borf|

   :versions: 1.2-0
   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3
   :depends scikit-bio: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install borf

   and update with::

      conda update borf

   or use the docker container::

      docker pull quay.io/biocontainers/borf:<tag>

   (see `borf/tags`_ for valid values for ``<tag>``)


.. |downloads_borf| image:: https://img.shields.io/conda/dn/bioconda/borf.svg?style=flat
   :target: https://anaconda.org/bioconda/borf
   :alt:   (downloads)
.. |docker_borf| image:: https://quay.io/repository/biocontainers/borf/status
   :target: https://quay.io/repository/biocontainers/borf
.. _`borf/tags`: https://quay.io/repository/biocontainers/borf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/borf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/borf/README.html