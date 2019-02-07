.. title:: Package Recipe 'bioconductor-sigsquared'
.. highlight: bash


bioconductor-sigsquared
=======================

.. conda:recipe:: bioconductor-sigsquared
   :replaces_section_title:

   By leveraging statistical properties \(log\-rank test for survival\) of patient cohorts defined by binary thresholds\, poor\-prognosis patients are identified by the sigsquared package via optimization over a cost function reducing type I and II error.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sigsquared.html
   :license: GPL version 3
   :recipe: /`bioconductor-sigsquared <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigsquared>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigsquared/meta.yaml>`_

   


.. conda:package:: bioconductor-sigsquared

   |downloads_bioconductor-sigsquared| |docker_bioconductor-sigsquared|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-sigsquared|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigsquared

   and update with::

      conda update bioconductor-sigsquared

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigsquared


.. |required_by_bioconductor-sigsquared| conda:required_by:: bioconductor-sigsquared
.. |downloads_bioconductor-sigsquared| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigsquared.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigsquared| image:: https://quay.io/repository/biocontainers/bioconductor-sigsquared/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigsquared







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigsquared/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigsquared/README.html

