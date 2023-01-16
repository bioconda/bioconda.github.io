:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alcor'
.. highlight: bash

alcor
=====

.. conda:recipe:: alcor
   :replaces_section_title:
   :noindex:

   Software for alignment\-free simulation\, mapping\, and visualization of low\-complexity regions in FASTA data.

   :homepage: https://cobilab.github.io/alcor/
   :license: GPL / GPL v3 License
   :recipe: /`alcor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alcor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alcor/meta.yaml>`_

   


.. conda:package:: alcor

   |downloads_alcor| |docker_alcor|

   :versions:
      
      

      ``1.8-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alcor

   and update with::

      conda update alcor

   or use the docker container::

      docker pull quay.io/biocontainers/alcor:<tag>

   (see `alcor/tags`_ for valid values for ``<tag>``)


.. |downloads_alcor| image:: https://img.shields.io/conda/dn/bioconda/alcor.svg?style=flat
   :target: https://anaconda.org/bioconda/alcor
   :alt:   (downloads)
.. |docker_alcor| image:: https://quay.io/repository/biocontainers/alcor/status
   :target: https://quay.io/repository/biocontainers/alcor
.. _`alcor/tags`: https://quay.io/repository/biocontainers/alcor?tab=tags


.. raw:: html

    <script>
        var package = "alcor";
        var versions = ["1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alcor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alcor/README.html