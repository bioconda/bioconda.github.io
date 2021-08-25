:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bindash'
.. highlight: bash

bindash
=======

.. conda:recipe:: bindash
   :replaces_section_title:
   :noindex:

   Fast and precise comparison of genomes and metagenomes \(in the order of terabytes\) on a typical personal laptop

   :homepage: https://github.com/zhaoxiaofei/bindash
   :license: APACHE / Apache-2.0
   :recipe: /`bindash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bindash/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pgen.1007758`

   


.. conda:package:: bindash

   |downloads_bindash| |docker_bindash|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bindash

   and update with::

      conda update bindash

   or use the docker container::

      docker pull quay.io/biocontainers/bindash:<tag>

   (see `bindash/tags`_ for valid values for ``<tag>``)


.. |downloads_bindash| image:: https://img.shields.io/conda/dn/bioconda/bindash.svg?style=flat
   :target: https://anaconda.org/bioconda/bindash
   :alt:   (downloads)
.. |docker_bindash| image:: https://quay.io/repository/biocontainers/bindash/status
   :target: https://quay.io/repository/biocontainers/bindash
.. _`bindash/tags`: https://quay.io/repository/biocontainers/bindash?tab=tags


.. raw:: html

    <script>
        var package = "bindash";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bindash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bindash/README.html