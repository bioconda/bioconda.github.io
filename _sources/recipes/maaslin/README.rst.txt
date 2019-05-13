:orphan:  .. only available via index, not via toctree

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

   :versions: 0.05-0, 0.04-1, 0.04-0, 0.0.5-1
   
   :depends r-agricolae: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gam: 
   :depends r-gamlss: 
   :depends r-gbm: 
   :depends r-glmnet: 
   :depends r-inlinedocs: 
   :depends r-logging: 
   :depends r-optparse: 
   :depends r-outliers: 
   :depends r-penalized: 
   :depends r-pscl: 
   :depends r-robustbase: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maaslin

   and update with::

      conda update maaslin

   or use the docker container::

      docker pull quay.io/biocontainers/maaslin:<tag>

   (see `maaslin/tags`_ for valid values for ``<tag>``)


.. |downloads_maaslin| image:: https://img.shields.io/conda/dn/bioconda/maaslin.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin
   :alt:   (downloads)
.. |docker_maaslin| image:: https://quay.io/repository/biocontainers/maaslin/status
   :target: https://quay.io/repository/biocontainers/maaslin
.. _`maaslin/tags`: https://quay.io/repository/biocontainers/maaslin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin/README.html