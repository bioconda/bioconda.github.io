.. title:: Package Recipe 'r-rubic'
.. highlight: bash


r-rubic
=======

.. conda:recipe:: r-rubic/1.0.2
   :replaces_section_title:

   RUBIC detects recurrent copy number aberrations using copy number breaks\, rather than recurrently amplified or deleted regions. This allows for a vastly simplified approach as recursive peak splitting procedures and repeated re\-estimation of the background model are avoided. Furthermore\, the false discovery rate is controlled on the level of called regions\, rather than at the probe level.

   :homepage: http://ccb.nki.nl/software/
   :license: Apache-2.0
   :recipe: /`r-rubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic>`_/`1.0.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic/1.0.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rubic/1.0.2/meta.yaml>`_

   


.. conda:package:: r-rubic

   |downloads_r-rubic| |docker_r-rubic|

   :versions: 1.0.3, 1.0.2

   :depends: :conda:package:`r-base` 3.3.1* :conda:package:`r-data.table` >1.9.6 :conda:package:`r-digest`  :conda:package:`r-ggplot2`  :conda:package:`r-gtable`  :conda:package:`r-pracma`  

   :required~by: |required_by_r-rubic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rubic

   and update with::

      conda update r-rubic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rubic


.. |required_by_r-rubic| conda:required_by:: r-rubic
.. |downloads_r-rubic| image:: https://img.shields.io/conda/dn/bioconda/r-rubic.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rubic| image:: https://quay.io/repository/biocontainers/r-rubic/status
   :target: https://quay.io/repository/biocontainers/r-rubic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rubic/README.html

