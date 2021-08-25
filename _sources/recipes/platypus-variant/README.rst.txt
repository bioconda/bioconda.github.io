:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platypus-variant'
.. highlight: bash

platypus-variant
================

.. conda:recipe:: platypus-variant
   :replaces_section_title:
   :noindex:

   A Haplotype\-Based Variant Caller For Next Generation Sequence Data

   :homepage: http://www.well.ox.ac.uk/platypus
   :license: GPLv3
   :recipe: /`platypus-variant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant/meta.yaml>`_

   


.. conda:package:: platypus-variant

   |downloads_platypus-variant| |docker_platypus-variant|

   :versions:
      
      

      ``0.8.1.2-2``,  ``0.8.1.2-1``,  ``0.8.1.2-0``,  ``0.8.1.1-3``,  ``0.8.1.1-2``,  ``0.8.1.1-1``,  ``0.8.1.1-0``,  ``0.8.1-1``,  ``0.8.1-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install platypus-variant

   and update with::

      conda update platypus-variant

   or use the docker container::

      docker pull quay.io/biocontainers/platypus-variant:<tag>

   (see `platypus-variant/tags`_ for valid values for ``<tag>``)


.. |downloads_platypus-variant| image:: https://img.shields.io/conda/dn/bioconda/platypus-variant.svg?style=flat
   :target: https://anaconda.org/bioconda/platypus-variant
   :alt:   (downloads)
.. |docker_platypus-variant| image:: https://quay.io/repository/biocontainers/platypus-variant/status
   :target: https://quay.io/repository/biocontainers/platypus-variant
.. _`platypus-variant/tags`: https://quay.io/repository/biocontainers/platypus-variant?tab=tags


.. raw:: html

    <script>
        var package = "platypus-variant";
        var versions = ["0.8.1.2","0.8.1.2","0.8.1.2","0.8.1.1","0.8.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-variant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-variant/README.html