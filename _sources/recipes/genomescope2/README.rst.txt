:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomescope2'
.. highlight: bash

genomescope2
============

.. conda:recipe:: genomescope2
   :replaces_section_title:
   :noindex:

   Reference\-free profiling of polyploid genomes

   :homepage: https://github.com/tbenavi1/genomescope2.0
   :license: Apache License, Version 2.0 (Apache-2.0)
   :recipe: /`genomescope2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2/meta.yaml>`_

   


.. conda:package:: genomescope2

   |downloads_genomescope2| |docker_genomescope2|

   :versions:
      
      

      ``2.0-0``

      

   
   :depends python: ``>=3.2``
   :depends r-argparse: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-minpack.lm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomescope2

   and update with::

      conda update genomescope2

   or use the docker container::

      docker pull quay.io/biocontainers/genomescope2:<tag>

   (see `genomescope2/tags`_ for valid values for ``<tag>``)


.. |downloads_genomescope2| image:: https://img.shields.io/conda/dn/bioconda/genomescope2.svg?style=flat
   :target: https://anaconda.org/bioconda/genomescope2
   :alt:   (downloads)
.. |docker_genomescope2| image:: https://quay.io/repository/biocontainers/genomescope2/status
   :target: https://quay.io/repository/biocontainers/genomescope2
.. _`genomescope2/tags`: https://quay.io/repository/biocontainers/genomescope2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomescope2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomescope2/README.html