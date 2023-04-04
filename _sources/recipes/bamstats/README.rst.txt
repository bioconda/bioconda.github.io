:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamstats'
.. highlight: bash

bamstats
========

.. conda:recipe:: bamstats
   :replaces_section_title:
   :noindex:

   A command line tool to compute mapping statistics from a BAM file

   :homepage: https://github.com/guigolab/bamstats
   :license: BSD-3-Clause
   :recipe: /`bamstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamstats/meta.yaml>`_

   


.. conda:package:: bamstats

   |downloads_bamstats| |docker_bamstats|

   :versions:
      
      

      ``0.3.5-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamstats

   and update with::

      conda update bamstats

   or use the docker container::

      docker pull quay.io/biocontainers/bamstats:<tag>

   (see `bamstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bamstats| image:: https://img.shields.io/conda/dn/bioconda/bamstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bamstats
   :alt:   (downloads)
.. |docker_bamstats| image:: https://quay.io/repository/biocontainers/bamstats/status
   :target: https://quay.io/repository/biocontainers/bamstats
.. _`bamstats/tags`: https://quay.io/repository/biocontainers/bamstats?tab=tags


.. raw:: html

    <script>
        var package = "bamstats";
        var versions = ["0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamstats/README.html