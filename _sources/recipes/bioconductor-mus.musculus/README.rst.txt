.. title:: Package Recipe 'bioconductor-mus.musculus'
.. highlight: bash


bioconductor-mus.musculus
=========================

.. conda:recipe:: bioconductor-mus.musculus
   :replaces_section_title:

   Contains the Mus.musculus object to access data from several related annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Mus.musculus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mus.musculus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mus.musculus/meta.yaml>`_

   


.. conda:package:: bioconductor-mus.musculus

   |downloads_bioconductor-mus.musculus| |docker_bioconductor-mus.musculus|

   :versions: 1.3.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-organismdbi` >=1.24.0,<1.25.0 :conda:package:`bioconductor-txdb.mmusculus.ucsc.mm10.knowngene` >=3.4.0,<3.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mus.musculus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mus.musculus

   and update with::

      conda update bioconductor-mus.musculus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mus.musculus


.. |required_by_bioconductor-mus.musculus| conda:required_by:: bioconductor-mus.musculus
.. |downloads_bioconductor-mus.musculus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mus.musculus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mus.musculus| image:: https://quay.io/repository/biocontainers/bioconductor-mus.musculus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mus.musculus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mus.musculus/README.html

