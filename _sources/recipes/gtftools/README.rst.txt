:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtftools'
.. highlight: bash

gtftools
========

.. conda:recipe:: gtftools
   :replaces_section_title:
   :noindex:

   gtftools provides a set of functions to compute or extract various features of gene models.

   :homepage: https://github.com/RacconC/gtftools
   :documentation: https://pypi.org/project/gtftools
   
   :license: MIT
   :recipe: /`gtftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtftools/meta.yaml>`_

   


.. conda:package:: gtftools

   |downloads_gtftools| |docker_gtftools|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends numpy: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gtftools

   and update with::

      conda update gtftools

   or use the docker container::

      docker pull quay.io/biocontainers/gtftools:<tag>

   (see `gtftools/tags`_ for valid values for ``<tag>``)


.. |downloads_gtftools| image:: https://img.shields.io/conda/dn/bioconda/gtftools.svg?style=flat
   :target: https://anaconda.org/bioconda/gtftools
   :alt:   (downloads)
.. |docker_gtftools| image:: https://quay.io/repository/biocontainers/gtftools/status
   :target: https://quay.io/repository/biocontainers/gtftools
.. _`gtftools/tags`: https://quay.io/repository/biocontainers/gtftools?tab=tags


.. raw:: html

    <script>
        var package = "gtftools";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtftools/README.html