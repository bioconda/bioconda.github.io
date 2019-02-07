.. title:: Package Recipe 'bioconductor-messina'
.. highlight: bash


bioconductor-messina
====================

.. conda:recipe:: bioconductor-messina
   :replaces_section_title:

   Messina is a collection of algorithms for constructing optimally robust single\-gene classifiers\, and for identifying differential expression in the presence of outliers or unknown sample subgroups.  The methods have application in identifying lead features to develop into clinical tests \(both diagnostic and prognostic\)\, and in identifying differential expression when a fraction of samples show unusual patterns of expression.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/messina.html
   :license: EPL (>= 1.0)
   :recipe: /`bioconductor-messina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-messina/meta.yaml>`_
   :links: biotools: :biotools:`messina`

   


.. conda:package:: bioconductor-messina

   |downloads_bioconductor-messina| |docker_bioconductor-messina|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-foreach` >=1.4.1 :conda:package:`r-ggplot2` >=0.9.3.1 :conda:package:`r-plyr` >=1.8 :conda:package:`r-rcpp` >=0.11.1 :conda:package:`r-survival` >=2.37-4 

   :required~by: |required_by_bioconductor-messina|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-messina

   and update with::

      conda update bioconductor-messina

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-messina


.. |required_by_bioconductor-messina| conda:required_by:: bioconductor-messina
.. |downloads_bioconductor-messina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-messina.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-messina| image:: https://quay.io/repository/biocontainers/bioconductor-messina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-messina







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-messina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-messina/README.html

