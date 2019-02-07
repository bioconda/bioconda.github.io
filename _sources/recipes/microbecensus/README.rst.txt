.. title:: Package Recipe 'microbecensus'
.. highlight: bash


microbecensus
=============

.. conda:recipe:: microbecensus
   :replaces_section_title:

   A command\-line tool for estimating average genome size from shotgun sequence data

   :homepage: https://github.com/snayfach/MicrobeCensus
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`microbecensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microbecensus/meta.yaml>`_

   


.. conda:package:: microbecensus

   |downloads_microbecensus| |docker_microbecensus|

   :versions: 1.1.1, 1.1.0

   :depends: :conda:package:`biopython`  :conda:package:`numpy`  :conda:package:`python` >=2.7,<3 

   :required~by: |required_by_microbecensus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install microbecensus

   and update with::

      conda update microbecensus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/microbecensus


.. |required_by_microbecensus| conda:required_by:: microbecensus
.. |downloads_microbecensus| image:: https://img.shields.io/conda/dn/bioconda/microbecensus.svg?style=flat
   :alt:   (downloads)
.. |docker_microbecensus| image:: https://quay.io/repository/biocontainers/microbecensus/status
   :target: https://quay.io/repository/biocontainers/microbecensus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microbecensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microbecensus/README.html

