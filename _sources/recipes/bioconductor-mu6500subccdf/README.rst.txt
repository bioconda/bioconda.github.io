:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu6500subccdf'
.. highlight: bash

bioconductor-mu6500subccdf
==========================

.. conda:recipe:: bioconductor-mu6500subccdf
   :replaces_section_title:

   mu6500subccdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/mu6500subccdf.html
   :license: LGPL
   :recipe: /`bioconductor-mu6500subccdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu6500subccdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu6500subccdf/meta.yaml>`_

   A package containing an environment representing the Mu6500subC.CDF file.


.. conda:package:: bioconductor-mu6500subccdf

   |downloads_bioconductor-mu6500subccdf| |docker_bioconductor-mu6500subccdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mu6500subccdf

   and update with::

      conda update bioconductor-mu6500subccdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu6500subccdf:<tag>

   (see `bioconductor-mu6500subccdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu6500subccdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu6500subccdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mu6500subccdf
   :alt:   (downloads)
.. |docker_bioconductor-mu6500subccdf| image:: https://quay.io/repository/biocontainers/bioconductor-mu6500subccdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu6500subccdf
.. _`bioconductor-mu6500subccdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mu6500subccdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu6500subccdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu6500subccdf/README.html