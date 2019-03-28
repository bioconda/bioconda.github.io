:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-phylobase'
.. highlight: bash

r-phylobase
===========

.. conda:recipe:: r-phylobase
   :replaces_section_title:

   Provides a base S4 class for comparative methods\, incorporating one or more trees and trait data.

   :homepage: https://github.com/fmichonneau/phylobase
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-phylobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-phylobase/meta.yaml>`_

   


.. conda:package:: r-phylobase

   |downloads_r-phylobase| |docker_r-phylobase|

   :versions: 0.8.4-4, 0.8.4-3, 0.8.4-2, 0.8.4-0
   
   :depends libcxx: >=4.0.1
   
   :depends r-ade4: 
   
   :depends r-ape: >=3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: >=0.11.0
   
   :depends r-rncl: >=0.6.0
   
   :depends r-rnexml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phylobase

   and update with::

      conda update r-phylobase

   or use the docker container::

      docker pull quay.io/biocontainers/r-phylobase:<tag>

   (see `r-phylobase/tags`_ for valid values for ``<tag>``)


.. |downloads_r-phylobase| image:: https://img.shields.io/conda/dn/bioconda/r-phylobase.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phylobase| image:: https://quay.io/repository/biocontainers/r-phylobase/status
   :target: https://quay.io/repository/biocontainers/r-phylobase
.. _`r-phylobase/tags`: https://quay.io/repository/biocontainers/r-phylobase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phylobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phylobase/README.html