:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribowaltz'
.. highlight: bash

ribowaltz
=========

.. conda:recipe:: ribowaltz
   :replaces_section_title:
   :noindex:

   Calculation of optimal P\-site offsets\, diagnostic analysis and visual inspection of ribosome profiling data.

   :homepage: https://github.com/LabTranslationalArchitectomics/riboWaltz
   :license: MIT
   :recipe: /`ribowaltz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz/meta.yaml>`_

   


.. conda:package:: ribowaltz

   |downloads_ribowaltz| |docker_ribowaltz|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicfeatures: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-devtools: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribowaltz

   and update with::

      conda update ribowaltz

   or use the docker container::

      docker pull quay.io/biocontainers/ribowaltz:<tag>

   (see `ribowaltz/tags`_ for valid values for ``<tag>``)


.. |downloads_ribowaltz| image:: https://img.shields.io/conda/dn/bioconda/ribowaltz.svg?style=flat
   :target: https://anaconda.org/bioconda/ribowaltz
   :alt:   (downloads)
.. |docker_ribowaltz| image:: https://quay.io/repository/biocontainers/ribowaltz/status
   :target: https://quay.io/repository/biocontainers/ribowaltz
.. _`ribowaltz/tags`: https://quay.io/repository/biocontainers/ribowaltz?tab=tags


.. raw:: html

    <script>
        var package = "ribowaltz";
        var versions = ["1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribowaltz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribowaltz/README.html