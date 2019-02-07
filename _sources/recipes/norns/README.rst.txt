.. title:: Package Recipe 'norns'
.. highlight: bash


norns
=====

.. conda:recipe:: norns
   :replaces_section_title:

   Simple yaml\-based config module

   :homepage: https://github.com/simonvh/norns
   :license: MIT / MIT License
   :recipe: /`norns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/norns/meta.yaml>`_

   


.. conda:package:: norns

   |downloads_norns| |docker_norns|

   :versions: 0.1.2

   :depends: :conda:package:`appdirs`  :conda:package:`nose`  :conda:package:`python` 2.7* :conda:package:`pyyaml`  

   :required~by: |required_by_norns|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install norns

   and update with::

      conda update norns

   or use the docker container::

      docker pull quay.io/repository/biocontainers/norns


.. |required_by_norns| conda:required_by:: norns
.. |downloads_norns| image:: https://img.shields.io/conda/dn/bioconda/norns.svg?style=flat
   :alt:   (downloads)
.. |docker_norns| image:: https://quay.io/repository/biocontainers/norns/status
   :target: https://quay.io/repository/biocontainers/norns







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/norns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/norns/README.html

