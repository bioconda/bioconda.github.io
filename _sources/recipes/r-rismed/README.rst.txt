:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rismed'
.. highlight: bash

r-rismed
========

.. conda:recipe:: r-rismed
   :replaces_section_title:

   A set of tools to extract bibliographic content from the National Center for Biotechnology Information \(NCBI\) databases\, including PubMed. The name RISmed is a portmanteau of RIS \(for Research Information Systems\, a common tag format for bibliographic data\) and PubMed.

   :homepage: https://CRAN.R-project.org/package=RISmed
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-rismed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rismed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rismed/meta.yaml>`_

   


.. conda:package:: r-rismed

   |downloads_r-rismed| |docker_r-rismed|

   :versions: 2.1.7-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rismed

   and update with::

      conda update r-rismed

   or use the docker container::

      docker pull quay.io/biocontainers/r-rismed:<tag>

   (see `r-rismed/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rismed| image:: https://img.shields.io/conda/dn/bioconda/r-rismed.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rismed| image:: https://quay.io/repository/biocontainers/r-rismed/status
   :target: https://quay.io/repository/biocontainers/r-rismed
.. _`r-rismed/tags`: https://quay.io/repository/biocontainers/r-rismed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rismed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rismed/README.html