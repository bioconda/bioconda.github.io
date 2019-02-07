.. title:: Package Recipe 'odose'
.. highlight: bash


odose
=====

.. conda:recipe:: odose
   :replaces_section_title:

   Ortholog Direction of Selection Engine.

   :homepage: https://github.com/ODoSE/odose.nl
   :license: MIT
   :recipe: /`odose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odose/meta.yaml>`_

   


.. conda:package:: odose

   |downloads_odose| |docker_odose|

   :versions: 1.0

   :depends: :conda:package:`biopython` >=1.64 :conda:package:`matplotlib` >=1.4.2 :conda:package:`mysql-connector-python`  :conda:package:`numpy` >=1.9.1 :conda:package:`poster` >=0.8.1 :conda:package:`python` 2.7* :conda:package:`rpy2` >=2.8.5 

   :required~by: |required_by_odose|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install odose

   and update with::

      conda update odose

   or use the docker container::

      docker pull quay.io/repository/biocontainers/odose


.. |required_by_odose| conda:required_by:: odose
.. |downloads_odose| image:: https://img.shields.io/conda/dn/bioconda/odose.svg?style=flat
   :alt:   (downloads)
.. |docker_odose| image:: https://quay.io/repository/biocontainers/odose/status
   :target: https://quay.io/repository/biocontainers/odose







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odose/README.html

