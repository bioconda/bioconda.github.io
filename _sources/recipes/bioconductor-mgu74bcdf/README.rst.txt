:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgu74bcdf'
.. highlight: bash

bioconductor-mgu74bcdf
======================

.. conda:recipe:: bioconductor-mgu74bcdf
   :replaces_section_title:

   A package containing an environment representing the MG\_U74B.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/mgu74bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-mgu74bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgu74bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgu74bcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-mgu74bcdf

   |downloads_bioconductor-mgu74bcdf| |docker_bioconductor-mgu74bcdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mgu74bcdf

   and update with::

      conda update bioconductor-mgu74bcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mgu74bcdf:<tag>

   (see `bioconductor-mgu74bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgu74bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgu74bcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mgu74bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-mgu74bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgu74bcdf
.. _`bioconductor-mgu74bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mgu74bcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgu74bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgu74bcdf/README.html