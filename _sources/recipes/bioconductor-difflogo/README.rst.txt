.. title:: Package Recipe 'bioconductor-difflogo'
.. highlight: bash


bioconductor-difflogo
=====================

.. conda:recipe:: bioconductor-difflogo
   :replaces_section_title:

   DiffLogo is an easy\-to\-use tool to visualize motif differences.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DiffLogo.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-difflogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-difflogo/meta.yaml>`_

   


.. conda:package:: bioconductor-difflogo

   |downloads_bioconductor-difflogo| |docker_bioconductor-difflogo|

   :versions: 2.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cba`  

   :required~by: |required_by_bioconductor-difflogo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-difflogo

   and update with::

      conda update bioconductor-difflogo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-difflogo


.. |required_by_bioconductor-difflogo| conda:required_by:: bioconductor-difflogo
.. |downloads_bioconductor-difflogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-difflogo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-difflogo| image:: https://quay.io/repository/biocontainers/bioconductor-difflogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-difflogo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-difflogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-difflogo/README.html

