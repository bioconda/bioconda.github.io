.. title:: Package Recipe 'apoc'
.. highlight: bash


apoc
====

.. conda:recipe:: apoc
   :replaces_section_title:

   Large\-scale structural comparison of protein pockets

   :homepage: http://cssb.biology.gatech.edu/APoc
   :license: This software is freely available to ALL users.
   :recipe: /`apoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apoc/meta.yaml>`_

   


.. conda:package:: apoc

   |downloads_apoc| |docker_apoc|

   :versions: 1b16

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_apoc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install apoc

   and update with::

      conda update apoc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/apoc


.. |required_by_apoc| conda:required_by:: apoc
.. |downloads_apoc| image:: https://img.shields.io/conda/dn/bioconda/apoc.svg?style=flat
   :alt:   (downloads)
.. |docker_apoc| image:: https://quay.io/repository/biocontainers/apoc/status
   :target: https://quay.io/repository/biocontainers/apoc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apoc/README.html

