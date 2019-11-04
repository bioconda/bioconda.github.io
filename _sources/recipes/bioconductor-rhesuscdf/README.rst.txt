:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhesuscdf'
.. highlight: bash

bioconductor-rhesuscdf
======================

.. conda:recipe:: bioconductor-rhesuscdf
   :replaces_section_title:

   A package containing an environment representing the Rhesus.cdf file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/rhesuscdf.html
   :license: LGPL
   :recipe: /`bioconductor-rhesuscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhesuscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhesuscdf/meta.yaml>`_

   


.. conda:package:: bioconductor-rhesuscdf

   |downloads_bioconductor-rhesuscdf| |docker_bioconductor-rhesuscdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhesuscdf

   and update with::

      conda update bioconductor-rhesuscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhesuscdf:<tag>

   (see `bioconductor-rhesuscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhesuscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhesuscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhesuscdf
   :alt:   (downloads)
.. |docker_bioconductor-rhesuscdf| image:: https://quay.io/repository/biocontainers/bioconductor-rhesuscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhesuscdf
.. _`bioconductor-rhesuscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rhesuscdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhesuscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhesuscdf/README.html