.. title:: Package Recipe 'bioconductor-lungcanceracvssccgeo'
.. highlight: bash


bioconductor-lungcanceracvssccgeo
=================================

.. conda:recipe:: bioconductor-lungcanceracvssccgeo
   :replaces_section_title:

   This package contains 30 Affymetrix CEL files for 7 Adenocarcinoma \(AC\) and 8 Squamous cell carcinoma \(SCC\) lung cancer samples taken at random from 3 GEO datasets \(GSE10245\, GSE18842 and GSE2109\) and other 15 samples from a dataset produced by the organizers of the IMPROVER Diagnostic Signature Challenge available from GEO \(GSE43580\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/LungCancerACvsSCCGEO.html
   :license: GPL-2
   :recipe: /`bioconductor-lungcanceracvssccgeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcanceracvssccgeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungcanceracvssccgeo/meta.yaml>`_

   


.. conda:package:: bioconductor-lungcanceracvssccgeo

   |downloads_bioconductor-lungcanceracvssccgeo| |docker_bioconductor-lungcanceracvssccgeo|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lungcanceracvssccgeo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lungcanceracvssccgeo

   and update with::

      conda update bioconductor-lungcanceracvssccgeo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo


.. |required_by_bioconductor-lungcanceracvssccgeo| conda:required_by:: bioconductor-lungcanceracvssccgeo
.. |downloads_bioconductor-lungcanceracvssccgeo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lungcanceracvssccgeo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lungcanceracvssccgeo| image:: https://quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lungcanceracvssccgeo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lungcanceracvssccgeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lungcanceracvssccgeo/README.html

