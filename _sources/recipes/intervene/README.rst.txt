:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intervene'
.. highlight: bash

intervene
=========

.. conda:recipe:: intervene
   :replaces_section_title:

   A tool for intersection of multiple gene or genomic region sets and visualization as venn diagrams\, UpSet plots or pariwaise heatmaps

   :homepage: https://github.com/asntech/intervene
   :license: MIT / MIT License
   :recipe: /`intervene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervene/meta.yaml>`_
   :links: biotools: :biotools:`Intervene`, doi: :doi:`10.1186/s12859-017-1708-7`

   


.. conda:package:: intervene

   |downloads_intervene| |docker_intervene|

   :versions: 0.6.4-2, 0.6.4-1, 0.6.4-0, 0.6.2-0, 0.5.9-0, 0.5.8-0
   
   :depends bedtools: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: <1
   :depends pybedtools: 
   :depends python: 
   :depends r-base: 
   :depends r-cairo: 
   :depends r-corrplot: 
   :depends r-upsetr: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intervene

   and update with::

      conda update intervene

   or use the docker container::

      docker pull quay.io/biocontainers/intervene:<tag>

   (see `intervene/tags`_ for valid values for ``<tag>``)


.. |downloads_intervene| image:: https://img.shields.io/conda/dn/bioconda/intervene.svg?style=flat
   :target: https://anaconda.org/bioconda/intervene
   :alt:   (downloads)
.. |docker_intervene| image:: https://quay.io/repository/biocontainers/intervene/status
   :target: https://quay.io/repository/biocontainers/intervene
.. _`intervene/tags`: https://quay.io/repository/biocontainers/intervene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervene/README.html