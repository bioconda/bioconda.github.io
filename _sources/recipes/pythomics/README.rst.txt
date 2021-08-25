:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pythomics'
.. highlight: bash

pythomics
=========

.. conda:recipe:: pythomics
   :replaces_section_title:
   :noindex:

   A multi\-omic python package

   :homepage: https://github.com/pandeylab/pythomics
   :license: GPL3 / GPL3
   :recipe: /`pythomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pythomics/meta.yaml>`_

   


.. conda:package:: pythomics

   |downloads_pythomics| |docker_pythomics|

   :versions:
      
      

      ``0.3.46-2``,  ``0.3.46-1``,  ``0.3.46-0``,  ``0.3.42-1``,  ``0.3.42-0``,  ``0.3.40-0``

      

   
   :depends lxml: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pythomics

   and update with::

      conda update pythomics

   or use the docker container::

      docker pull quay.io/biocontainers/pythomics:<tag>

   (see `pythomics/tags`_ for valid values for ``<tag>``)


.. |downloads_pythomics| image:: https://img.shields.io/conda/dn/bioconda/pythomics.svg?style=flat
   :target: https://anaconda.org/bioconda/pythomics
   :alt:   (downloads)
.. |docker_pythomics| image:: https://quay.io/repository/biocontainers/pythomics/status
   :target: https://quay.io/repository/biocontainers/pythomics
.. _`pythomics/tags`: https://quay.io/repository/biocontainers/pythomics?tab=tags


.. raw:: html

    <script>
        var package = "pythomics";
        var versions = ["0.3.46","0.3.46","0.3.46","0.3.42","0.3.42"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pythomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pythomics/README.html