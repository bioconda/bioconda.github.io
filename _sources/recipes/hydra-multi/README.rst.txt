:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hydra-multi'
.. highlight: bash

hydra-multi
===========

.. conda:recipe:: hydra-multi
   :replaces_section_title:
   :noindex:

   Hydra detects structural variation breakpoints in both unique and duplicated genomic regions.

   :homepage: https://github.com/arq5x/Hydra
   :license: MIT
   :recipe: /`hydra-multi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-multi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hydra-multi/meta.yaml>`_

   


.. conda:package:: hydra-multi

   |downloads_hydra-multi| |docker_hydra-multi|

   :versions:
      
      

      ``0.5.4-1``,  ``0.5.4-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends pysam: ``0.7.7.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: ``0.1.19.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hydra-multi

   and update with::

      conda update hydra-multi

   or use the docker container::

      docker pull quay.io/biocontainers/hydra-multi:<tag>

   (see `hydra-multi/tags`_ for valid values for ``<tag>``)


.. |downloads_hydra-multi| image:: https://img.shields.io/conda/dn/bioconda/hydra-multi.svg?style=flat
   :target: https://anaconda.org/bioconda/hydra-multi
   :alt:   (downloads)
.. |docker_hydra-multi| image:: https://quay.io/repository/biocontainers/hydra-multi/status
   :target: https://quay.io/repository/biocontainers/hydra-multi
.. _`hydra-multi/tags`: https://quay.io/repository/biocontainers/hydra-multi?tab=tags


.. raw:: html

    <script>
        var package = "hydra-multi";
        var versions = ["0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hydra-multi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hydra-multi/README.html