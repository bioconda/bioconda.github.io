:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tower-cli'
.. highlight: bash

tower-cli
=========

.. conda:recipe:: tower-cli
   :replaces_section_title:
   :noindex:

   The Tower CLI an interface to Nextflow Tower via the CLI

   :homepage: https://github.com/seqeralabs/tower-cli
   :license: MPL-2.0
   :recipe: /`tower-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tower-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tower-cli/meta.yaml>`_

   


.. conda:package:: tower-cli

   |downloads_tower-cli| |docker_tower-cli|

   :versions:
      
      

      ``0.8.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tower-cli

   and update with::

      conda update tower-cli

   or use the docker container::

      docker pull quay.io/biocontainers/tower-cli:<tag>

   (see `tower-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_tower-cli| image:: https://img.shields.io/conda/dn/bioconda/tower-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/tower-cli
   :alt:   (downloads)
.. |docker_tower-cli| image:: https://quay.io/repository/biocontainers/tower-cli/status
   :target: https://quay.io/repository/biocontainers/tower-cli
.. _`tower-cli/tags`: https://quay.io/repository/biocontainers/tower-cli?tab=tags


.. raw:: html

    <script>
        var package = "tower-cli";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tower-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tower-cli/README.html