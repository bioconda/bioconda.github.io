.. title:: Package Recipe 'pyalveo'
.. highlight: bash


pyalveo
=======

.. conda:recipe:: pyalveo
   :replaces_section_title:

   A Python library for interfacing with the Alveo API

   :homepage: https://github.com/Alveo/pyalveo
   :license: BSD
   :recipe: /`pyalveo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyalveo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyalveo/meta.yaml>`_

   


.. conda:package:: pyalveo

   |downloads_pyalveo| |docker_pyalveo|

   :versions: 1.0.3, 0.7, 0.6, 0.5

   :depends: :conda:package:`python` 2.7* :conda:package:`python-dateutil`  :conda:package:`requests`  :conda:package:`requests-oauthlib`  

   :required~by: |required_by_pyalveo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyalveo

   and update with::

      conda update pyalveo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pyalveo


.. |required_by_pyalveo| conda:required_by:: pyalveo
.. |downloads_pyalveo| image:: https://img.shields.io/conda/dn/bioconda/pyalveo.svg?style=flat
   :alt:   (downloads)
.. |docker_pyalveo| image:: https://quay.io/repository/biocontainers/pyalveo/status
   :target: https://quay.io/repository/biocontainers/pyalveo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyalveo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyalveo/README.html

