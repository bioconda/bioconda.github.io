:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifiasm_meta'
.. highlight: bash

hifiasm_meta
============

.. conda:recipe:: hifiasm_meta
   :replaces_section_title:
   :noindex:

   Metagenome assembler for Hifi reads\, based on hifiasm.

   :homepage: https://github.com/xfengnefx/hifiasm-meta
   :license: MIT
   :recipe: /`hifiasm_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifiasm_meta/meta.yaml>`_

   


.. conda:package:: hifiasm_meta

   |downloads_hifiasm_meta| |docker_hifiasm_meta|

   :versions:
      
      

      ``hamtv0.3.1-0``,  ``hamtv0.3-1``,  ``hamtv0.3-0``,  ``hamtv0.2.2-1``,  ``hamtv0.2.2-0``,  ``hamtv0.2-0``,  ``hamtv0.1-1``,  ``hamtv0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hifiasm_meta

   and update with::

      conda update hifiasm_meta

   or use the docker container::

      docker pull quay.io/biocontainers/hifiasm_meta:<tag>

   (see `hifiasm_meta/tags`_ for valid values for ``<tag>``)


.. |downloads_hifiasm_meta| image:: https://img.shields.io/conda/dn/bioconda/hifiasm_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/hifiasm_meta
   :alt:   (downloads)
.. |docker_hifiasm_meta| image:: https://quay.io/repository/biocontainers/hifiasm_meta/status
   :target: https://quay.io/repository/biocontainers/hifiasm_meta
.. _`hifiasm_meta/tags`: https://quay.io/repository/biocontainers/hifiasm_meta?tab=tags


.. raw:: html

    <script>
        var package = "hifiasm_meta";
        var versions = ["hamtv0.3.1","hamtv0.3","hamtv0.3","hamtv0.2.2","hamtv0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifiasm_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifiasm_meta/README.html