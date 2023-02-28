:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snapgene-reader'
.. highlight: bash

snapgene-reader
===============

.. conda:recipe:: snapgene-reader
   :replaces_section_title:
   :noindex:

   Convert Snapgene \*.dna files dict\/json\/biopython.

   :homepage: https://pypi.org/project/snapgene-reader/
   :license: MIT
   :recipe: /`snapgene-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snapgene-reader/meta.yaml>`_

   


.. conda:package:: snapgene-reader

   |downloads_snapgene-reader| |docker_snapgene-reader|

   :versions:
      
      

      ``0.1.20-0``

      

   
   :depends biopython: 
   :depends html2text: 
   :depends python: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snapgene-reader

   and update with::

      conda update snapgene-reader

   or use the docker container::

      docker pull quay.io/biocontainers/snapgene-reader:<tag>

   (see `snapgene-reader/tags`_ for valid values for ``<tag>``)


.. |downloads_snapgene-reader| image:: https://img.shields.io/conda/dn/bioconda/snapgene-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/snapgene-reader
   :alt:   (downloads)
.. |docker_snapgene-reader| image:: https://quay.io/repository/biocontainers/snapgene-reader/status
   :target: https://quay.io/repository/biocontainers/snapgene-reader
.. _`snapgene-reader/tags`: https://quay.io/repository/biocontainers/snapgene-reader?tab=tags


.. raw:: html

    <script>
        var package = "snapgene-reader";
        var versions = ["0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snapgene-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snapgene-reader/README.html