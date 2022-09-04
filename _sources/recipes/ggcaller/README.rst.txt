:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggcaller'
.. highlight: bash

ggcaller
========

.. conda:recipe:: ggcaller
   :replaces_section_title:
   :noindex:

   A de Bruijn graph\-based gene\-caller and pangenome analysis tool

   :homepage: https://github.com/samhorsfield96/ggCaller
   :license: MIT
   :recipe: /`ggcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller/meta.yaml>`_

   


.. conda:package:: ggcaller

   |downloads_ggcaller| |docker_ggcaller|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bcbio-gff: 
   :depends bifrost: 
   :depends biopython: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cd-hit: 
   :depends diamond: 
   :depends gffutils: 
   :depends hmmer: 
   :depends intbitset: 
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends mafft: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-edlib: 
   :depends python-wget: 
   :depends python_abi: ``3.8.* *_cp38``
   :depends pytorch: ``>=1.11.0,<1.12.0a0``
   :depends rapidnj: 
   :depends scipy: 
   :depends seaborn: 
   :depends snp-sites: 
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends tqdm: 
   :depends uncertainties: 
   :depends xorg-libxaw: 
   :depends xorg-libxcomposite: 
   :depends xorg-libxcursor: 
   :depends xorg-libxdamage: 
   :depends xorg-libxfixes: 
   :depends xorg-libxi: 
   :depends xorg-libxinerama: 
   :depends xorg-libxpm: 
   :depends xorg-libxrandr: 
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ggcaller

   and update with::

      conda update ggcaller

   or use the docker container::

      docker pull quay.io/biocontainers/ggcaller:<tag>

   (see `ggcaller/tags`_ for valid values for ``<tag>``)


.. |downloads_ggcaller| image:: https://img.shields.io/conda/dn/bioconda/ggcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/ggcaller
   :alt:   (downloads)
.. |docker_ggcaller| image:: https://quay.io/repository/biocontainers/ggcaller/status
   :target: https://quay.io/repository/biocontainers/ggcaller
.. _`ggcaller/tags`: https://quay.io/repository/biocontainers/ggcaller?tab=tags


.. raw:: html

    <script>
        var package = "ggcaller";
        var versions = ["1.3.0","1.2.4","1.2.4","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggcaller/README.html