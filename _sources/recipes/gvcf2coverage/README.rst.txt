:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf2coverage'
.. highlight: bash

gvcf2coverage
=============

.. conda:recipe:: gvcf2coverage
   :replaces_section_title:
   :noindex:

   Coverage extractor from gVCF files.

   :homepage: https://github.com/varda/varda2_preprocessing
   :license: MIT / MIT
   :recipe: /`gvcf2coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2coverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2coverage/meta.yaml>`_

   


.. conda:package:: gvcf2coverage

   |downloads_gvcf2coverage| |docker_gvcf2coverage|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gvcf2coverage

   and update with::

      conda update gvcf2coverage

   or use the docker container::

      docker pull quay.io/biocontainers/gvcf2coverage:<tag>

   (see `gvcf2coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcf2coverage| image:: https://img.shields.io/conda/dn/bioconda/gvcf2coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcf2coverage
   :alt:   (downloads)
.. |docker_gvcf2coverage| image:: https://quay.io/repository/biocontainers/gvcf2coverage/status
   :target: https://quay.io/repository/biocontainers/gvcf2coverage
.. _`gvcf2coverage/tags`: https://quay.io/repository/biocontainers/gvcf2coverage?tab=tags


.. raw:: html

    <script>
        var package = "gvcf2coverage";
        var versions = ["0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf2coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf2coverage/README.html