.. title:: Package Recipe 'r-classdiscovery'
.. highlight: bash


r-classdiscovery
================

.. conda:recipe:: r-classdiscovery
   :replaces_section_title:

   Defines the classes used for \"class discovery\" problems in the OOMPA project \(\<http\:\/\/oompa.r\-forge.r\-project.org\/\>\). Class discovery primarily consists of unsupervised clustering methods with attempts to assess their statistical significance. 

   :homepage: http://oompa.r-forge.r-project.org/
   :license: APACHE / Apache (== 2.0)
   :recipe: /`r-classdiscovery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery/meta.yaml>`_

   


.. conda:package:: r-classdiscovery

   |downloads_r-classdiscovery| |docker_r-classdiscovery|

   :versions: 3.3.9

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-mclust`  :conda:package:`r-oompabase` >=3.0.1 :conda:package:`r-oompadata`  

   :required~by: |required_by_r-classdiscovery|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-classdiscovery

   and update with::

      conda update r-classdiscovery

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-classdiscovery


.. |required_by_r-classdiscovery| conda:required_by:: r-classdiscovery
.. |downloads_r-classdiscovery| image:: https://img.shields.io/conda/dn/bioconda/r-classdiscovery.svg?style=flat
   :alt:   (downloads)
.. |docker_r-classdiscovery| image:: https://quay.io/repository/biocontainers/r-classdiscovery/status
   :target: https://quay.io/repository/biocontainers/r-classdiscovery







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-classdiscovery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-classdiscovery/README.html

