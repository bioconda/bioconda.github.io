.. title:: Package Recipe 'r-biomark'
.. highlight: bash


r-biomark
=========

.. conda:recipe:: r-biomark
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-biomark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomark/meta.yaml>`_

   


.. conda:package:: r-biomark

   |downloads_r-biomark| |docker_r-biomark|

   :versions: 0.4.5

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-glmnet`  :conda:package:`r-mass`  :conda:package:`r-pls`  :conda:package:`r-st` >=1.1.6 

   :required~by: |required_by_r-biomark|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-biomark

   and update with::

      conda update r-biomark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-biomark


.. |required_by_r-biomark| conda:required_by:: r-biomark
.. |downloads_r-biomark| image:: https://img.shields.io/conda/dn/bioconda/r-biomark.svg?style=flat
   :alt:   (downloads)
.. |docker_r-biomark| image:: https://quay.io/repository/biocontainers/r-biomark/status
   :target: https://quay.io/repository/biocontainers/r-biomark







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biomark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biomark/README.html

