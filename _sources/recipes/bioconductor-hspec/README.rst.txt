.. title:: Package Recipe 'bioconductor-hspec'
.. highlight: bash


bioconductor-hspec
==================

.. conda:recipe:: bioconductor-hspec
   :replaces_section_title:

   A package containing an environment representing the HGU133Plus2\_Hs\_Hspec.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/Hspec.html
   :license: LGPL
   :recipe: /`bioconductor-hspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspec/meta.yaml>`_

   


.. conda:package:: bioconductor-hspec

   |downloads_bioconductor-hspec| |docker_bioconductor-hspec|

   :versions: 0.99.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hspec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hspec

   and update with::

      conda update bioconductor-hspec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hspec


.. |required_by_bioconductor-hspec| conda:required_by:: bioconductor-hspec
.. |downloads_bioconductor-hspec| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hspec.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hspec| image:: https://quay.io/repository/biocontainers/bioconductor-hspec/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hspec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hspec/README.html

