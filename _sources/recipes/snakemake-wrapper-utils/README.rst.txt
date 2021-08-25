:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-wrapper-utils'
.. highlight: bash

snakemake-wrapper-utils
=======================

.. conda:recipe:: snakemake-wrapper-utils
   :replaces_section_title:
   :noindex:

   A collection of utility functions and classes for Snakemake wrappers.

   :homepage: https://github.com/snakemake/snakemake-wrapper-utils
   :license: MIT
   :recipe: /`snakemake-wrapper-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-wrapper-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-wrapper-utils/meta.yaml>`_

   


.. conda:package:: snakemake-wrapper-utils

   |downloads_snakemake-wrapper-utils| |docker_snakemake-wrapper-utils|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakemake-wrapper-utils

   and update with::

      conda update snakemake-wrapper-utils

   or use the docker container::

      docker pull quay.io/biocontainers/snakemake-wrapper-utils:<tag>

   (see `snakemake-wrapper-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-wrapper-utils| image:: https://img.shields.io/conda/dn/bioconda/snakemake-wrapper-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-wrapper-utils
   :alt:   (downloads)
.. |docker_snakemake-wrapper-utils| image:: https://quay.io/repository/biocontainers/snakemake-wrapper-utils/status
   :target: https://quay.io/repository/biocontainers/snakemake-wrapper-utils
.. _`snakemake-wrapper-utils/tags`: https://quay.io/repository/biocontainers/snakemake-wrapper-utils?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-wrapper-utils";
        var versions = ["0.2.0","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-wrapper-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-wrapper-utils/README.html