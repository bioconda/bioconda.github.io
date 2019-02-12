:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poplarcdf'
.. highlight: bash

bioconductor-poplarcdf
======================

.. conda:recipe:: bioconductor-poplarcdf
   :replaces_section_title:

   A package containing an environment representing the Poplar.cdf file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/poplarcdf.html
   :license: LGPL
   :recipe: /`bioconductor-poplarcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poplarcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poplarcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-poplarcdf

   |downloads_bioconductor-poplarcdf| |docker_bioconductor-poplarcdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-poplarcdf

   and update with::

      conda update bioconductor-poplarcdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-poplarcdf:<tag>

   (see `bioconductor-poplarcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-poplarcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poplarcdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-poplarcdf| image:: https://quay.io/repository/biocontainers/bioconductor-poplarcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poplarcdf
.. _`bioconductor-poplarcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-poplarcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poplarcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poplarcdf/README.html