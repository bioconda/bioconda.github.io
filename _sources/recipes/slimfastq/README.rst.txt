:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slimfastq'
.. highlight: bash

slimfastq
=========

.. conda:recipe:: slimfastq
   :replaces_section_title:
   :noindex:

   slimfastq would efficiently compresses\/decompresses fastq files

   :homepage: https://github.com/Infinidat/slimfastq
   :license: BSD-3-Clause
   :recipe: /`slimfastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimfastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimfastq/meta.yaml>`_

   


.. conda:package:: slimfastq

   |downloads_slimfastq| |docker_slimfastq|

   :versions:
      
      

      ``2.04-4``,  ``2.04-3``,  ``2.04-2``,  ``2.04-1``,  ``2.04-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slimfastq

   and update with::

      conda update slimfastq

   or use the docker container::

      docker pull quay.io/biocontainers/slimfastq:<tag>

   (see `slimfastq/tags`_ for valid values for ``<tag>``)


.. |downloads_slimfastq| image:: https://img.shields.io/conda/dn/bioconda/slimfastq.svg?style=flat
   :target: https://anaconda.org/bioconda/slimfastq
   :alt:   (downloads)
.. |docker_slimfastq| image:: https://quay.io/repository/biocontainers/slimfastq/status
   :target: https://quay.io/repository/biocontainers/slimfastq
.. _`slimfastq/tags`: https://quay.io/repository/biocontainers/slimfastq?tab=tags


.. raw:: html

    <script>
        var package = "slimfastq";
        var versions = ["2.04","2.04","2.04","2.04","2.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slimfastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slimfastq/README.html