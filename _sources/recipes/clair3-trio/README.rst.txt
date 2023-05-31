:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair3-trio'
.. highlight: bash

clair3-trio
===========

.. conda:recipe:: clair3-trio
   :replaces_section_title:
   :noindex:

   Clair3\-Trio is a variants caller tailored for family trios from nanopore long\-reads. Clair3\-Trio employs a Trio\-to\-Trio deep neural network model that allows it to input all trio’s sequencing information and output all trio’s predicted variants within a single model\, to perform far better variant calling. We also present MCVLoss\, the first loss function that can improve variants calling in trios by leveraging the explicitly encoding of the priors of the Mendelian inheritance in trios. Clair3\-Trio showed comprehensive improvement in experiments. It predicted much fewer Mendelian inheritance violation variations than current state\-of\-the\-art methods.

   :homepage: https://github.com/HKU-BAL/Clair3-Trio
   :license: BSD-3-Clause
   :recipe: /`clair3-trio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-trio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair3-trio/meta.yaml>`_

   


.. conda:package:: clair3-trio

   |downloads_clair3-trio| |docker_clair3-trio|

   :versions:
      
      

      ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cffi: ``1.14.4.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends parallel: ``20191122.*``
   :depends pigz: 
   :depends pypy3.6: 
   :depends pytables: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends samtools: ``1.15.1.*``
   :depends tensorflow: ``2.8.0.*``
   :depends whatshap: ``1.7.*``
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zstd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clair3-trio

   and update with::

      conda update clair3-trio

   or use the docker container::

      docker pull quay.io/biocontainers/clair3-trio:<tag>

   (see `clair3-trio/tags`_ for valid values for ``<tag>``)


.. |downloads_clair3-trio| image:: https://img.shields.io/conda/dn/bioconda/clair3-trio.svg?style=flat
   :target: https://anaconda.org/bioconda/clair3-trio
   :alt:   (downloads)
.. |docker_clair3-trio| image:: https://quay.io/repository/biocontainers/clair3-trio/status
   :target: https://quay.io/repository/biocontainers/clair3-trio
.. _`clair3-trio/tags`: https://quay.io/repository/biocontainers/clair3-trio?tab=tags


.. raw:: html

    <script>
        var package = "clair3-trio";
        var versions = ["0.6","0.6","0.5","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair3-trio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair3-trio/README.html