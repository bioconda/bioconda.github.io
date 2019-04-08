:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathogist'
.. highlight: bash

pathogist
=========

.. conda:recipe:: pathogist
   :replaces_section_title:

   Calibrated multi\-criterion genomic analysis for public health microbiology

   :homepage: https://github.com/WGS-TB/PathOGiST
   :license: GPL-3.0
   :recipe: /`pathogist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathogist/meta.yaml>`_

   


.. conda:package:: pathogist

   |downloads_pathogist| |docker_pathogist|

   :versions: 0.3.1-0, 0.3-0, 0.2.3-0
   
   :depends coincbc: >=2.9.9
   :depends khmer: 
   :depends kwip: 
   :depends matplotlib: 
   :depends mentalist: 
   :depends networkx: 
   :depends numpy: >=1.15.1
   :depends pandas: >=0.23.4
   :depends prince: 
   :depends pulp: >=1.6.8
   :depends python: 
   :depends pyyaml: >=3.13
   :depends scikit-learn: >=0.19.1
   :depends scipy: >=1.1.0
   :depends snippy: 3.2
   :depends spotyping3: 
   :depends vcflib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathogist

   and update with::

      conda update pathogist

   or use the docker container::

      docker pull quay.io/biocontainers/pathogist:<tag>

   (see `pathogist/tags`_ for valid values for ``<tag>``)


.. |downloads_pathogist| image:: https://img.shields.io/conda/dn/bioconda/pathogist.svg?style=flat
   :alt:   (downloads)
.. |docker_pathogist| image:: https://quay.io/repository/biocontainers/pathogist/status
   :target: https://quay.io/repository/biocontainers/pathogist
.. _`pathogist/tags`: https://quay.io/repository/biocontainers/pathogist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathogist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathogist/README.html