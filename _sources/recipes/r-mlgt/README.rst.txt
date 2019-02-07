.. title:: Package Recipe 'r-mlgt'
.. highlight: bash


r-mlgt
======

.. conda:recipe:: r-mlgt
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-mlgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mlgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mlgt/meta.yaml>`_
   :links: biotools: :biotools:`mlgt`

   


.. conda:package:: r-mlgt

   |downloads_r-mlgt| |docker_r-mlgt|

   :versions: 0.16

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-seqinr`  

   :required~by: |required_by_r-mlgt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mlgt

   and update with::

      conda update r-mlgt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-mlgt


.. |required_by_r-mlgt| conda:required_by:: r-mlgt
.. |downloads_r-mlgt| image:: https://img.shields.io/conda/dn/bioconda/r-mlgt.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mlgt| image:: https://quay.io/repository/biocontainers/r-mlgt/status
   :target: https://quay.io/repository/biocontainers/r-mlgt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mlgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mlgt/README.html

