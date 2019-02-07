.. title:: Package Recipe 'simlord'
.. highlight: bash


simlord
=======

.. conda:recipe:: simlord
   :replaces_section_title:

   SimLoRD is a read simulator for long reads from third generation sequencing. Currently\, it supports the Pacific Biosciences SMRT error model.

   :homepage: https://bitbucket.org/genomeinformatics/simlord/
   :license: MIT License
   :recipe: /`simlord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simlord/meta.yaml>`_

   


.. conda:package:: simlord

   |downloads_simlord| |docker_simlord|

   :versions: 1.0.2, 1.0.1, 0.7.3

   :depends: :conda:package:`dinopy`  :conda:package:`numpy`  :conda:package:`pysam` >=0.8.4 :conda:package:`python` 3.4* :conda:package:`scipy`  

   :required~by: |required_by_simlord|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install simlord

   and update with::

      conda update simlord

   or use the docker container::

      docker pull quay.io/repository/biocontainers/simlord


.. |required_by_simlord| conda:required_by:: simlord
.. |downloads_simlord| image:: https://img.shields.io/conda/dn/bioconda/simlord.svg?style=flat
   :alt:   (downloads)
.. |docker_simlord| image:: https://quay.io/repository/biocontainers/simlord/status
   :target: https://quay.io/repository/biocontainers/simlord







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simlord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simlord/README.html

