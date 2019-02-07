.. title:: Package Recipe 'python-omero'
.. highlight: bash


python-omero
============

.. conda:recipe:: python-omero
   :replaces_section_title:

   Client library offering helper methods to access an OMERO server.

   :homepage: https://www.openmicroscopy.org/
   :license: GPL 2
   :recipe: /`python-omero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-omero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-omero/meta.yaml>`_

   


.. conda:package:: python-omero

   |downloads_python-omero| |docker_python-omero|

   :versions: 5.4.10, 5.4.9, 5.4.8, 5.4.7, 5.4.6, 5.4.5, 5.4.4, 5.4.3, 5.4.2, 5.4.1, 5.4.0, 5.3.3, 5.3.2, 5.3.1, 5.3.0, 5.2.8, 5.2.7

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`zeroc-ice` >3.5,<3.7 

   :required~by: |required_by_python-omero|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-omero

   and update with::

      conda update python-omero

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-omero


.. |required_by_python-omero| conda:required_by:: python-omero
.. |downloads_python-omero| image:: https://img.shields.io/conda/dn/bioconda/python-omero.svg?style=flat
   :alt:   (downloads)
.. |docker_python-omero| image:: https://quay.io/repository/biocontainers/python-omero/status
   :target: https://quay.io/repository/biocontainers/python-omero







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-omero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-omero/README.html

