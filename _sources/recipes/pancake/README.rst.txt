:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pancake'
.. highlight: bash

pancake
=======

.. conda:recipe:: pancake
   :replaces_section_title:
   :noindex:

   A Data Structure for Pangenomes \-\- Identification of Singletons and Core Regions Dependent on Pairwise Sequence Similarities

   :homepage: https://bitbucket.org/CorinnaErnst/pancake
   :license: MIT / MIT License
   :recipe: /`pancake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pancake/meta.yaml>`_

   


.. conda:package:: pancake

   |downloads_pancake| |docker_pancake|

   :versions:
      
      

      ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pancake

   and update with::

      conda update pancake

   or use the docker container::

      docker pull quay.io/biocontainers/pancake:<tag>

   (see `pancake/tags`_ for valid values for ``<tag>``)


.. |downloads_pancake| image:: https://img.shields.io/conda/dn/bioconda/pancake.svg?style=flat
   :target: https://anaconda.org/bioconda/pancake
   :alt:   (downloads)
.. |docker_pancake| image:: https://quay.io/repository/biocontainers/pancake/status
   :target: https://quay.io/repository/biocontainers/pancake
.. _`pancake/tags`: https://quay.io/repository/biocontainers/pancake?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pancake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pancake/README.html