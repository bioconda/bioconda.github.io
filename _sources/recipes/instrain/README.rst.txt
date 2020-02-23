:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'instrain'
.. highlight: bash

instrain
========

.. conda:recipe:: instrain
   :replaces_section_title:

   Calculation of strain\-level metrics

   :homepage: https://github.com/MrOlm/inStrain
   :license: MIT / MIT
   :recipe: /`instrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain/meta.yaml>`_

   


.. conda:package:: instrain

   |downloads_instrain| |docker_instrain|

   :versions: 1.2.3-0, 1.2.2-0
   
   :depends biopython: 
   :depends drep: 
   :depends h5py: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: >=0.25
   :depends psutil: 
   :depends pysam: 
   :depends pytest: 
   :depends python: >=3.4
   :depends scikit-learn: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install instrain

   and update with::

      conda update instrain

   or use the docker container::

      docker pull quay.io/biocontainers/instrain:<tag>

   (see `instrain/tags`_ for valid values for ``<tag>``)


.. |downloads_instrain| image:: https://img.shields.io/conda/dn/bioconda/instrain.svg?style=flat
   :target: https://anaconda.org/bioconda/instrain
   :alt:   (downloads)
.. |docker_instrain| image:: https://quay.io/repository/biocontainers/instrain/status
   :target: https://quay.io/repository/biocontainers/instrain
.. _`instrain/tags`: https://quay.io/repository/biocontainers/instrain?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/instrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/instrain/README.html