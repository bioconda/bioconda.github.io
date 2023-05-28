:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenza-utils'
.. highlight: bash

sequenza-utils
==============

.. conda:recipe:: sequenza-utils
   :replaces_section_title:
   :noindex:

   Analysis of cancer sequencing samples\, utilities for the R package sequenza

   :homepage: http://sequenza-utils.readthedocs.org
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`sequenza-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenza-utils/meta.yaml>`_

   


.. conda:package:: sequenza-utils

   |downloads_sequenza-utils| |docker_sequenza-utils|

   :versions:
      
      

      ``3.0.0-6``,  ``3.0.0-5``,  ``3.0.0-4``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.9999b0-0``

      

   
   :depends htslib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequenza-utils

   and update with::

      conda update sequenza-utils

   or use the docker container::

      docker pull quay.io/biocontainers/sequenza-utils:<tag>

   (see `sequenza-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_sequenza-utils| image:: https://img.shields.io/conda/dn/bioconda/sequenza-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenza-utils
   :alt:   (downloads)
.. |docker_sequenza-utils| image:: https://quay.io/repository/biocontainers/sequenza-utils/status
   :target: https://quay.io/repository/biocontainers/sequenza-utils
.. _`sequenza-utils/tags`: https://quay.io/repository/biocontainers/sequenza-utils?tab=tags


.. raw:: html

    <script>
        var package = "sequenza-utils";
        var versions = ["3.0.0","3.0.0","3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenza-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenza-utils/README.html