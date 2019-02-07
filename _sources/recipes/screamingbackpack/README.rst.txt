.. title:: Package Recipe 'screamingbackpack'
.. highlight: bash


screamingbackpack
=================

.. conda:recipe:: screamingbackpack
   :replaces_section_title:

   ScreamingBackpack

   :homepage: http://pypi.python.org/pypi/ScreamingBackpack/
   :license: GPLv3
   :recipe: /`screamingbackpack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/screamingbackpack/meta.yaml>`_

   


.. conda:package:: screamingbackpack

   |downloads_screamingbackpack| |docker_screamingbackpack|

   :versions: 0.2.333

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_screamingbackpack|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install screamingbackpack

   and update with::

      conda update screamingbackpack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/screamingbackpack


.. |required_by_screamingbackpack| conda:required_by:: screamingbackpack
.. |downloads_screamingbackpack| image:: https://img.shields.io/conda/dn/bioconda/screamingbackpack.svg?style=flat
   :alt:   (downloads)
.. |docker_screamingbackpack| image:: https://quay.io/repository/biocontainers/screamingbackpack/status
   :target: https://quay.io/repository/biocontainers/screamingbackpack







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/screamingbackpack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/screamingbackpack/README.html

