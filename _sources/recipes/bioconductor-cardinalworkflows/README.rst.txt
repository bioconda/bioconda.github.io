.. title:: Package Recipe 'bioconductor-cardinalworkflows'
.. highlight: bash


bioconductor-cardinalworkflows
==============================

.. conda:recipe:: bioconductor-cardinalworkflows
   :replaces_section_title:

   Datasets and workflows for Cardinal\: DESI and MALDI examples including pig fetus\, cardinal painting\, and human RCC.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/CardinalWorkflows.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cardinalworkflows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalworkflows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cardinalworkflows/meta.yaml>`_

   


.. conda:package:: bioconductor-cardinalworkflows

   |downloads_bioconductor-cardinalworkflows| |docker_bioconductor-cardinalworkflows|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-cardinal` >=2.0.0,<2.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cardinalworkflows|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cardinalworkflows

   and update with::

      conda update bioconductor-cardinalworkflows

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cardinalworkflows


.. |required_by_bioconductor-cardinalworkflows| conda:required_by:: bioconductor-cardinalworkflows
.. |downloads_bioconductor-cardinalworkflows| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cardinalworkflows.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cardinalworkflows| image:: https://quay.io/repository/biocontainers/bioconductor-cardinalworkflows/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cardinalworkflows







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cardinalworkflows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cardinalworkflows/README.html

