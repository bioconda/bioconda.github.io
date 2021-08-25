:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multivcfanalyzer'
.. highlight: bash

multivcfanalyzer
================

.. conda:recipe:: multivcfanalyzer
   :replaces_section_title:
   :noindex:

   MultiVCFAnalyzer is a VCF file post\-processing tool tailored for aDNA. License on Github repository.

   :homepage: https://github.com/alexherbig/MultiVCFAnalyzer
   :license: GPL >=3
   :recipe: /`multivcfanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multivcfanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multivcfanalyzer/meta.yaml>`_

   


.. conda:package:: multivcfanalyzer

   |downloads_multivcfanalyzer| |docker_multivcfanalyzer|

   :versions:
      
      

      ``0.85.2-1``,  ``0.85.2-0``,  ``0.85.1-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install multivcfanalyzer

   and update with::

      conda update multivcfanalyzer

   or use the docker container::

      docker pull quay.io/biocontainers/multivcfanalyzer:<tag>

   (see `multivcfanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_multivcfanalyzer| image:: https://img.shields.io/conda/dn/bioconda/multivcfanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/multivcfanalyzer
   :alt:   (downloads)
.. |docker_multivcfanalyzer| image:: https://quay.io/repository/biocontainers/multivcfanalyzer/status
   :target: https://quay.io/repository/biocontainers/multivcfanalyzer
.. _`multivcfanalyzer/tags`: https://quay.io/repository/biocontainers/multivcfanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "multivcfanalyzer";
        var versions = ["0.85.2","0.85.2","0.85.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multivcfanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multivcfanalyzer/README.html