:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dysgu'
.. highlight: bash

dysgu
=====

.. conda:recipe:: dysgu
   :replaces_section_title:
   :noindex:

   A collection of tools for calling structural variants using short or long reads

   :homepage: https://github.com/kcleal/dysgu
   :license: MIT / MIT
   :recipe: /`dysgu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dysgu/meta.yaml>`_

   


.. conda:package:: dysgu

   |downloads_dysgu| |docker_dysgu|

   :versions:
      
      

      ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.16-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends click: ``>=8.0``
   :depends cython: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libcurl: ``>=8.1.2,<9.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends lightgbm: 
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.18``
   :depends numpy: ``>=1.25.1,<2.0a0``
   :depends openssl: ``>=3.1.1,<4.0a0``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-edlib: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=0.22``
   :depends scipy: 
   :depends sortedcontainers: 
   :depends wheel: 
   :depends xz: ``>=5.2.6,<6.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dysgu

   and update with::

      conda update dysgu

   or use the docker container::

      docker pull quay.io/biocontainers/dysgu:<tag>

   (see `dysgu/tags`_ for valid values for ``<tag>``)


.. |downloads_dysgu| image:: https://img.shields.io/conda/dn/bioconda/dysgu.svg?style=flat
   :target: https://anaconda.org/bioconda/dysgu
   :alt:   (downloads)
.. |docker_dysgu| image:: https://quay.io/repository/biocontainers/dysgu/status
   :target: https://quay.io/repository/biocontainers/dysgu
.. _`dysgu/tags`: https://quay.io/repository/biocontainers/dysgu?tab=tags


.. raw:: html

    <script>
        var package = "dysgu";
        var versions = ["1.4.2","1.4.0","1.3.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dysgu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dysgu/README.html