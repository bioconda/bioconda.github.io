:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydmtools'
.. highlight: bash

pydmtools
=========

.. conda:recipe:: pydmtools
   :replaces_section_title:
   :noindex:

   A python extension written in C for quick access to DNA methylation DM files.

   :homepage: https://github.com/ZhouQiangwei/pydmtools
   :license: MIT
   :recipe: /`pydmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydmtools/meta.yaml>`_

   


.. conda:package:: pydmtools

   |downloads_pydmtools| |docker_pydmtools|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydmtools

   and update with::

      conda update pydmtools

   or use the docker container::

      docker pull quay.io/biocontainers/pydmtools:<tag>

   (see `pydmtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pydmtools| image:: https://img.shields.io/conda/dn/bioconda/pydmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pydmtools
   :alt:   (downloads)
.. |docker_pydmtools| image:: https://quay.io/repository/biocontainers/pydmtools/status
   :target: https://quay.io/repository/biocontainers/pydmtools
.. _`pydmtools/tags`: https://quay.io/repository/biocontainers/pydmtools?tab=tags


.. raw:: html

    <script>
        var package = "pydmtools";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydmtools/README.html