.. title:: Package Recipe 'bioconductor-epivizrchart'
.. highlight: bash


bioconductor-epivizrchart
=========================

.. conda:recipe:: bioconductor-epivizrchart
   :replaces_section_title:

   This package provides an API for interactive visualization of genomic data using epiviz web components. Objects in R\/BioConductor can be used to generate interactive R markdown\/notebook documents or can be visualized in the R Studio\'s default viewer.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/epivizrChart.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epivizrchart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epivizrchart/meta.yaml>`_

   


.. conda:package:: bioconductor-epivizrchart

   |downloads_bioconductor-epivizrchart| |docker_bioconductor-epivizrchart|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-epivizrdata` >=1.10.0,<1.11.0 :conda:package:`bioconductor-epivizrserver` >=1.10.0,<1.11.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-htmltools`  :conda:package:`r-rjson`  

   :required~by: |required_by_bioconductor-epivizrchart|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epivizrchart

   and update with::

      conda update bioconductor-epivizrchart

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-epivizrchart


.. |required_by_bioconductor-epivizrchart| conda:required_by:: bioconductor-epivizrchart
.. |downloads_bioconductor-epivizrchart| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epivizrchart.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-epivizrchart| image:: https://quay.io/repository/biocontainers/bioconductor-epivizrchart/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epivizrchart







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epivizrchart/README.html

