:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gimmemotifs'
.. highlight: bash

gimmemotifs
===========

.. conda:recipe:: gimmemotifs
   :replaces_section_title:
   :noindex:

   Motif prediction pipeline and various motif\-related tools

   :homepage: https://github.com/vanheeringen-lab/gimmemotifs
   :license: MIT
   :recipe: /`gimmemotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gimmemotifs/meta.yaml>`_
   :links: biotools: :biotools:`gimmemotifs`

   


.. conda:package:: gimmemotifs

   |downloads_gimmemotifs| |docker_gimmemotifs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.1-1</code>,  <code>0.16.1-0</code>,  <code>0.16.0-2</code>,  <code>0.16.0-0</code>,  <code>0.15.3-0</code>,  <code>0.15.2-0</code>,  <code>0.15.1-0</code>,  <code>0.15.0-1</code>,  <code>0.15.0-0</code>,  </span></summary>
      

      ``0.16.1-1``,  ``0.16.1-0``,  ``0.16.0-2``,  ``0.16.0-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0-1``,  ``0.15.0-0``,  ``0.14.4-2``,  ``0.14.4-1``,  ``0.14.4-0``,  ``0.14.3-1``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-2``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-4``,  ``0.13.1-3``,  ``0.13.1-2``,  ``0.13.1-1``,  ``0.13.1-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.10.0b6-1``,  ``0.10.0b5-1``,  ``0.10.0b4-1``,  ``0.10.0b4-0``,  ``0.10.0b1-0``,  ``0.9.0.6-0``,  ``0.9.0.5-0``,  ``0.9.0.4-0``,  ``0.9.0.3-2``,  ``0.8.9.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends biofluff: ``>=3.0.4``
   :depends configparser: 
   :depends dinamo: 
   :depends diskcache: 
   :depends feather-format: 
   :depends future: 
   :depends gadem: 
   :depends genomepy: ``>=0.9.0``
   :depends homer: 
   :depends jinja2: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends logomaker: 
   :depends loguru: 
   :depends matplotlib-base: ``>=3.1.2``
   :depends meme: ``>=5.1.1``
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends pandas: ``<1.3``
   :depends pillow: ``>=0.7.1.2``
   :depends prosampler: 
   :depends pyarrow: ``>=0.16.0``
   :depends pybedtools: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python-xxhash: 
   :depends python_abi: ``3.9.* *_cp39``
   :depends pyyaml: ``>=3.10``
   :depends qnorm: ``>=0.5``
   :depends scikit-learn: ``>=0.23.2``
   :depends scipy: ``>=1.4.1``
   :depends seaborn: ``>=0.10.1``
   :depends six: 
   :depends statsmodels: 
   :depends tqdm: ``>=4.46.1``
   :depends trawler: 
   :depends ucsc-bigbedtobed: 
   :depends weeder: 
   :depends xdg: 
   :depends xgboost: ``>=1.0.2``
   :depends xxmotif: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gimmemotifs

   and update with::

      conda update gimmemotifs

   or use the docker container::

      docker pull quay.io/biocontainers/gimmemotifs:<tag>

   (see `gimmemotifs/tags`_ for valid values for ``<tag>``)


.. |downloads_gimmemotifs| image:: https://img.shields.io/conda/dn/bioconda/gimmemotifs.svg?style=flat
   :target: https://anaconda.org/bioconda/gimmemotifs
   :alt:   (downloads)
.. |docker_gimmemotifs| image:: https://quay.io/repository/biocontainers/gimmemotifs/status
   :target: https://quay.io/repository/biocontainers/gimmemotifs
.. _`gimmemotifs/tags`: https://quay.io/repository/biocontainers/gimmemotifs?tab=tags


.. raw:: html

    <script>
        var package = "gimmemotifs";
        var versions = ["0.16.1","0.16.1","0.16.0","0.16.0","0.15.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gimmemotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gimmemotifs/README.html