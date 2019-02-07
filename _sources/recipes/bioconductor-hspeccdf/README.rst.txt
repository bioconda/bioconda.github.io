.. title:: Package Recipe 'bioconductor-hspeccdf'
.. highlight: bash


bioconductor-hspeccdf
=====================

.. conda:recipe:: bioconductor-hspeccdf
   :replaces_section_title:

   A package containing an environment representing the HGU133Plus2\_Hs\_Hspec.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hspeccdf.html
   :license: LGPL
   :recipe: /`bioconductor-hspeccdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspeccdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hspeccdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hspeccdf

   |downloads_bioconductor-hspeccdf| |docker_bioconductor-hspeccdf|

   :versions: 0.99.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hspeccdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hspeccdf

   and update with::

      conda update bioconductor-hspeccdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hspeccdf


.. |required_by_bioconductor-hspeccdf| conda:required_by:: bioconductor-hspeccdf
.. |downloads_bioconductor-hspeccdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hspeccdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hspeccdf| image:: https://quay.io/repository/biocontainers/bioconductor-hspeccdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hspeccdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hspeccdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hspeccdf/README.html

