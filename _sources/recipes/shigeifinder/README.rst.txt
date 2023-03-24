:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shigeifinder'
.. highlight: bash

shigeifinder
============

.. conda:recipe:: shigeifinder
   :replaces_section_title:
   :noindex:

   Cluster informed Shigella and EIEC serotyping tool from Illumina reads and assemblies

   :homepage: https://github.com/LanLab/ShigEiFinder
   :license: GPL3
   :recipe: /`shigeifinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shigeifinder/meta.yaml>`_

   


.. conda:package:: shigeifinder

   |downloads_shigeifinder| |docker_shigeifinder|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends bwa: ``>=0.7.17``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shigeifinder

   and update with::

      conda update shigeifinder

   or use the docker container::

      docker pull quay.io/biocontainers/shigeifinder:<tag>

   (see `shigeifinder/tags`_ for valid values for ``<tag>``)


.. |downloads_shigeifinder| image:: https://img.shields.io/conda/dn/bioconda/shigeifinder.svg?style=flat
   :target: https://anaconda.org/bioconda/shigeifinder
   :alt:   (downloads)
.. |docker_shigeifinder| image:: https://quay.io/repository/biocontainers/shigeifinder/status
   :target: https://quay.io/repository/biocontainers/shigeifinder
.. _`shigeifinder/tags`: https://quay.io/repository/biocontainers/shigeifinder?tab=tags


.. raw:: html

    <script>
        var package = "shigeifinder";
        var versions = ["1.3.4","1.3.3","1.3.2","1.3.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shigeifinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shigeifinder/README.html