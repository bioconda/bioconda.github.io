:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paragraph'
.. highlight: bash

paragraph
=========

.. conda:recipe:: paragraph
   :replaces_section_title:
   :noindex:

   Graph realignment tools for structural variants

   :homepage: https://github.com/Illumina/paragraph
   :license: Apache License 2.0
   :recipe: /`paragraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragraph/meta.yaml>`_

   


.. conda:package:: paragraph

   |downloads_paragraph| |docker_paragraph|

   :versions:
      
      

      ``2.3-1``,  ``2.3-0``,  ``2.2b-0``,  ``2.2a-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends intervaltree: 
   :depends jsonschema: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pysam: 
   :depends python: ``>=3``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paragraph

   and update with::

      conda update paragraph

   or use the docker container::

      docker pull quay.io/biocontainers/paragraph:<tag>

   (see `paragraph/tags`_ for valid values for ``<tag>``)


.. |downloads_paragraph| image:: https://img.shields.io/conda/dn/bioconda/paragraph.svg?style=flat
   :target: https://anaconda.org/bioconda/paragraph
   :alt:   (downloads)
.. |docker_paragraph| image:: https://quay.io/repository/biocontainers/paragraph/status
   :target: https://quay.io/repository/biocontainers/paragraph
.. _`paragraph/tags`: https://quay.io/repository/biocontainers/paragraph?tab=tags


.. raw:: html

    <script>
        var package = "paragraph";
        var versions = ["2.3","2.3","2.2b","2.2a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paragraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paragraph/README.html