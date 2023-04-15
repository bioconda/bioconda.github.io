:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annotsv'
.. highlight: bash

annotsv
=======

.. conda:recipe:: annotsv
   :replaces_section_title:
   :noindex:

   Annotation and Ranking of Structural Variation

   :homepage: https://github.com/lgmgeo/AnnotSV
   :license: GPL-3.0
   :recipe: /`annotsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annotsv/meta.yaml>`_

   


.. conda:package:: annotsv

   |downloads_annotsv| |docker_annotsv|

   :versions:
      
      

      ``3.3.5-0``,  ``3.3.4-1``,  ``3.3.4-0``

      

   
   :depends bcftools: ``>=1.10``
   :depends bedtools: ``>=2.25``
   :depends coreutils: 
   :depends curl: 
   :depends natsort: ``>=7.1.1``
   :depends openjdk: ``>=8``
   :depends pandas: ``>=1.5.2``
   :depends pyfaidx: ``>=0.7.1``
   :depends python: ``>=3.8``
   :depends tk: ``>=8.6.12,<8.7.0a0``
   :depends tqdm: ``>=4.64.1``
   :depends unzip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install annotsv

   and update with::

      conda update annotsv

   or use the docker container::

      docker pull quay.io/biocontainers/annotsv:<tag>

   (see `annotsv/tags`_ for valid values for ``<tag>``)


.. |downloads_annotsv| image:: https://img.shields.io/conda/dn/bioconda/annotsv.svg?style=flat
   :target: https://anaconda.org/bioconda/annotsv
   :alt:   (downloads)
.. |docker_annotsv| image:: https://quay.io/repository/biocontainers/annotsv/status
   :target: https://quay.io/repository/biocontainers/annotsv
.. _`annotsv/tags`: https://quay.io/repository/biocontainers/annotsv?tab=tags


.. raw:: html

    <script>
        var package = "annotsv";
        var versions = ["3.3.5","3.3.4","3.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annotsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annotsv/README.html