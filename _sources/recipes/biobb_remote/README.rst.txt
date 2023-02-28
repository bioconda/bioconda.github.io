:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_remote'
.. highlight: bash

biobb_remote
============

.. conda:recipe:: biobb_remote
   :replaces_section_title:
   :noindex:

   Biobb\_remote is the Biobb module for remote execution via ssl.

   :homepage: https://github.com/bioexcel/biobb_remote
   :license: APACHE / Apache Software License
   :recipe: /`biobb_remote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_remote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_remote/meta.yaml>`_

   


.. conda:package:: biobb_remote

   |downloads_biobb_remote| |docker_biobb_remote|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends paramiko: ``2.7.2``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_remote

   and update with::

      conda update biobb_remote

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_remote:<tag>

   (see `biobb_remote/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_remote| image:: https://img.shields.io/conda/dn/bioconda/biobb_remote.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_remote
   :alt:   (downloads)
.. |docker_biobb_remote| image:: https://quay.io/repository/biocontainers/biobb_remote/status
   :target: https://quay.io/repository/biocontainers/biobb_remote
.. _`biobb_remote/tags`: https://quay.io/repository/biocontainers/biobb_remote?tab=tags


.. raw:: html

    <script>
        var package = "biobb_remote";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_remote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_remote/README.html