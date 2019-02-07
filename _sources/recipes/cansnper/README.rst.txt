.. title:: Package Recipe 'cansnper'
.. highlight: bash


cansnper
========

.. conda:recipe:: cansnper
   :replaces_section_title:

   A hierarchical genotype classifier of clonal pathogens.

   :homepage: https://github.com/adrlar/CanSNPer/
   :license: GPLv3
   :recipe: /`cansnper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper/meta.yaml>`_

   


.. conda:package:: cansnper

   |downloads_cansnper| |docker_cansnper|

   :versions: 1.0.8

   :depends: :conda:package:`ete2`  :conda:package:`numpy`  :conda:package:`pyqt` 4.* :conda:package:`python` 2.7* 

   :required~by: |required_by_cansnper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cansnper

   and update with::

      conda update cansnper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cansnper


.. |required_by_cansnper| conda:required_by:: cansnper
.. |downloads_cansnper| image:: https://img.shields.io/conda/dn/bioconda/cansnper.svg?style=flat
   :alt:   (downloads)
.. |docker_cansnper| image:: https://quay.io/repository/biocontainers/cansnper/status
   :target: https://quay.io/repository/biocontainers/cansnper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansnper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansnper/README.html

