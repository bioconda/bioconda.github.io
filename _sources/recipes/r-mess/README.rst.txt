:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mess'
.. highlight: bash

r-mess
======

.. conda:recipe:: r-mess
   :replaces_section_title:

   A mixed collection of useful and semi\-useful diverse statistical functions\, some of which may even be referenced in The R Primer book.

   :homepage: https://github.com/ekstroem/MESS
   :license: GPL2 / GPL-2
   :recipe: /`r-mess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mess/meta.yaml>`_

   


.. conda:package:: r-mess

   |downloads_r-mess| |docker_r-mess|

   :versions: 0.5.4-0
   
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-geem: 
   :depends r-geepack: 
   :depends r-glmnet: 
   :depends r-kinship2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mess

   and update with::

      conda update r-mess

   or use the docker container::

      docker pull quay.io/biocontainers/r-mess:<tag>

   (see `r-mess/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mess| image:: https://img.shields.io/conda/dn/bioconda/r-mess.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mess| image:: https://quay.io/repository/biocontainers/r-mess/status
   :target: https://quay.io/repository/biocontainers/r-mess
.. _`r-mess/tags`: https://quay.io/repository/biocontainers/r-mess?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mess/README.html