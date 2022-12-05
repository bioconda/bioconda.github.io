:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kingfisher'
.. highlight: bash

kingfisher
==========

.. conda:recipe:: kingfisher
   :replaces_section_title:
   :noindex:

   Download\/extract biological FASTA\/Q read data and metadata

   :homepage: https://github.com/wwood/kingfisher-download
   :license: GPL-3.0-or-later
   :recipe: /`kingfisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kingfisher/meta.yaml>`_

   


.. conda:package:: kingfisher

   |downloads_kingfisher| |docker_kingfisher|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends aria2: ``>=1.36.0``
   :depends awscli: 
   :depends bird_tool_utils_python: ``>=0.4.1``
   :depends curl: 
   :depends extern: 
   :depends pandas: 
   :depends pigz: 
   :depends pyarrow: 
   :depends python: 
   :depends requests: 
   :depends sra-tools: 
   :depends sracat: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kingfisher

   and update with::

      conda update kingfisher

   or use the docker container::

      docker pull quay.io/biocontainers/kingfisher:<tag>

   (see `kingfisher/tags`_ for valid values for ``<tag>``)


.. |downloads_kingfisher| image:: https://img.shields.io/conda/dn/bioconda/kingfisher.svg?style=flat
   :target: https://anaconda.org/bioconda/kingfisher
   :alt:   (downloads)
.. |docker_kingfisher| image:: https://quay.io/repository/biocontainers/kingfisher/status
   :target: https://quay.io/repository/biocontainers/kingfisher
.. _`kingfisher/tags`: https://quay.io/repository/biocontainers/kingfisher?tab=tags


.. raw:: html

    <script>
        var package = "kingfisher";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kingfisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kingfisher/README.html