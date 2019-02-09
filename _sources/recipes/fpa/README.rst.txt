.. title:: Package Recipe 'fpa'
.. highlight: bash


fpa
===

.. conda:recipe:: fpa
   :replaces_section_title:

   Filter Pairwise Alignment filter long read mapping information to save disk space

   :homepage: https://github.com/natir/yacrd
   :license: MIT / MIT
   :recipe: /`fpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fpa/meta.yaml>`_

   


.. conda:package:: fpa

   |downloads_fpa| |docker_fpa|

   :versions: 0.3, 0.2, 0.1.1

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_fpa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fpa

   and update with::

      conda update fpa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fpa


.. |required_by_fpa| conda:required_by:: fpa
.. |downloads_fpa| image:: https://img.shields.io/conda/dn/bioconda/fpa.svg?style=flat
   :alt:   (downloads)
.. |docker_fpa| image:: https://quay.io/repository/biocontainers/fpa/status
   :target: https://quay.io/repository/biocontainers/fpa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fpa/README.html

