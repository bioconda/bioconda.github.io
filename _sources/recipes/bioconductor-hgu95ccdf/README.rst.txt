:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95ccdf'
.. highlight: bash

bioconductor-hgu95ccdf
======================

.. conda:recipe:: bioconductor-hgu95ccdf
   :replaces_section_title:

   A package containing an environment representing the HG U95C.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgu95ccdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95ccdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ccdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95ccdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgu95ccdf

   |downloads_bioconductor-hgu95ccdf| |docker_bioconductor-hgu95ccdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95ccdf

   and update with::

      conda update bioconductor-hgu95ccdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95ccdf:<tag>

   (see `bioconductor-hgu95ccdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95ccdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95ccdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95ccdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95ccdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95ccdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95ccdf
.. _`bioconductor-hgu95ccdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95ccdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95ccdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95ccdf/README.html