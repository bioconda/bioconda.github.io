:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slimm'
.. highlight: bash

slimm
=====

.. conda:recipe:: slimm
   :replaces_section_title:
   :noindex:

   SLIMM \- Species Level Identification of Microbes from Metagenomes

   :homepage: https://github.com/seqan/slimm/blob/master/README.md
   :license: https://github.com/seqan/slimm/blob/master/LICENSE
   :recipe: /`slimm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm/meta.yaml>`_
   :links: biotools: :biotools:`slimm`, doi: :doi:`10.7717/peerj.3138`

   


.. conda:package:: slimm

   |downloads_slimm| |docker_slimm|

   :versions:
      
      

      ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slimm

   and update with::

      conda update slimm

   or use the docker container::

      docker pull quay.io/biocontainers/slimm:<tag>

   (see `slimm/tags`_ for valid values for ``<tag>``)


.. |downloads_slimm| image:: https://img.shields.io/conda/dn/bioconda/slimm.svg?style=flat
   :target: https://anaconda.org/bioconda/slimm
   :alt:   (downloads)
.. |docker_slimm| image:: https://quay.io/repository/biocontainers/slimm/status
   :target: https://quay.io/repository/biocontainers/slimm
.. _`slimm/tags`: https://quay.io/repository/biocontainers/slimm?tab=tags


.. raw:: html

    <script>
        var package = "slimm";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slimm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slimm/README.html