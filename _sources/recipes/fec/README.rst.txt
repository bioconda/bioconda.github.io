:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fec'
.. highlight: bash

fec
===

.. conda:recipe:: fec
   :replaces_section_title:
   :noindex:

   An error correction tool

   :homepage: https://github.com/zhangjuncsu/Fec
   :license: MIT
   :recipe: /`fec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fec/meta.yaml>`_

   


.. conda:package:: fec

   |downloads_fec| |docker_fec|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: ``>=2.17``
   :depends python: ``>=3.6``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fec

   and update with::

      conda update fec

   or use the docker container::

      docker pull quay.io/biocontainers/fec:<tag>

   (see `fec/tags`_ for valid values for ``<tag>``)


.. |downloads_fec| image:: https://img.shields.io/conda/dn/bioconda/fec.svg?style=flat
   :target: https://anaconda.org/bioconda/fec
   :alt:   (downloads)
.. |docker_fec| image:: https://quay.io/repository/biocontainers/fec/status
   :target: https://quay.io/repository/biocontainers/fec
.. _`fec/tags`: https://quay.io/repository/biocontainers/fec?tab=tags


.. raw:: html

    <script>
        var package = "fec";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fec/README.html