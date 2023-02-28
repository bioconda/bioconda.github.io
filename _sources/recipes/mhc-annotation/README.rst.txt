:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhc-annotation'
.. highlight: bash

mhc-annotation
==============

.. conda:recipe:: mhc-annotation
   :replaces_section_title:
   :noindex:

   Tools to annotate haplotypes of MHC with gene and transcript information

   :homepage: https://github.com/DiltheyLab/MHC-annotation
   :license: MIT / MIT
   :recipe: /`mhc-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhc-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhc-annotation/meta.yaml>`_

   


.. conda:package:: mhc-annotation

   |downloads_mhc-annotation| |docker_mhc-annotation|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends minimap2: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhc-annotation

   and update with::

      conda update mhc-annotation

   or use the docker container::

      docker pull quay.io/biocontainers/mhc-annotation:<tag>

   (see `mhc-annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_mhc-annotation| image:: https://img.shields.io/conda/dn/bioconda/mhc-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/mhc-annotation
   :alt:   (downloads)
.. |docker_mhc-annotation| image:: https://quay.io/repository/biocontainers/mhc-annotation/status
   :target: https://quay.io/repository/biocontainers/mhc-annotation
.. _`mhc-annotation/tags`: https://quay.io/repository/biocontainers/mhc-annotation?tab=tags


.. raw:: html

    <script>
        var package = "mhc-annotation";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhc-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhc-annotation/README.html