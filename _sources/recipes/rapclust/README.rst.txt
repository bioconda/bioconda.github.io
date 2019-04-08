:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapclust'
.. highlight: bash

rapclust
========

.. conda:recipe:: rapclust
   :replaces_section_title:

   Accurate\, Fast and Lightweight Clustering of de novo Transcriptomes using Fragment Equivalence Classes

   :homepage: https://github.com/COMBINE-lab/RapClust
   :license: BSD / BSD with attribution
   :recipe: /`rapclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapclust/meta.yaml>`_

   


.. conda:package:: rapclust

   |downloads_rapclust| |docker_rapclust|

   :versions: 0.1.2-1, 0.1.2-0, 0.1.1-0
   
   :depends click: 
   :depends coloredlogs: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapclust

   and update with::

      conda update rapclust

   or use the docker container::

      docker pull quay.io/biocontainers/rapclust:<tag>

   (see `rapclust/tags`_ for valid values for ``<tag>``)


.. |downloads_rapclust| image:: https://img.shields.io/conda/dn/bioconda/rapclust.svg?style=flat
   :alt:   (downloads)
.. |docker_rapclust| image:: https://quay.io/repository/biocontainers/rapclust/status
   :target: https://quay.io/repository/biocontainers/rapclust
.. _`rapclust/tags`: https://quay.io/repository/biocontainers/rapclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapclust/README.html