.. title:: Package Recipe 'r-qiimer'
.. highlight: bash


r-qiimer
========

.. conda:recipe:: r-qiimer
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-qiimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qiimer/meta.yaml>`_

   


.. conda:package:: r-qiimer

   |downloads_r-qiimer| |docker_r-qiimer|

   :versions: 0.9.4

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-pheatmap`  

   :required~by: |required_by_r-qiimer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qiimer

   and update with::

      conda update r-qiimer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-qiimer


.. |required_by_r-qiimer| conda:required_by:: r-qiimer
.. |downloads_r-qiimer| image:: https://img.shields.io/conda/dn/bioconda/r-qiimer.svg?style=flat
   :alt:   (downloads)
.. |docker_r-qiimer| image:: https://quay.io/repository/biocontainers/r-qiimer/status
   :target: https://quay.io/repository/biocontainers/r-qiimer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qiimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qiimer/README.html

