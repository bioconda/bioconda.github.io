.. title:: Package Recipe 'bioconductor-saureuscdf'
.. highlight: bash


bioconductor-saureuscdf
=======================

.. conda:recipe:: bioconductor-saureuscdf
   :replaces_section_title:

   A package containing an environment representing the S\_aureus.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/saureuscdf.html
   :license: LGPL
   :recipe: /`bioconductor-saureuscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saureuscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-saureuscdf/meta.yaml>`_

   


.. conda:package:: bioconductor-saureuscdf

   |downloads_bioconductor-saureuscdf| |docker_bioconductor-saureuscdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-saureuscdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-saureuscdf

   and update with::

      conda update bioconductor-saureuscdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-saureuscdf


.. |required_by_bioconductor-saureuscdf| conda:required_by:: bioconductor-saureuscdf
.. |downloads_bioconductor-saureuscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-saureuscdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-saureuscdf| image:: https://quay.io/repository/biocontainers/bioconductor-saureuscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-saureuscdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-saureuscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-saureuscdf/README.html

