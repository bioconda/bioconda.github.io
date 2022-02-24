:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orna'
.. highlight: bash

orna
====

.. conda:recipe:: orna
   :replaces_section_title:
   :noindex:

   In silico read normalization

   :homepage: https://github.com/SchulzLab/ORNA
   :license: MIT
   :recipe: /`orna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orna/meta.yaml>`_

   


.. conda:package:: orna

   |downloads_orna| |docker_orna|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orna

   and update with::

      conda update orna

   or use the docker container::

      docker pull quay.io/biocontainers/orna:<tag>

   (see `orna/tags`_ for valid values for ``<tag>``)


.. |downloads_orna| image:: https://img.shields.io/conda/dn/bioconda/orna.svg?style=flat
   :target: https://anaconda.org/bioconda/orna
   :alt:   (downloads)
.. |docker_orna| image:: https://quay.io/repository/biocontainers/orna/status
   :target: https://quay.io/repository/biocontainers/orna
.. _`orna/tags`: https://quay.io/repository/biocontainers/orna?tab=tags


.. raw:: html

    <script>
        var package = "orna";
        var versions = ["2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orna/README.html