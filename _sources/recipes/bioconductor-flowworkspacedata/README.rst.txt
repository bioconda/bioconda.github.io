.. title:: Package Recipe 'bioconductor-flowworkspacedata'
.. highlight: bash


bioconductor-flowworkspacedata
==============================

.. conda:recipe:: bioconductor-flowworkspacedata
   :replaces_section_title:

   The necessary external data to run the flowWorkspace and openCyto vignette is found in this package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/flowWorkspaceData.html
   :license: GPL-2
   :recipe: /`bioconductor-flowworkspacedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowworkspacedata/meta.yaml>`_

   


.. conda:package:: bioconductor-flowworkspacedata

   |downloads_bioconductor-flowworkspacedata| |docker_bioconductor-flowworkspacedata|

   :versions: 2.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-flowworkspacedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowworkspacedata

   and update with::

      conda update bioconductor-flowworkspacedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowworkspacedata


.. |required_by_bioconductor-flowworkspacedata| conda:required_by:: bioconductor-flowworkspacedata
.. |downloads_bioconductor-flowworkspacedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowworkspacedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowworkspacedata| image:: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowworkspacedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowworkspacedata/README.html

