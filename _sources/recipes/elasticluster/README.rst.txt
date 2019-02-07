.. title:: Package Recipe 'elasticluster'
.. highlight: bash


elasticluster
=============

.. conda:recipe:: elasticluster
   :replaces_section_title:

   Create\, manage and setup computing clusters hosted on a public or private cloud infrastructure.

   :homepage: https://github.com/gc3-uzh-ch/elasticluster
   :license: GPL
   :recipe: /`elasticluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/elasticluster/meta.yaml>`_

   


.. conda:package:: elasticluster

   |downloads_elasticluster| |docker_elasticluster|

   :versions: 0.1.3bcbio

   :depends: :conda:package:`ansible`  :conda:package:`azure`  :conda:package:`boto`  :conda:package:`configobj`  :conda:package:`google-api-python-client`  :conda:package:`oauth2client`  :conda:package:`paramiko`  :conda:package:`pycli`  :conda:package:`python` 2.7* :conda:package:`python-gflags`  :conda:package:`voluptuous`  

   :required~by: |required_by_elasticluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install elasticluster

   and update with::

      conda update elasticluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/elasticluster


.. |required_by_elasticluster| conda:required_by:: elasticluster
.. |downloads_elasticluster| image:: https://img.shields.io/conda/dn/bioconda/elasticluster.svg?style=flat
   :alt:   (downloads)
.. |docker_elasticluster| image:: https://quay.io/repository/biocontainers/elasticluster/status
   :target: https://quay.io/repository/biocontainers/elasticluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/elasticluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/elasticluster/README.html

