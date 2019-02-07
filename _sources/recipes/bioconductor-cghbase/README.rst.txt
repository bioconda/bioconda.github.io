.. title:: Package Recipe 'bioconductor-cghbase'
.. highlight: bash


bioconductor-cghbase
====================

.. conda:recipe:: bioconductor-cghbase
   :replaces_section_title:

   Contains functions and classes that are needed by arrayCGH packages.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CGHbase.html
   :license: GPL
   :recipe: /`bioconductor-cghbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghbase/meta.yaml>`_
   :links: biotools: :biotools:`cghbase`, doi: :doi:`10.1016/j.ejmg.2005.10.046`

   


.. conda:package:: bioconductor-cghbase

   |downloads_bioconductor-cghbase| |docker_bioconductor-cghbase|

   :versions: 1.42.0, 1.40.0, 1.38.0, 1.36.0, 1.32.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-marray` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cghbase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghbase

   and update with::

      conda update bioconductor-cghbase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cghbase


.. |required_by_bioconductor-cghbase| conda:required_by:: bioconductor-cghbase
.. |downloads_bioconductor-cghbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghbase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cghbase| image:: https://quay.io/repository/biocontainers/bioconductor-cghbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghbase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghbase/README.html

