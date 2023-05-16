:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'porechop_abi'
.. highlight: bash

porechop_abi
============

.. conda:recipe:: porechop_abi
   :replaces_section_title:
   :noindex:

   Adapter inferrence and removal of Oxford Nanopore reads

   :homepage: https://github.com/bonsai-team/Porechop_ABI
   :license: GPL3
   :recipe: /`porechop_abi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop_abi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/porechop_abi/meta.yaml>`_

   


.. conda:package:: porechop_abi

   |downloads_porechop_abi| |docker_porechop_abi|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends networkx: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install porechop_abi

   and update with::

      conda update porechop_abi

   or use the docker container::

      docker pull quay.io/biocontainers/porechop_abi:<tag>

   (see `porechop_abi/tags`_ for valid values for ``<tag>``)


.. |downloads_porechop_abi| image:: https://img.shields.io/conda/dn/bioconda/porechop_abi.svg?style=flat
   :target: https://anaconda.org/bioconda/porechop_abi
   :alt:   (downloads)
.. |docker_porechop_abi| image:: https://quay.io/repository/biocontainers/porechop_abi/status
   :target: https://quay.io/repository/biocontainers/porechop_abi
.. _`porechop_abi/tags`: https://quay.io/repository/biocontainers/porechop_abi?tab=tags


.. raw:: html

    <script>
        var package = "porechop_abi";
        var versions = ["0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/porechop_abi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/porechop_abi/README.html