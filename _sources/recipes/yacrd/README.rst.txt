.. title:: Package Recipe 'yacrd'
.. highlight: bash


yacrd
=====

.. conda:recipe:: yacrd
   :replaces_section_title:

   Yet Another Chimeric Read Detector\, with long\-read mapper result as input.

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`yacrd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yacrd/meta.yaml>`_

   


.. conda:package:: yacrd

   |downloads_yacrd| |docker_yacrd|

   :versions: 0.4.1, 0.4, 0.3, 0.2.1, 0.2

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_yacrd|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yacrd

   and update with::

      conda update yacrd

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yacrd


.. |required_by_yacrd| conda:required_by:: yacrd
.. |downloads_yacrd| image:: https://img.shields.io/conda/dn/bioconda/yacrd.svg?style=flat
   :alt:   (downloads)
.. |docker_yacrd| image:: https://quay.io/repository/biocontainers/yacrd/status
   :target: https://quay.io/repository/biocontainers/yacrd







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yacrd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yacrd/README.html

