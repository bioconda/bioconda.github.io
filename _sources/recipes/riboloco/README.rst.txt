:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboloco'
.. highlight: bash

riboloco
========

.. conda:recipe:: riboloco
   :replaces_section_title:
   :noindex:

   Riboseq analysis

   :homepage: https://github.com/Delayed-Gitification/riboloco.git
   :license: MIT / MIT
   :recipe: /`riboloco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboloco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboloco/meta.yaml>`_

   


.. conda:package:: riboloco

   |downloads_riboloco| |docker_riboloco|

   :versions:
      
      

      ``0.3.9-0``

      

   
   :depends gffutils: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install riboloco

   and update with::

      conda update riboloco

   or use the docker container::

      docker pull quay.io/biocontainers/riboloco:<tag>

   (see `riboloco/tags`_ for valid values for ``<tag>``)


.. |downloads_riboloco| image:: https://img.shields.io/conda/dn/bioconda/riboloco.svg?style=flat
   :target: https://anaconda.org/bioconda/riboloco
   :alt:   (downloads)
.. |docker_riboloco| image:: https://quay.io/repository/biocontainers/riboloco/status
   :target: https://quay.io/repository/biocontainers/riboloco
.. _`riboloco/tags`: https://quay.io/repository/biocontainers/riboloco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboloco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboloco/README.html