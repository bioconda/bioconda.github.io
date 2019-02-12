:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eagle'
.. highlight: bash

eagle
=====

.. conda:recipe:: eagle
   :replaces_section_title:

   Eagle is a webtool for genome variants and snp analysis

   :homepage: https://bitbucket.org/christopherschroeder/eagle
   :license: MIT / MIT License
   :recipe: /`eagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle/meta.yaml>`_

   


.. conda:package:: eagle

   |downloads_eagle| |docker_eagle|

   :versions: 0.9.3.3-2, 0.9.3.3-0, 0.9.0-0
   
   :depends flask: 
   
   :depends h5py: 
   
   :depends numpy: 
   
   :depends pyliftover: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends pyvcf: 
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eagle

   and update with::

      conda update eagle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eagle:<tag>

   (see `eagle/tags`_ for valid values for ``<tag>``)


.. |downloads_eagle| image:: https://img.shields.io/conda/dn/bioconda/eagle.svg?style=flat
   :alt:   (downloads)
.. |docker_eagle| image:: https://quay.io/repository/biocontainers/eagle/status
   :target: https://quay.io/repository/biocontainers/eagle
.. _`eagle/tags`: https://quay.io/repository/biocontainers/eagle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eagle/README.html