:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-systempiperdata'
.. highlight: bash

bioconductor-systempiperdata
============================

.. conda:recipe:: bioconductor-systempiperdata
   :replaces_section_title:

   systemPipeRdata is a helper package to generate with a single command NGS workflow templates that are intended to be used by its parent package systemPipeR. The latter is an environment for building end\-to\-end analysis pipelines with automated report generation for next generation sequence \(NGS\) applications such as RNA\-Seq\, RIBO\-Seq\, ChIP\-Seq\, VAR\-Seq and many others. Detailed examples for using systemPipeRdata are given in systemPipeR\'s overview vignette.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/systemPipeRdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-systempiperdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiperdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-systempiperdata/meta.yaml>`_

   


.. conda:package:: bioconductor-systempiperdata

   |downloads_bioconductor-systempiperdata| |docker_bioconductor-systempiperdata|

   :versions: 1.10.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-systempiperdata

   and update with::

      conda update bioconductor-systempiperdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-systempiperdata:<tag>

   (see `bioconductor-systempiperdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-systempiperdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-systempiperdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-systempiperdata| image:: https://quay.io/repository/biocontainers/bioconductor-systempiperdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-systempiperdata
.. _`bioconductor-systempiperdata/tags`: https://quay.io/repository/biocontainers/bioconductor-systempiperdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-systempiperdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-systempiperdata/README.html