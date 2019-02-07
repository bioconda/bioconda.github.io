.. title:: Package Recipe 'axiome'
.. highlight: bash


axiome
======

.. conda:recipe:: axiome
   :replaces_section_title:

   AXIOME2\: Automation Extension and Integration of Microbial Ecology

   :homepage: https://github.com/neufeld/AXIOME2
   :license: MIT / MIT License
   :recipe: /`axiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axiome/meta.yaml>`_

   


.. conda:package:: axiome

   |downloads_axiome| |docker_axiome|

   :versions: 2.0.4

   :depends: :conda:package:`npyscreen`  :conda:package:`python` 2.7* 

   :required~by: |required_by_axiome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install axiome

   and update with::

      conda update axiome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/axiome


.. |required_by_axiome| conda:required_by:: axiome
.. |downloads_axiome| image:: https://img.shields.io/conda/dn/bioconda/axiome.svg?style=flat
   :alt:   (downloads)
.. |docker_axiome| image:: https://quay.io/repository/biocontainers/axiome/status
   :target: https://quay.io/repository/biocontainers/axiome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/axiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/axiome/README.html

