:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scepia'
.. highlight: bash

scepia
======

.. conda:recipe:: scepia
   :replaces_section_title:
   :noindex:

   Single Cell Epigenome\-based Inference of Activity

   :homepage: https://github.com/vanheeringen-lab/scepia
   :license: MIT / MIT
   :recipe: /`scepia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia/meta.yaml>`_
   :links: biotools: :biotools:`scepia`

   


.. conda:package:: scepia

   |downloads_scepia| |docker_scepia|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends adjusttext: 
   :depends geosketch: 
   :depends gimmemotifs: ``>=0.15.2,<=0.17.1``
   :depends leidenalg: 
   :depends loguru: 
   :depends louvain: 
   :depends python: ``>=3.7``
   :depends scanpy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scepia

   and update with::

      conda update scepia

   or use the docker container::

      docker pull quay.io/biocontainers/scepia:<tag>

   (see `scepia/tags`_ for valid values for ``<tag>``)


.. |downloads_scepia| image:: https://img.shields.io/conda/dn/bioconda/scepia.svg?style=flat
   :target: https://anaconda.org/bioconda/scepia
   :alt:   (downloads)
.. |docker_scepia| image:: https://quay.io/repository/biocontainers/scepia/status
   :target: https://quay.io/repository/biocontainers/scepia
.. _`scepia/tags`: https://quay.io/repository/biocontainers/scepia?tab=tags


.. raw:: html

    <script>
        var package = "scepia";
        var versions = ["0.5.1","0.5.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scepia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scepia/README.html