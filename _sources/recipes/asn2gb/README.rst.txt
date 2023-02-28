:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'asn2gb'
.. highlight: bash

asn2gb
======

.. conda:recipe:: asn2gb
   :replaces_section_title:
   :noindex:

   asn2gb converts ASN1 format sequence records to Genbank format

   :homepage: https://www.ncbi.nlm.nih.gov/IEB/ToolBox/C_DOC/lxr/source/doc/asn2gb.txt
   :license: Public Domain
   :recipe: /`asn2gb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asn2gb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asn2gb/meta.yaml>`_

   


.. conda:package:: asn2gb

   |downloads_asn2gb| |docker_asn2gb|

   :versions:
      
      

      ``18.2-3``,  ``18.2-2``,  ``18.2-1``,  ``18.2-0``

      

   
   :depends libidn11: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install asn2gb

   and update with::

      conda update asn2gb

   or use the docker container::

      docker pull quay.io/biocontainers/asn2gb:<tag>

   (see `asn2gb/tags`_ for valid values for ``<tag>``)


.. |downloads_asn2gb| image:: https://img.shields.io/conda/dn/bioconda/asn2gb.svg?style=flat
   :target: https://anaconda.org/bioconda/asn2gb
   :alt:   (downloads)
.. |docker_asn2gb| image:: https://quay.io/repository/biocontainers/asn2gb/status
   :target: https://quay.io/repository/biocontainers/asn2gb
.. _`asn2gb/tags`: https://quay.io/repository/biocontainers/asn2gb?tab=tags


.. raw:: html

    <script>
        var package = "asn2gb";
        var versions = ["18.2","18.2","18.2","18.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asn2gb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asn2gb/README.html