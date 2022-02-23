:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reseq'
.. highlight: bash

reseq
=====

.. conda:recipe:: reseq
   :replaces_section_title:
   :noindex:

   ReSeq Illumina\/BGI simulator

   :homepage: https://github.com/schmeing/ReSeq/tree/devel
   :license: MIT
   :recipe: /`reseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reseq/meta.yaml>`_

   


.. conda:package:: reseq

   |downloads_reseq| |docker_reseq|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reseq

   and update with::

      conda update reseq

   or use the docker container::

      docker pull quay.io/biocontainers/reseq:<tag>

   (see `reseq/tags`_ for valid values for ``<tag>``)


.. |downloads_reseq| image:: https://img.shields.io/conda/dn/bioconda/reseq.svg?style=flat
   :target: https://anaconda.org/bioconda/reseq
   :alt:   (downloads)
.. |docker_reseq| image:: https://quay.io/repository/biocontainers/reseq/status
   :target: https://quay.io/repository/biocontainers/reseq
.. _`reseq/tags`: https://quay.io/repository/biocontainers/reseq?tab=tags


.. raw:: html

    <script>
        var package = "reseq";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reseq/README.html