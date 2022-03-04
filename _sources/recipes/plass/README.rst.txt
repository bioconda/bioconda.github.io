:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plass'
.. highlight: bash

plass
=====

.. conda:recipe:: plass
   :replaces_section_title:
   :noindex:

   Plass \(Protein\-Level ASSembler\) is a software to assemble short read sequencing data on a protein level

   :homepage: https://github.com/soedinglab/plass
   :license: GPLv3
   :recipe: /`plass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0437-4`, biotools: :biotools:`plass`

   


.. conda:package:: plass

   |downloads_plass| |docker_plass|

   :versions:
      
      

      ``4.687d7-3``,  ``4.687d7-2``,  ``4.687d7-1``,  ``4.687d7-0``,  ``3.764a3-0``,  ``2.c7e35-1``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plass

   and update with::

      conda update plass

   or use the docker container::

      docker pull quay.io/biocontainers/plass:<tag>

   (see `plass/tags`_ for valid values for ``<tag>``)


.. |downloads_plass| image:: https://img.shields.io/conda/dn/bioconda/plass.svg?style=flat
   :target: https://anaconda.org/bioconda/plass
   :alt:   (downloads)
.. |docker_plass| image:: https://quay.io/repository/biocontainers/plass/status
   :target: https://quay.io/repository/biocontainers/plass
.. _`plass/tags`: https://quay.io/repository/biocontainers/plass?tab=tags


.. raw:: html

    <script>
        var package = "plass";
        var versions = ["4.687d7","4.687d7","4.687d7","4.687d7","3.764a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plass/README.html