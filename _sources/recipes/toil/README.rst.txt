:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toil'
.. highlight: bash

toil
====

.. conda:recipe:: toil
   :replaces_section_title:

   A scalable\, efficient\, cross\-platform and easy\-to\-use workflow engine in pure Python

   :homepage: https://github.com/BD2KGenomics/toil
   :license: Apache 2.0
   :recipe: /`toil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toil/meta.yaml>`_

   


.. conda:package:: toil

   |downloads_toil| |docker_toil|

   :versions: 3.14.0-2, 3.14.0-1, 3.14.0-0, 3.13.0a1-0, 3.11.0-1, 3.11.0-0, 3.11.0a1-1, 3.11.0a1-0, 3.10.0-0, 3.10.0a1-1, 3.10.0a1-0, 3.9.0a1-0, 3.8.0a1-1, 3.8.0a1-0, 3.7.0a-1, 3.7.0a-0, 3.6.0-0, 3.5.0a1-3, 3.5.0a1-2, 3.5.0a1-1, 3.5.0a1-0, 3.4.0a1-3, 3.4.0a1-2, 3.4.0a1-1, 3.4.0a1-0, 3.3.0a1-0, 3.2.0a2-2, 3.2.0a2-0
   
   :depends azure: 
   
   :depends bd2k-python-lib: 1.14a1.dev37
   
   :depends boto: >=2.38.0
   
   :depends cachecontrol: >=0.11.7,<0.12
   
   :depends cgcloud-lib: 
   
   :depends cwltool: 1.0.20180130110340
   
   :depends dill: 
   
   :depends docker-py: >=2.5.1
   
   :depends future: 
   
   :depends futures: 
   
   :depends galaxy-lib: >=17.9.3
   
   :depends gcs-oauth2-boto-plugin: 1.9
   
   :depends mistune: >=0.7.3,<0.8
   
   :depends psutil: 
   
   :depends pynacl: 1.1.2
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends rdflib: >=4.2.2
   
   :depends rdflib-jsonld: >=0.3.0
   
   :depends requests: >=2.18.4
   
   :depends ruamel.yaml: >=0.12.4,<0.15
   
   :depends six: 
   
   :depends typing: >=3.5.3,<3.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toil

   and update with::

      conda update toil

   or use the docker container::

      docker pull quay.io/repository/biocontainers/toil:<tag>

   (see `toil/tags`_ for valid values for ``<tag>``)


.. |downloads_toil| image:: https://img.shields.io/conda/dn/bioconda/toil.svg?style=flat
   :alt:   (downloads)
.. |docker_toil| image:: https://quay.io/repository/biocontainers/toil/status
   :target: https://quay.io/repository/biocontainers/toil
.. _`toil/tags`: https://quay.io/repository/biocontainers/toil?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toil/README.html