.. title:: Package Recipe 'bioconductor-plw'
.. highlight: bash


bioconductor-plw
================

.. conda:recipe:: bioconductor-plw
   :replaces_section_title:

   Probe level Locally moderated Weighted median\-t \(PLW\) and Locally Moderated Weighted\-t \(LMW\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/plw.html
   :license: GPL-2
   :recipe: /`bioconductor-plw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plw/meta.yaml>`_
   :links: biotools: :biotools:`plw`

   


.. conda:package:: bioconductor-plw

   |downloads_bioconductor-plw| |docker_bioconductor-plw|

   :versions: 1.42.0, 1.40.0, 1.38.0, 1.36.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-mass`  

   :required~by: |required_by_bioconductor-plw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plw

   and update with::

      conda update bioconductor-plw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-plw


.. |required_by_bioconductor-plw| conda:required_by:: bioconductor-plw
.. |downloads_bioconductor-plw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plw.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-plw| image:: https://quay.io/repository/biocontainers/bioconductor-plw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plw/README.html

