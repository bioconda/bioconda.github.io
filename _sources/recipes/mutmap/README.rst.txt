:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutmap'
.. highlight: bash

mutmap
======

.. conda:recipe:: mutmap
   :replaces_section_title:

   MutMap\: pipeline to identify causative mutations responsible for a phenotype

   :homepage: https://github.com/YuSugihara/MutMap
   :license: GPL / GPL-3.0-or-later
   :recipe: /`mutmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutmap/meta.yaml>`_
   :links: biotools: :biotools:`mutmap`, doi: :doi:`10.1038/nbt.2095`

   


.. conda:package:: mutmap

   |downloads_mutmap| |docker_mutmap|

   :versions: 2.0.9-0, 2.0.8-0, 2.0.7-0, 2.0.6-0, 2.0.5-0
   
   :depends bcftools: >=1.7
   :depends bwa: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.5
   :depends samtools: >=1.7
   :depends seaborn: 
   :depends snpeff: 
   :depends tabix: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mutmap

   and update with::

      conda update mutmap

   or use the docker container::

      docker pull quay.io/biocontainers/mutmap:<tag>

   (see `mutmap/tags`_ for valid values for ``<tag>``)


.. |downloads_mutmap| image:: https://img.shields.io/conda/dn/bioconda/mutmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mutmap
   :alt:   (downloads)
.. |docker_mutmap| image:: https://quay.io/repository/biocontainers/mutmap/status
   :target: https://quay.io/repository/biocontainers/mutmap
.. _`mutmap/tags`: https://quay.io/repository/biocontainers/mutmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutmap/README.html