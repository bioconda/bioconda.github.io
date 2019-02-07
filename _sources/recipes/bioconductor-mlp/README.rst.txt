.. title:: Package Recipe 'bioconductor-mlp'
.. highlight: bash


bioconductor-mlp
================

.. conda:recipe:: bioconductor-mlp
   :replaces_section_title:

   Mean Log P Analysis

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MLP.html
   :license: GPL-3
   :recipe: /`bioconductor-mlp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlp/meta.yaml>`_
   :links: biotools: :biotools:`mlp`, doi: :doi:`10.1007/978-3-642-24007-2_12`

   


.. conda:package:: bioconductor-mlp

   |downloads_bioconductor-mlp| |docker_bioconductor-mlp|

   :versions: 1.30.0, 1.28.0, 1.26.0, 1.24.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gdata`  :conda:package:`r-gmodels`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-plotrix`  

   :required~by: |required_by_bioconductor-mlp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlp

   and update with::

      conda update bioconductor-mlp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mlp


.. |required_by_bioconductor-mlp| conda:required_by:: bioconductor-mlp
.. |downloads_bioconductor-mlp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mlp| image:: https://quay.io/repository/biocontainers/bioconductor-mlp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlp/README.html

