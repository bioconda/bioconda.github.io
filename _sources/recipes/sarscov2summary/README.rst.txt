:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sarscov2summary'
.. highlight: bash

sarscov2summary
===============

.. conda:recipe:: sarscov2summary
   :replaces_section_title:

   Formatter for Galaxy SARS\-CoV2 Selection Analysis Workflow

   :homepage: https://github.com/nickeener/sarscov2formatter
   :documentation: https://github.com/nickeener/sarscov2formatter/README.md
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`sarscov2summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2summary/meta.yaml>`_

   


.. conda:package:: sarscov2summary

   |downloads_sarscov2summary| |docker_sarscov2summary|

   :versions: 0.5-0
   
   :depends biopython: 
   :depends python: >=3.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sarscov2summary

   and update with::

      conda update sarscov2summary

   or use the docker container::

      docker pull quay.io/biocontainers/sarscov2summary:<tag>

   (see `sarscov2summary/tags`_ for valid values for ``<tag>``)


.. |downloads_sarscov2summary| image:: https://img.shields.io/conda/dn/bioconda/sarscov2summary.svg?style=flat
   :target: https://anaconda.org/bioconda/sarscov2summary
   :alt:   (downloads)
.. |docker_sarscov2summary| image:: https://quay.io/repository/biocontainers/sarscov2summary/status
   :target: https://quay.io/repository/biocontainers/sarscov2summary
.. _`sarscov2summary/tags`: https://quay.io/repository/biocontainers/sarscov2summary?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sarscov2summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sarscov2summary/README.html