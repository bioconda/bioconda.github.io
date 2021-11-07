:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msamtools'
.. highlight: bash

msamtools
=========

.. conda:recipe:: msamtools
   :replaces_section_title:
   :noindex:

   microbiome\-related extension to samtools

   :homepage: https://github.com/arumugamlab/msamtools
   :license: MIT
   :recipe: /`msamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msamtools/meta.yaml>`_

   


.. conda:package:: msamtools

   |downloads_msamtools| |docker_msamtools|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends argtable2: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msamtools

   and update with::

      conda update msamtools

   or use the docker container::

      docker pull quay.io/biocontainers/msamtools:<tag>

   (see `msamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_msamtools| image:: https://img.shields.io/conda/dn/bioconda/msamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/msamtools
   :alt:   (downloads)
.. |docker_msamtools| image:: https://quay.io/repository/biocontainers/msamtools/status
   :target: https://quay.io/repository/biocontainers/msamtools
.. _`msamtools/tags`: https://quay.io/repository/biocontainers/msamtools?tab=tags


.. raw:: html

    <script>
        var package = "msamtools";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msamtools/README.html