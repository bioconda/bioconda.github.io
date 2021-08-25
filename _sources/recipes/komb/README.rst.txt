:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'komb'
.. highlight: bash

komb
====

.. conda:recipe:: komb
   :replaces_section_title:
   :noindex:

   Characterizing metagenomes using K\-Core decomposition

   :homepage: https://gitlab.com/treangenlab/komb
   :license: GPL-3.0-or-later
   :recipe: /`komb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/komb/meta.yaml>`_

   


.. conda:package:: komb

   |downloads_komb| |docker_komb|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-0``

      

   
   :depends abyss: ``>=2.0.2``
   :depends bifrost: ``>=1.0.5``
   :depends bowtie2: ``>=2.3.5.1``
   :depends igraph: ``0.8.*``
   :depends igraph: ``>=0.8.3,<0.9.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install komb

   and update with::

      conda update komb

   or use the docker container::

      docker pull quay.io/biocontainers/komb:<tag>

   (see `komb/tags`_ for valid values for ``<tag>``)


.. |downloads_komb| image:: https://img.shields.io/conda/dn/bioconda/komb.svg?style=flat
   :target: https://anaconda.org/bioconda/komb
   :alt:   (downloads)
.. |docker_komb| image:: https://quay.io/repository/biocontainers/komb/status
   :target: https://quay.io/repository/biocontainers/komb
.. _`komb/tags`: https://quay.io/repository/biocontainers/komb?tab=tags


.. raw:: html

    <script>
        var package = "komb";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/komb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/komb/README.html