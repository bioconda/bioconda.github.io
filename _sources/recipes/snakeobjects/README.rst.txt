:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakeobjects'
.. highlight: bash

snakeobjects
============

.. conda:recipe:: snakeobjects
   :replaces_section_title:
   :noindex:

   Snakeobjects\, an object\-oriented workflow management system based on snakemake

   :homepage: https://github.com/iossifovlab/snakeobjects
   :license: MIT
   :recipe: /`snakeobjects <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeobjects>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeobjects/meta.yaml>`_

   


.. conda:package:: snakeobjects

   |downloads_snakeobjects| |docker_snakeobjects|

   :versions:
      
      

      ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends python: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakeobjects

   and update with::

      conda update snakeobjects

   or use the docker container::

      docker pull quay.io/biocontainers/snakeobjects:<tag>

   (see `snakeobjects/tags`_ for valid values for ``<tag>``)


.. |downloads_snakeobjects| image:: https://img.shields.io/conda/dn/bioconda/snakeobjects.svg?style=flat
   :target: https://anaconda.org/bioconda/snakeobjects
   :alt:   (downloads)
.. |docker_snakeobjects| image:: https://quay.io/repository/biocontainers/snakeobjects/status
   :target: https://quay.io/repository/biocontainers/snakeobjects
.. _`snakeobjects/tags`: https://quay.io/repository/biocontainers/snakeobjects?tab=tags


.. raw:: html

    <script>
        var package = "snakeobjects";
        var versions = ["3.0.4","3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeobjects/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeobjects/README.html