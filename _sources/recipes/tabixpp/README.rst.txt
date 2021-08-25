:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabixpp'
.. highlight: bash

tabixpp
=======

.. conda:recipe:: tabixpp
   :replaces_section_title:
   :noindex:

   This is a C\+\+ wrapper around tabix project which abstracts some of the details of opening and jumping in tabix\-indexed files.

   :homepage: https://github.com/ekg/tabixpp
   :license: MIT / MIT
   :recipe: /`tabixpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabixpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabixpp/meta.yaml>`_
   :links: biotools: :biotools:`tabixpp`

   


.. conda:package:: tabixpp

   |downloads_tabixpp| |docker_tabixpp|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends bc: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends samtools: 
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tabixpp

   and update with::

      conda update tabixpp

   or use the docker container::

      docker pull quay.io/biocontainers/tabixpp:<tag>

   (see `tabixpp/tags`_ for valid values for ``<tag>``)


.. |downloads_tabixpp| image:: https://img.shields.io/conda/dn/bioconda/tabixpp.svg?style=flat
   :target: https://anaconda.org/bioconda/tabixpp
   :alt:   (downloads)
.. |docker_tabixpp| image:: https://quay.io/repository/biocontainers/tabixpp/status
   :target: https://quay.io/repository/biocontainers/tabixpp
.. _`tabixpp/tags`: https://quay.io/repository/biocontainers/tabixpp?tab=tags


.. raw:: html

    <script>
        var package = "tabixpp";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabixpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabixpp/README.html