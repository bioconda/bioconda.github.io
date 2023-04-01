:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastquast'
.. highlight: bash

fastquast
=========

.. conda:recipe:: fastquast
   :replaces_section_title:
   :noindex:

   Fast and simple Quality Assessment Tool for Large Genomes

   :homepage: https://github.com/aglabx/fastQuast
   :documentation: https://github.com/aglabx/fastQuast/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`fastquast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastquast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastquast/meta.yaml>`_

   


.. conda:package:: fastquast

   |downloads_fastquast| |docker_fastquast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastquast

   and update with::

      conda update fastquast

   or use the docker container::

      docker pull quay.io/biocontainers/fastquast:<tag>

   (see `fastquast/tags`_ for valid values for ``<tag>``)


.. |downloads_fastquast| image:: https://img.shields.io/conda/dn/bioconda/fastquast.svg?style=flat
   :target: https://anaconda.org/bioconda/fastquast
   :alt:   (downloads)
.. |docker_fastquast| image:: https://quay.io/repository/biocontainers/fastquast/status
   :target: https://quay.io/repository/biocontainers/fastquast
.. _`fastquast/tags`: https://quay.io/repository/biocontainers/fastquast?tab=tags


.. raw:: html

    <script>
        var package = "fastquast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastquast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastquast/README.html