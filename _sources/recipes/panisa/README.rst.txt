:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panisa'
.. highlight: bash

panisa
======

.. conda:recipe:: panisa
   :replaces_section_title:
   :noindex:

   panISa is a software to search insertion sequence \(IS\) on resequencing data \(bam file\)

   :homepage: https://github.com/bvalot/panISa
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`panisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panisa/meta.yaml>`_

   


.. conda:package:: panisa

   |downloads_panisa| |docker_panisa|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends pysam: ``>=0.9``
   :depends python: 
   :depends requests: ``>=2.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panisa

   and update with::

      conda update panisa

   or use the docker container::

      docker pull quay.io/biocontainers/panisa:<tag>

   (see `panisa/tags`_ for valid values for ``<tag>``)


.. |downloads_panisa| image:: https://img.shields.io/conda/dn/bioconda/panisa.svg?style=flat
   :target: https://anaconda.org/bioconda/panisa
   :alt:   (downloads)
.. |docker_panisa| image:: https://quay.io/repository/biocontainers/panisa/status
   :target: https://quay.io/repository/biocontainers/panisa
.. _`panisa/tags`: https://quay.io/repository/biocontainers/panisa?tab=tags


.. raw:: html

    <script>
        var package = "panisa";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panisa/README.html