:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rd-analyzer'
.. highlight: bash

rd-analyzer
===========

.. conda:recipe:: rd-analyzer
   :replaces_section_title:
   :noindex:

   In silico region of difference \(RD\) analysis of Mycobacterium tuberculosis complex from sequence reads

   :homepage: https://github.com/xiaeryu/RD-Analyzer
   :license: GPL / GPL-3
   :recipe: /`rd-analyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rd-analyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rd-analyzer/meta.yaml>`_

   


.. conda:package:: rd-analyzer

   |downloads_rd-analyzer| |docker_rd-analyzer|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends bwa: ``0.7.17``
   :depends python: ``<3``
   :depends samtools: ``0.1.19``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rd-analyzer

   and update with::

      conda update rd-analyzer

   or use the docker container::

      docker pull quay.io/biocontainers/rd-analyzer:<tag>

   (see `rd-analyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_rd-analyzer| image:: https://img.shields.io/conda/dn/bioconda/rd-analyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/rd-analyzer
   :alt:   (downloads)
.. |docker_rd-analyzer| image:: https://quay.io/repository/biocontainers/rd-analyzer/status
   :target: https://quay.io/repository/biocontainers/rd-analyzer
.. _`rd-analyzer/tags`: https://quay.io/repository/biocontainers/rd-analyzer?tab=tags


.. raw:: html

    <script>
        var package = "rd-analyzer";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rd-analyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rd-analyzer/README.html