:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amused'
.. highlight: bash

amused
======

.. conda:recipe:: amused
   :replaces_section_title:
   :noindex:

   Auditing Motifs Using Statistical Enrichment \& Depletion

   :homepage: https://github.com/Carldeboer/AMUSED
   :license: GPL-2.0
   :recipe: /`amused <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amused/meta.yaml>`_

   


.. conda:package:: amused

   |downloads_amused| |docker_amused|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends jemalloc: 
   :depends ruby: ``>=2.4``
   :depends ruby-dna-tools: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amused

   and update with::

      conda update amused

   or use the docker container::

      docker pull quay.io/biocontainers/amused:<tag>

   (see `amused/tags`_ for valid values for ``<tag>``)


.. |downloads_amused| image:: https://img.shields.io/conda/dn/bioconda/amused.svg?style=flat
   :target: https://anaconda.org/bioconda/amused
   :alt:   (downloads)
.. |docker_amused| image:: https://quay.io/repository/biocontainers/amused/status
   :target: https://quay.io/repository/biocontainers/amused
.. _`amused/tags`: https://quay.io/repository/biocontainers/amused?tab=tags


.. raw:: html

    <script>
        var package = "amused";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amused/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amused/README.html