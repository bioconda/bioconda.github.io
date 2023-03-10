:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'contammix'
.. highlight: bash

contammix
=========

.. conda:recipe:: contammix
   :replaces_section_title:
   :noindex:

   estimation of mtDNA contamination from a set of potential contaminant genomes.

   :homepage: https://github.com/plfjohnson/contamMix
   :license: GPL-3
   :recipe: /`contammix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contammix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/contammix/meta.yaml>`_

   


.. conda:package:: contammix

   |downloads_contammix| |docker_contammix|

   :versions:
      
      

      ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-coda: 
   :depends r-getopt: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install contammix

   and update with::

      conda update contammix

   or use the docker container::

      docker pull quay.io/biocontainers/contammix:<tag>

   (see `contammix/tags`_ for valid values for ``<tag>``)


.. |downloads_contammix| image:: https://img.shields.io/conda/dn/bioconda/contammix.svg?style=flat
   :target: https://anaconda.org/bioconda/contammix
   :alt:   (downloads)
.. |docker_contammix| image:: https://quay.io/repository/biocontainers/contammix/status
   :target: https://quay.io/repository/biocontainers/contammix
.. _`contammix/tags`: https://quay.io/repository/biocontainers/contammix?tab=tags


.. raw:: html

    <script>
        var package = "contammix";
        var versions = ["1.0.11","1.0.11","1.0.10","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/contammix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/contammix/README.html