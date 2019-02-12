:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gretel'
.. highlight: bash

gretel
======

.. conda:recipe:: gretel
   :replaces_section_title:

   An algorithm for recovering haplotypes from metagenomes

   :homepage: https://github.com/SamStudio8/gretel
   :license: MIT
   :recipe: /`gretel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gretel/meta.yaml>`_

   


.. conda:package:: gretel

   |downloads_gretel| |docker_gretel|

   :versions: 0.0.90-1, 0.0.90-0, 0.0.81-0
   
   :depends hanselx: 
   
   :depends numpy: 
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyvcf: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gretel

   and update with::

      conda update gretel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gretel:<tag>

   (see `gretel/tags`_ for valid values for ``<tag>``)


.. |downloads_gretel| image:: https://img.shields.io/conda/dn/bioconda/gretel.svg?style=flat
   :alt:   (downloads)
.. |docker_gretel| image:: https://quay.io/repository/biocontainers/gretel/status
   :target: https://quay.io/repository/biocontainers/gretel
.. _`gretel/tags`: https://quay.io/repository/biocontainers/gretel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gretel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gretel/README.html