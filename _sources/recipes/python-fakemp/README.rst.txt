.. title:: Package Recipe 'python-fakemp'
.. highlight: bash


python-fakemp
=============

.. conda:recipe:: python-fakemp
   :replaces_section_title:

   Fake multiprocessing pool objects

   :homepage: https://github.com/nlhepler/fakemp
   :license: GPL-3
   :recipe: /`python-fakemp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-fakemp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-fakemp/meta.yaml>`_

   


.. conda:package:: python-fakemp

   |downloads_python-fakemp| |docker_python-fakemp|

   :versions: 0.9.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_python-fakemp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-fakemp

   and update with::

      conda update python-fakemp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-fakemp


.. |required_by_python-fakemp| conda:required_by:: python-fakemp
.. |downloads_python-fakemp| image:: https://img.shields.io/conda/dn/bioconda/python-fakemp.svg?style=flat
   :alt:   (downloads)
.. |docker_python-fakemp| image:: https://quay.io/repository/biocontainers/python-fakemp/status
   :target: https://quay.io/repository/biocontainers/python-fakemp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-fakemp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-fakemp/README.html

