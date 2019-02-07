.. title:: Package Recipe 'bioconductor-hgu95bcdf'
.. highlight: bash


bioconductor-hgu95bcdf
======================

.. conda:recipe:: bioconductor-hgu95bcdf
   :replaces_section_title:

   A package containing an environment representing the HG U95B.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95bcdf

   |downloads_bioconductor-hgu95bcdf| |docker_bioconductor-hgu95bcdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-hgu95bcdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95bcdf

   and update with::

      conda update bioconductor-hgu95bcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hgu95bcdf


.. |required_by_bioconductor-hgu95bcdf| conda:required_by:: bioconductor-hgu95bcdf
.. |downloads_bioconductor-hgu95bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95bcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgu95bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html

