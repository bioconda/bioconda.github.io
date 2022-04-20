:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parse_mito_blast'
.. highlight: bash

parse_mito_blast
================

.. conda:recipe:: parse_mito_blast
   :replaces_section_title:
   :noindex:

   Filtering blast out from querying assembly against mitochondrial database.

   :homepage: https://github.com/VGP/vgp-assembly/tree/master/pipeline/VGP_decontamination_pipe
   :license: MIT
   :recipe: /`parse_mito_blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse_mito_blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse_mito_blast/meta.yaml>`_

   


.. conda:package:: parse_mito_blast

   |downloads_parse_mito_blast| |docker_parse_mito_blast|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parse_mito_blast

   and update with::

      conda update parse_mito_blast

   or use the docker container::

      docker pull quay.io/biocontainers/parse_mito_blast:<tag>

   (see `parse_mito_blast/tags`_ for valid values for ``<tag>``)


.. |downloads_parse_mito_blast| image:: https://img.shields.io/conda/dn/bioconda/parse_mito_blast.svg?style=flat
   :target: https://anaconda.org/bioconda/parse_mito_blast
   :alt:   (downloads)
.. |docker_parse_mito_blast| image:: https://quay.io/repository/biocontainers/parse_mito_blast/status
   :target: https://quay.io/repository/biocontainers/parse_mito_blast
.. _`parse_mito_blast/tags`: https://quay.io/repository/biocontainers/parse_mito_blast?tab=tags


.. raw:: html

    <script>
        var package = "parse_mito_blast";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parse_mito_blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parse_mito_blast/README.html