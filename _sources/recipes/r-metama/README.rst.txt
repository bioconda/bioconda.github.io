.. title:: Package Recipe 'r-metama'
.. highlight: bash


r-metama
========

.. conda:recipe:: r-metama
   :replaces_section_title:

   Combines either p\-values or modified effect sizes from different studies to find differentially expressed genes

   :homepage: https://CRAN.R-project.org/package=metaMA
   :license: GPL / GPL
   :recipe: /`r-metama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama/meta.yaml>`_

   


.. conda:package:: r-metama

   |downloads_r-metama| |docker_r-metama|

   :versions: 3.1.2

   :depends: :conda:package:`bioconductor-limma`  :conda:package:`r-base` 3.4.1* :conda:package:`r-smvar`  

   :required~by: |required_by_r-metama|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-metama

   and update with::

      conda update r-metama

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-metama


.. |required_by_r-metama| conda:required_by:: r-metama
.. |downloads_r-metama| image:: https://img.shields.io/conda/dn/bioconda/r-metama.svg?style=flat
   :alt:   (downloads)
.. |docker_r-metama| image:: https://quay.io/repository/biocontainers/r-metama/status
   :target: https://quay.io/repository/biocontainers/r-metama







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metama/README.html

