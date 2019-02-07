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

   :versions: 0.8.4

   :depends: :conda:package:`r-ade4`  :conda:package:`r-ape` >=3.0 :conda:package:`r-base` 3.4.1* :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rncl` >=0.6.0 :conda:package:`r-rnexml`  

   :required~by: |required_by_r-phylobase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-phylobase

   and update with::

      conda update r-phylobase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-phylobase


.. |required_by_r-phylobase| conda:required_by:: r-phylobase
.. |downloads_r-phylobase| image:: https://img.shields.io/conda/dn/bioconda/r-phylobase.svg?style=flat
   :alt:   (downloads)
.. |docker_r-phylobase| image:: https://quay.io/repository/biocontainers/r-phylobase/status
   :target: https://quay.io/repository/biocontainers/r-phylobase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-phylobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-phylobase/README.html

