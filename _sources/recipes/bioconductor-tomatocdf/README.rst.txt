.. title:: Package Recipe 'bioconductor-tomatocdf'
.. highlight: bash


bioconductor-tomatocdf
======================

.. conda:recipe:: bioconductor-tomatocdf
   :replaces_section_title:

   A package containing an environment representing the Tomato.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/tomatocdf.html
   :license: LGPL
   :recipe: /`bioconductor-tomatocdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatocdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatocdf/meta.yaml>`_

   


.. conda:package:: bioconductor-tomatocdf

   |downloads_bioconductor-tomatocdf| |docker_bioconductor-tomatocdf|

   :versions: 2.18.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tomatocdf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tomatocdf

   and update with::

      conda update bioconductor-tomatocdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tomatocdf


.. |required_by_bioconductor-tomatocdf| conda:required_by:: bioconductor-tomatocdf
.. |downloads_bioconductor-tomatocdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomatocdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tomatocdf| image:: https://quay.io/repository/biocontainers/bioconductor-tomatocdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomatocdf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomatocdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomatocdf/README.html

