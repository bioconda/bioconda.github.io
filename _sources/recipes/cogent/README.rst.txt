.. title:: Package Recipe 'cogent'
.. highlight: bash


cogent
======

.. conda:recipe:: cogent
   :replaces_section_title:

   COmparative GENomics Toolkit

   :homepage: http://www.pycogent.org
   :license: GNU General Public License (GPL)
   :recipe: /`cogent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogent/meta.yaml>`_

   


.. conda:package:: cogent

   |downloads_cogent| |docker_cogent|

   :versions: 1.9, 1.5.3

   :depends: :conda:package:`matplotlib` >=1.1.0 :conda:package:`mpi4py` >=1.0 :conda:package:`mysql-python` >=1.2.2 :conda:package:`numpy` >=1.3 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`sqlalchemy` >=0.5 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cogent|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cogent

   and update with::

      conda update cogent

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cogent


.. |required_by_cogent| conda:required_by:: cogent
.. |downloads_cogent| image:: https://img.shields.io/conda/dn/bioconda/cogent.svg?style=flat
   :alt:   (downloads)
.. |docker_cogent| image:: https://quay.io/repository/biocontainers/cogent/status
   :target: https://quay.io/repository/biocontainers/cogent







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogent/README.html

