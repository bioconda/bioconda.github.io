.. title:: Package Recipe 'maaslin'
.. highlight: bash


maaslin
=======

.. conda:recipe:: maaslin
   :replaces_section_title:

   MaAsLin is a multivariate statistical framework that finds associations between clinical metadata and microbial community abundance or function.

   :homepage: https://huttenhower.sph.harvard.edu/maaslin
   :license: Custom
   :recipe: /`maaslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin/meta.yaml>`_

   


.. conda:package:: maaslin

   |downloads_maaslin| |docker_maaslin|

   :versions: 0.04

   :depends: :conda:package:`r` 3.3.1* :conda:package:`r-agricolae`  :conda:package:`r-gam`  :conda:package:`r-gamlss`  :conda:package:`r-gbm`  :conda:package:`r-glmnet`  :conda:package:`r-inlinedocs`  :conda:package:`r-logging`  :conda:package:`r-optparse`  :conda:package:`r-outliers`  :conda:package:`r-penalized`  :conda:package:`r-pscl`  :conda:package:`r-robustbase`  

   :required~by: |required_by_maaslin|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maaslin

   and update with::

      conda update maaslin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/maaslin


.. |required_by_maaslin| conda:required_by:: maaslin
.. |downloads_maaslin| image:: https://img.shields.io/conda/dn/bioconda/maaslin.svg?style=flat
   :alt:   (downloads)
.. |docker_maaslin| image:: https://quay.io/repository/biocontainers/maaslin/status
   :target: https://quay.io/repository/biocontainers/maaslin







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin/README.html

