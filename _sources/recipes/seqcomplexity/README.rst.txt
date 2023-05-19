:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqcomplexity'
.. highlight: bash

seqcomplexity
=============

.. conda:recipe:: seqcomplexity
   :replaces_section_title:
   :noindex:

   Calculates Per\-Read and Total Sequence Complexity from FastQ file.


   :homepage: https://github.com/stevenweaver/seqcomplexity
   :license: MIT
   :recipe: /`seqcomplexity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcomplexity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqcomplexity/meta.yaml>`_

   


.. conda:package:: seqcomplexity

   |downloads_seqcomplexity| |docker_seqcomplexity|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends freetype: ``>=2.12.1,<3.0a0``
   :depends libexpat: ``>=2.5.0,<3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqcomplexity

   and update with::

      conda update seqcomplexity

   or use the docker container::

      docker pull quay.io/biocontainers/seqcomplexity:<tag>

   (see `seqcomplexity/tags`_ for valid values for ``<tag>``)


.. |downloads_seqcomplexity| image:: https://img.shields.io/conda/dn/bioconda/seqcomplexity.svg?style=flat
   :target: https://anaconda.org/bioconda/seqcomplexity
   :alt:   (downloads)
.. |docker_seqcomplexity| image:: https://quay.io/repository/biocontainers/seqcomplexity/status
   :target: https://quay.io/repository/biocontainers/seqcomplexity
.. _`seqcomplexity/tags`: https://quay.io/repository/biocontainers/seqcomplexity?tab=tags


.. raw:: html

    <script>
        var package = "seqcomplexity";
        var versions = ["0.1.2","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqcomplexity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqcomplexity/README.html