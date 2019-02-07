.. title:: Package Recipe 'netifaces'
.. highlight: bash


netifaces
=========

.. conda:recipe:: netifaces
   :replaces_section_title:

   

   :homepage: https://bitbucket.org/al45tair/netifaces
   :license: MIT
   :recipe: /`netifaces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netifaces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netifaces/meta.yaml>`_

   


.. conda:package:: netifaces

   |downloads_netifaces| |docker_netifaces|

   :versions: 0.10.4

   :depends: :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_netifaces|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install netifaces

   and update with::

      conda update netifaces

   or use the docker container::

      docker pull quay.io/repository/biocontainers/netifaces


.. |required_by_netifaces| conda:required_by:: netifaces
.. |downloads_netifaces| image:: https://img.shields.io/conda/dn/bioconda/netifaces.svg?style=flat
   :alt:   (downloads)
.. |docker_netifaces| image:: https://quay.io/repository/biocontainers/netifaces/status
   :target: https://quay.io/repository/biocontainers/netifaces







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netifaces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netifaces/README.html

