:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smartmap'
.. highlight: bash

smartmap
========

.. conda:recipe:: smartmap
   :replaces_section_title:
   :noindex:

   SmartMap\: Bayesian Analysis of Ambiguously Mapped Reads

   :homepage: http://shah-rohan.github.io/SmartMap
   :license: MIT
   :recipe: /`smartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smartmap/meta.yaml>`_

   


.. conda:package:: smartmap

   |downloads_smartmap| |docker_smartmap|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends bowtie2: 
   :depends hisat2: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=3.8.5``
   :depends samtools: ``>=1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smartmap

   and update with::

      conda update smartmap

   or use the docker container::

      docker pull quay.io/biocontainers/smartmap:<tag>

   (see `smartmap/tags`_ for valid values for ``<tag>``)


.. |downloads_smartmap| image:: https://img.shields.io/conda/dn/bioconda/smartmap.svg?style=flat
   :target: https://anaconda.org/bioconda/smartmap
   :alt:   (downloads)
.. |docker_smartmap| image:: https://quay.io/repository/biocontainers/smartmap/status
   :target: https://quay.io/repository/biocontainers/smartmap
.. _`smartmap/tags`: https://quay.io/repository/biocontainers/smartmap?tab=tags


.. raw:: html

    <script>
        var package = "smartmap";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smartmap/README.html