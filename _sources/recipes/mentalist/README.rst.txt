.. title:: Package Recipe 'mentalist'
.. highlight: bash


mentalist
=========

.. conda:recipe:: mentalist
   :replaces_section_title:

   The MLST pipeline developed by the PathOGiST research group.

   :homepage: https://github.com/WGS-TB/MentaLiST
   :license: MIT
   :recipe: /`mentalist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mentalist/meta.yaml>`_

   


.. conda:package:: mentalist

   |downloads_mentalist| |docker_mentalist|

   :versions: 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.9, 0.1.8, 0.1.7, 0.1.6, 0.1.5, 0.1.4, 0.1.3, 0.1.2

   :depends: :conda:package:`hdf5` >=1.10.3,<1.10.4.0a0 :conda:package:`julia` 0.6.1.* :conda:package:`libxml2`  :conda:package:`mpfr` >=4.0.1,<5.0a0 :conda:package:`unzip`  

   :required~by: |required_by_mentalist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mentalist

   and update with::

      conda update mentalist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mentalist


.. |required_by_mentalist| conda:required_by:: mentalist
.. |downloads_mentalist| image:: https://img.shields.io/conda/dn/bioconda/mentalist.svg?style=flat
   :alt:   (downloads)
.. |docker_mentalist| image:: https://quay.io/repository/biocontainers/mentalist/status
   :target: https://quay.io/repository/biocontainers/mentalist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mentalist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mentalist/README.html

