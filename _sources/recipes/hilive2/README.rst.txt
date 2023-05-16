:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hilive2'
.. highlight: bash

hilive2
=======

.. conda:recipe:: hilive2
   :replaces_section_title:
   :noindex:

   Tool for real\-time read alignment of Illumina sequencing data

   :homepage: https://gitlab.com/rki_bioinformatics/HiLive2
   :license: BSD / BSD-3-Clause
   :recipe: /`hilive2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilive2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilive2/meta.yaml>`_

   


.. conda:package:: hilive2

   |downloads_hilive2| |docker_hilive2|

   :versions:
      
      

      ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``2.0a-2``,  ``2.0a-1``,  ``2.0a-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends lz4-c: ``>=1.9.3,<1.10.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hilive2

   and update with::

      conda update hilive2

   or use the docker container::

      docker pull quay.io/biocontainers/hilive2:<tag>

   (see `hilive2/tags`_ for valid values for ``<tag>``)


.. |downloads_hilive2| image:: https://img.shields.io/conda/dn/bioconda/hilive2.svg?style=flat
   :target: https://anaconda.org/bioconda/hilive2
   :alt:   (downloads)
.. |docker_hilive2| image:: https://quay.io/repository/biocontainers/hilive2/status
   :target: https://quay.io/repository/biocontainers/hilive2
.. _`hilive2/tags`: https://quay.io/repository/biocontainers/hilive2?tab=tags


.. raw:: html

    <script>
        var package = "hilive2";
        var versions = ["2.0","2.0","2.0","2.0","2.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hilive2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hilive2/README.html