:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pxblat'
.. highlight: bash

pxblat
======

.. conda:recipe:: pxblat
   :replaces_section_title:
   :noindex:

   PxBLAT\: An Efficient and Ergonomics Python Binding Library for BLAT.

   :homepage: https://pypi.org/project/pxblat/
   :documentation: https://pxblat.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/cauliyang/pxblat
   :license: MIT
   :recipe: /`pxblat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pxblat/meta.yaml>`_

   


.. conda:package:: pxblat

   |downloads_pxblat| |docker_pxblat|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biopython: 
   :depends deprecated: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends loguru: 
   :depends mashumaro: 
   :depends numpy: ``>=1.24.3``
   :depends openssl: ``>=3.1.1,<4.0a0``
   :depends pysimdjson: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rich: 
   :depends typer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pxblat

   and update with::

      conda update pxblat

   or use the docker container::

      docker pull quay.io/biocontainers/pxblat:<tag>

   (see `pxblat/tags`_ for valid values for ``<tag>``)


.. |downloads_pxblat| image:: https://img.shields.io/conda/dn/bioconda/pxblat.svg?style=flat
   :target: https://anaconda.org/bioconda/pxblat
   :alt:   (downloads)
.. |docker_pxblat| image:: https://quay.io/repository/biocontainers/pxblat/status
   :target: https://quay.io/repository/biocontainers/pxblat
.. _`pxblat/tags`: https://quay.io/repository/biocontainers/pxblat?tab=tags


.. raw:: html

    <script>
        var package = "pxblat";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pxblat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pxblat/README.html