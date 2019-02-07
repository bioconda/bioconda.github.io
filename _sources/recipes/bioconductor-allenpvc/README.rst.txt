.. title:: Package Recipe 'bioconductor-allenpvc'
.. highlight: bash


bioconductor-allenpvc
=====================

.. conda:recipe:: bioconductor-allenpvc
   :replaces_section_title:

   Celular taxonomy of the primary visual cortex in adult mice based on single cell RNA\-sequencing from a study performed by the Allen Institute for Brain Science. In said study 49 transcriptomic cell types are identified.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/allenpvc.html
   :license: CC0
   :recipe: /`bioconductor-allenpvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allenpvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-allenpvc/meta.yaml>`_

   


.. conda:package:: bioconductor-allenpvc

   |downloads_bioconductor-allenpvc| |docker_bioconductor-allenpvc|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-allenpvc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-allenpvc

   and update with::

      conda update bioconductor-allenpvc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-allenpvc


.. |required_by_bioconductor-allenpvc| conda:required_by:: bioconductor-allenpvc
.. |downloads_bioconductor-allenpvc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-allenpvc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-allenpvc| image:: https://quay.io/repository/biocontainers/bioconductor-allenpvc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-allenpvc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-allenpvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-allenpvc/README.html

