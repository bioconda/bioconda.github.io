:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbhoover'
.. highlight: bash

pbhoover
========

.. conda:recipe:: pbhoover
   :replaces_section_title:
   :noindex:

   Variant caller for legacy and low coverage Pacific Biosciences\' long\-read sequencing data

   :homepage: https://gitlab.com/LPCDRP/pbhoover
   :license: GPLv3
   :recipe: /`pbhoover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbhoover/meta.yaml>`_

   


.. conda:package:: pbhoover

   |downloads_pbhoover| |docker_pbhoover|

   :versions:
      
      

      ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends bcftools: 
   :depends htslib: 
   :depends numpy: 
   :depends pbcore: ``>=1.2.10``
   :depends pbh5tools: 
   :depends python: ``<3``
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbhoover

   and update with::

      conda update pbhoover

   or use the docker container::

      docker pull quay.io/biocontainers/pbhoover:<tag>

   (see `pbhoover/tags`_ for valid values for ``<tag>``)


.. |downloads_pbhoover| image:: https://img.shields.io/conda/dn/bioconda/pbhoover.svg?style=flat
   :target: https://anaconda.org/bioconda/pbhoover
   :alt:   (downloads)
.. |docker_pbhoover| image:: https://quay.io/repository/biocontainers/pbhoover/status
   :target: https://quay.io/repository/biocontainers/pbhoover
.. _`pbhoover/tags`: https://quay.io/repository/biocontainers/pbhoover?tab=tags


.. raw:: html

    <script>
        var package = "pbhoover";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbhoover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbhoover/README.html