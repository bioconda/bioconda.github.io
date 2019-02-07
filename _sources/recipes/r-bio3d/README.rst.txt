.. title:: Package Recipe 'r-bio3d'
.. highlight: bash


r-bio3d
=======

.. conda:recipe:: r-bio3d
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-bio3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bio3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bio3d/meta.yaml>`_

   


.. conda:package:: r-bio3d

   |downloads_r-bio3d| |docker_r-bio3d|

   :versions: 2.3_3, 2.2_3

   :depends: :conda:package:`libgcc`  :conda:package:`r-base` 3.4.1* :conda:package:`r-rcpp`  

   :required~by: |required_by_r-bio3d|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bio3d

   and update with::

      conda update r-bio3d

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-bio3d


.. |required_by_r-bio3d| conda:required_by:: r-bio3d
.. |downloads_r-bio3d| image:: https://img.shields.io/conda/dn/bioconda/r-bio3d.svg?style=flat
   :alt:   (downloads)
.. |docker_r-bio3d| image:: https://quay.io/repository/biocontainers/r-bio3d/status
   :target: https://quay.io/repository/biocontainers/r-bio3d







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bio3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bio3d/README.html

