:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paste-bio'
.. highlight: bash

paste-bio
=========

.. conda:recipe:: paste-bio
   :replaces_section_title:
   :noindex:

   A computational method to align and integrate spatial transcriptomics experiments.

   :homepage: https://github.com/raphael-group/paste
   :license: BSD / BSD
   :recipe: /`paste-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paste-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paste-bio/meta.yaml>`_

   


.. conda:package:: paste-bio

   |downloads_paste-bio| |docker_paste-bio|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends pandas: 
   :depends pot: 
   :depends python: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paste-bio

   and update with::

      conda update paste-bio

   or use the docker container::

      docker pull quay.io/biocontainers/paste-bio:<tag>

   (see `paste-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_paste-bio| image:: https://img.shields.io/conda/dn/bioconda/paste-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/paste-bio
   :alt:   (downloads)
.. |docker_paste-bio| image:: https://quay.io/repository/biocontainers/paste-bio/status
   :target: https://quay.io/repository/biocontainers/paste-bio
.. _`paste-bio/tags`: https://quay.io/repository/biocontainers/paste-bio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paste-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paste-bio/README.html