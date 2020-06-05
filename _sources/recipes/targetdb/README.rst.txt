:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targetdb'
.. highlight: bash

targetdb
========

.. conda:recipe:: targetdb
   :replaces_section_title:
   :noindex:

   Package with an application to generate report on potential drug targets

   :homepage: https://github.com/sdecesco/targetDB
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`targetdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targetdb/meta.yaml>`_

   


.. conda:package:: targetdb

   |downloads_targetdb| |docker_targetdb|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends fpocket: 
   :depends intermine: 
   :depends matplotlib-base: 
   :depends mysqlclient: 
   :depends numpy: 
   :depends opencv: 
   :depends opentargets: 
   :depends pandas: ``>=0.25.3``
   :depends python: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install targetdb

   and update with::

      conda update targetdb

   or use the docker container::

      docker pull quay.io/biocontainers/targetdb:<tag>

   (see `targetdb/tags`_ for valid values for ``<tag>``)


.. |downloads_targetdb| image:: https://img.shields.io/conda/dn/bioconda/targetdb.svg?style=flat
   :target: https://anaconda.org/bioconda/targetdb
   :alt:   (downloads)
.. |docker_targetdb| image:: https://quay.io/repository/biocontainers/targetdb/status
   :target: https://quay.io/repository/biocontainers/targetdb
.. _`targetdb/tags`: https://quay.io/repository/biocontainers/targetdb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targetdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targetdb/README.html