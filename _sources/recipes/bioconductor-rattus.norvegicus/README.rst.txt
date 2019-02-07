.. title:: Package Recipe 'bioconductor-rattus.norvegicus'
.. highlight: bash


bioconductor-rattus.norvegicus
==============================

.. conda:recipe:: bioconductor-rattus.norvegicus
   :replaces_section_title:

   Contains the Rattus.norvegicus object to access data from several related annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Rattus.norvegicus.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rattus.norvegicus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rattus.norvegicus/meta.yaml>`_

   


.. conda:package:: bioconductor-rattus.norvegicus

   |downloads_bioconductor-rattus.norvegicus| |docker_bioconductor-rattus.norvegicus|

   :versions: 1.3.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-organismdbi` >=1.24.0,<1.25.0 :conda:package:`bioconductor-txdb.rnorvegicus.ucsc.rn5.refgene` >=3.4.0,<3.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rattus.norvegicus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rattus.norvegicus

   and update with::

      conda update bioconductor-rattus.norvegicus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rattus.norvegicus


.. |required_by_bioconductor-rattus.norvegicus| conda:required_by:: bioconductor-rattus.norvegicus
.. |downloads_bioconductor-rattus.norvegicus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rattus.norvegicus.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rattus.norvegicus| image:: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rattus.norvegicus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rattus.norvegicus/README.html

