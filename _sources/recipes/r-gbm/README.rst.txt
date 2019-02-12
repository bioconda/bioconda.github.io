.. title:: Package Recipe 'r-gbm'
.. highlight: bash


r-gbm
=====

.. conda:recipe:: r-gbm
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-gbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gbm/meta.yaml>`_

   


.. conda:package:: r-gbm

   |downloads_r-gbm| |docker_r-gbm|

   :versions: 2.1.3, 2.1.1

   :depends: :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-lattice`  :conda:package:`r-survival`  

   :required~by: |required_by_r-gbm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gbm

   and update with::

      conda update r-gbm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gbm


.. |required_by_r-gbm| conda:required_by:: r-gbm
.. |downloads_r-gbm| image:: https://img.shields.io/conda/dn/bioconda/r-gbm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gbm| image:: https://quay.io/repository/biocontainers/r-gbm/status
   :target: https://quay.io/repository/biocontainers/r-gbm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gbm/README.html

