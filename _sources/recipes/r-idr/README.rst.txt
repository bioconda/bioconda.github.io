.. title:: Package Recipe 'r-idr'
.. highlight: bash


r-idr
=====

.. conda:recipe:: r-idr
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-idr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-idr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-idr/meta.yaml>`_

   


.. conda:package:: r-idr

   |downloads_r-idr| |docker_r-idr|

   :versions: 1.2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-idr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-idr

   and update with::

      conda update r-idr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-idr


.. |required_by_r-idr| conda:required_by:: r-idr
.. |downloads_r-idr| image:: https://img.shields.io/conda/dn/bioconda/r-idr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-idr| image:: https://quay.io/repository/biocontainers/r-idr/status
   :target: https://quay.io/repository/biocontainers/r-idr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-idr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-idr/README.html

