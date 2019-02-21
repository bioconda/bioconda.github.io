:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgfocuscdf'
.. highlight: bash

bioconductor-hgfocuscdf
=======================

.. conda:recipe:: bioconductor-hgfocuscdf
   :replaces_section_title:

   A package containing an environment representing the HG\-Focus.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/hgfocuscdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgfocuscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgfocuscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgfocuscdf/meta.yaml>`_

   


.. conda:package:: bioconductor-hgfocuscdf

   |downloads_bioconductor-hgfocuscdf| |docker_bioconductor-hgfocuscdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgfocuscdf

   and update with::

      conda update bioconductor-hgfocuscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgfocuscdf:<tag>

   (see `bioconductor-hgfocuscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgfocuscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgfocuscdf.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hgfocuscdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgfocuscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgfocuscdf
.. _`bioconductor-hgfocuscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgfocuscdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgfocuscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgfocuscdf/README.html