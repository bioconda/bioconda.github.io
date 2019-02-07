.. title:: Package Recipe 'r-snpassoc'
.. highlight: bash


r-snpassoc
==========

.. conda:recipe:: r-snpassoc
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-snpassoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-snpassoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-snpassoc/meta.yaml>`_

   


.. conda:package:: r-snpassoc

   |downloads_r-snpassoc| |docker_r-snpassoc|

   :versions: 1.9_2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-haplo.stats`  :conda:package:`r-mvtnorm`  :conda:package:`r-survival`  

   :required~by: |required_by_r-snpassoc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-snpassoc

   and update with::

      conda update r-snpassoc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-snpassoc


.. |required_by_r-snpassoc| conda:required_by:: r-snpassoc
.. |downloads_r-snpassoc| image:: https://img.shields.io/conda/dn/bioconda/r-snpassoc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-snpassoc| image:: https://quay.io/repository/biocontainers/r-snpassoc/status
   :target: https://quay.io/repository/biocontainers/r-snpassoc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-snpassoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-snpassoc/README.html

