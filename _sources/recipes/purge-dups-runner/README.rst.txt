:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge-dups-runner'
.. highlight: bash

purge-dups-runner
=================

.. conda:recipe:: purge-dups-runner
   :replaces_section_title:
   :noindex:

   High Performance Cluster \(HPC\) runner.

   :homepage: https://github.com/dfguan/runner
   :license: MIT / MIT
   :recipe: /`purge-dups-runner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge-dups-runner/meta.yaml>`_

   


.. conda:package:: purge-dups-runner

   |downloads_purge-dups-runner| |docker_purge-dups-runner|

   :versions:
      
      

      ``2019.12.20-0``

      

   
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install purge-dups-runner

   and update with::

      conda update purge-dups-runner

   or use the docker container::

      docker pull quay.io/biocontainers/purge-dups-runner:<tag>

   (see `purge-dups-runner/tags`_ for valid values for ``<tag>``)


.. |downloads_purge-dups-runner| image:: https://img.shields.io/conda/dn/bioconda/purge-dups-runner.svg?style=flat
   :target: https://anaconda.org/bioconda/purge-dups-runner
   :alt:   (downloads)
.. |docker_purge-dups-runner| image:: https://quay.io/repository/biocontainers/purge-dups-runner/status
   :target: https://quay.io/repository/biocontainers/purge-dups-runner
.. _`purge-dups-runner/tags`: https://quay.io/repository/biocontainers/purge-dups-runner?tab=tags


.. raw:: html

    <script>
        var package = "purge-dups-runner";
        var versions = ["2019.12.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge-dups-runner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge-dups-runner/README.html