.. title:: Package Recipe 'nose-capturestderr'
.. highlight: bash


nose-capturestderr
==================

.. conda:recipe:: nose-capturestderr
   :replaces_section_title:

   Nose plugin for capturing stderr.

   :homepage: http://github.com/sio2project/nose-capturestderr
   :license: GPL
   :recipe: /`nose-capturestderr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nose-capturestderr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nose-capturestderr/meta.yaml>`_

   


.. conda:package:: nose-capturestderr

   |downloads_nose-capturestderr| |docker_nose-capturestderr|

   :versions: 1.2, 1.0

   :depends: :conda:package:`nose` >=0.11.1 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`setuptools`  

   :required~by: |required_by_nose-capturestderr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nose-capturestderr

   and update with::

      conda update nose-capturestderr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nose-capturestderr


.. |required_by_nose-capturestderr| conda:required_by:: nose-capturestderr
.. |downloads_nose-capturestderr| image:: https://img.shields.io/conda/dn/bioconda/nose-capturestderr.svg?style=flat
   :alt:   (downloads)
.. |docker_nose-capturestderr| image:: https://quay.io/repository/biocontainers/nose-capturestderr/status
   :target: https://quay.io/repository/biocontainers/nose-capturestderr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nose-capturestderr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nose-capturestderr/README.html

