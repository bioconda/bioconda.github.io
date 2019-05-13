:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnu34cdf'
.. highlight: bash

bioconductor-rnu34cdf
=====================

.. conda:recipe:: bioconductor-rnu34cdf
   :replaces_section_title:

   A package containing an environment representing the RN\_U34.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/rnu34cdf.html
   :license: LGPL
   :recipe: /`bioconductor-rnu34cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnu34cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnu34cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-rnu34cdf

   |downloads_bioconductor-rnu34cdf| |docker_bioconductor-rnu34cdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnu34cdf

   and update with::

      conda update bioconductor-rnu34cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnu34cdf:<tag>

   (see `bioconductor-rnu34cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnu34cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnu34cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnu34cdf
   :alt:   (downloads)
.. |docker_bioconductor-rnu34cdf| image:: https://quay.io/repository/biocontainers/bioconductor-rnu34cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnu34cdf
.. _`bioconductor-rnu34cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rnu34cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnu34cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnu34cdf/README.html