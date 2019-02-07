.. title:: Package Recipe 'r-annotables'
.. highlight: bash


r-annotables
============

.. conda:recipe:: r-annotables
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-annotables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-annotables/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.996854`

   


.. conda:package:: r-annotables

   |downloads_r-annotables| |docker_r-annotables|

   :versions: v0.1.90

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-tibble`  

   :required~by: |required_by_r-annotables|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-annotables

   and update with::

      conda update r-annotables

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-annotables


.. |required_by_r-annotables| conda:required_by:: r-annotables
.. |downloads_r-annotables| image:: https://img.shields.io/conda/dn/bioconda/r-annotables.svg?style=flat
   :alt:   (downloads)
.. |docker_r-annotables| image:: https://quay.io/repository/biocontainers/r-annotables/status
   :target: https://quay.io/repository/biocontainers/r-annotables







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-annotables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-annotables/README.html

