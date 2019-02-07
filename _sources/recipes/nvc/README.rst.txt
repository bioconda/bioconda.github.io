.. title:: Package Recipe 'nvc'
.. highlight: bash


nvc
===

.. conda:recipe:: nvc
   :replaces_section_title:

   The Naive Variant Caller

   :homepage: https://github.com/blankenberg/nvc
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`nvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nvc/meta.yaml>`_

   


.. conda:package:: nvc

   |downloads_nvc| |docker_nvc|

   :versions: 0.0.4, 0.0.3

   :depends: :conda:package:`numpy`  :conda:package:`pybamparser` ==0.0.3 :conda:package:`pybamtools` ==0.0.4 :conda:package:`python` 2.7* 

   :required~by: |required_by_nvc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nvc

   and update with::

      conda update nvc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nvc


.. |required_by_nvc| conda:required_by:: nvc
.. |downloads_nvc| image:: https://img.shields.io/conda/dn/bioconda/nvc.svg?style=flat
   :alt:   (downloads)
.. |docker_nvc| image:: https://quay.io/repository/biocontainers/nvc/status
   :target: https://quay.io/repository/biocontainers/nvc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nvc/README.html

