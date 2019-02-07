.. title:: Package Recipe 'bioconductor-alsace'
.. highlight: bash


bioconductor-alsace
===================

.. conda:recipe:: bioconductor-alsace
   :replaces_section_title:

   Alternating Least Squares \(or Multivariate Curve Resolution\) for analytical chemical data\, in particular hyphenated data where the first direction is a retention time axis\, and the second a spectral axis. Package builds on the basic als function from the ALS package and adds functionality for high\-throughput analysis\, including definition of time windows\, clustering of profiles\, retention time correction\, etcetera.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/alsace.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-alsace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alsace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alsace/meta.yaml>`_

   


.. conda:package:: bioconductor-alsace

   |downloads_bioconductor-alsace| |docker_bioconductor-alsace|

   :versions: 1.18.0

   :depends: :conda:package:`r-als`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ptw` >=1.0.6 

   :required~by: |required_by_bioconductor-alsace|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alsace

   and update with::

      conda update bioconductor-alsace

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-alsace


.. |required_by_bioconductor-alsace| conda:required_by:: bioconductor-alsace
.. |downloads_bioconductor-alsace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alsace.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-alsace| image:: https://quay.io/repository/biocontainers/bioconductor-alsace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alsace







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alsace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alsace/README.html

