:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phist'
.. highlight: bash

phist
=====

.. conda:recipe:: phist
   :replaces_section_title:
   :noindex:

   Phage\-Host Interaction Search Tool.

   :homepage: https://github.com/refresh-bio/PHIST
   :license: GPL-3 / GPL-3
   :recipe: /`phist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phist/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab837`

   


.. conda:package:: phist

   |downloads_phist| |docker_phist|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends kmer-db: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phist

   and update with::

      conda update phist

   or use the docker container::

      docker pull quay.io/biocontainers/phist:<tag>

   (see `phist/tags`_ for valid values for ``<tag>``)


.. |downloads_phist| image:: https://img.shields.io/conda/dn/bioconda/phist.svg?style=flat
   :target: https://anaconda.org/bioconda/phist
   :alt:   (downloads)
.. |docker_phist| image:: https://quay.io/repository/biocontainers/phist/status
   :target: https://quay.io/repository/biocontainers/phist
.. _`phist/tags`: https://quay.io/repository/biocontainers/phist?tab=tags


.. raw:: html

    <script>
        var package = "phist";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phist/README.html