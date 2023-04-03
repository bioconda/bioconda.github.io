:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralflye'
.. highlight: bash

viralflye
=========

.. conda:recipe:: viralflye
   :replaces_section_title:
   :noindex:

   viralFlye is a pipeline to recover high\-quality viral genomes from long\-read metagenomic sequencing.

   :homepage: https://github.com/Dmitry-Antipov/viralFlye/
   :license: BSD-3-Clause
   :recipe: /`viralflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralflye/meta.yaml>`_

   


.. conda:package:: viralflye

   |downloads_viralflye| |docker_viralflye|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install viralflye

   and update with::

      conda update viralflye

   or use the docker container::

      docker pull quay.io/biocontainers/viralflye:<tag>

   (see `viralflye/tags`_ for valid values for ``<tag>``)


.. |downloads_viralflye| image:: https://img.shields.io/conda/dn/bioconda/viralflye.svg?style=flat
   :target: https://anaconda.org/bioconda/viralflye
   :alt:   (downloads)
.. |docker_viralflye| image:: https://quay.io/repository/biocontainers/viralflye/status
   :target: https://quay.io/repository/biocontainers/viralflye
.. _`viralflye/tags`: https://quay.io/repository/biocontainers/viralflye?tab=tags


.. raw:: html

    <script>
        var package = "viralflye";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralflye/README.html