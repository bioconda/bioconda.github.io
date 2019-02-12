:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drep'
.. highlight: bash

drep
====

.. conda:recipe:: drep
   :replaces_section_title:

   De\-replication of microbial genomes assembled from multiple samples

   :homepage: https://github.com/MrOlm/drep
   :license: MIT / MIT
   :recipe: /`drep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drep/meta.yaml>`_

   


.. conda:package:: drep

   |downloads_drep| |docker_drep|

   :versions: 2.2.3-1, 2.2.3-0, 2.0.5-2, 2.0.5-0
   
   :depends biopython: 
   
   :depends centrifuge: 
   
   :depends checkm-genome: 
   
   :depends mash: 
   
   :depends matplotlib: 
   
   :depends mummer: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends prodigal: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scikit-learn: 
   
   :depends seaborn: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drep

   and update with::

      conda update drep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/drep:<tag>

   (see `drep/tags`_ for valid values for ``<tag>``)


.. |downloads_drep| image:: https://img.shields.io/conda/dn/bioconda/drep.svg?style=flat
   :alt:   (downloads)
.. |docker_drep| image:: https://quay.io/repository/biocontainers/drep/status
   :target: https://quay.io/repository/biocontainers/drep
.. _`drep/tags`: https://quay.io/repository/biocontainers/drep?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drep/README.html