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

   :versions: 0.5.4

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-geem`  :conda:package:`r-geepack`  :conda:package:`r-glmnet`  :conda:package:`r-kinship2`  :conda:package:`r-mass`  :conda:package:`r-matrix`  :conda:package:`r-mvtnorm`  :conda:package:`r-rcpp`  :conda:package:`r-rcpparmadillo`  

   :required~by: |required_by_r-mess|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mess

   and update with::

      conda update r-mess

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-mess


.. |required_by_r-mess| conda:required_by:: r-mess
.. |downloads_r-mess| image:: https://img.shields.io/conda/dn/bioconda/r-mess.svg?style=flat
   :alt:   (downloads)
.. |docker_r-mess| image:: https://quay.io/repository/biocontainers/r-mess/status
   :target: https://quay.io/repository/biocontainers/r-mess







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mess/README.html

