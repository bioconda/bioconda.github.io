.. title:: Package Recipe 'fastphylo'
.. highlight: bash


fastphylo
=========

.. conda:recipe:: fastphylo
   :replaces_section_title:

   Fastphylo is software project containing the implementations of the algorithms \"Fast Computation of Distance Estimators\" and \"Fast Neighbor Joining\".

   :homepage: https://github.com/arvestad/FastPhylo
   :license: MIT
   :recipe: /`fastphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastphylo/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-14-334`

   


.. conda:package:: fastphylo

   |downloads_fastphylo| |docker_fastphylo|

   :versions: 1.0.3

   :depends: :conda:package:`libxml2`  :conda:package:`openblas`  :conda:package:`openmpi`  

   :required~by: |required_by_fastphylo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastphylo

   and update with::

      conda update fastphylo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastphylo


.. |required_by_fastphylo| conda:required_by:: fastphylo
.. |downloads_fastphylo| image:: https://img.shields.io/conda/dn/bioconda/fastphylo.svg?style=flat
   :alt:   (downloads)
.. |docker_fastphylo| image:: https://quay.io/repository/biocontainers/fastphylo/status
   :target: https://quay.io/repository/biocontainers/fastphylo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastphylo/README.html

