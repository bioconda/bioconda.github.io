:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superstr'
.. highlight: bash

superstr
========

.. conda:recipe:: superstr
   :replaces_section_title:
   :noindex:

   A lightweight\, alignment\-free utility for detecting repeat\-containing reads in short\-read WGS\, WES and RNA\-seq data.

   :homepage: https://github.com/bahlolab/superSTR
   :license: GPL-2.0
   :recipe: /`superstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr/meta.yaml>`_

   


.. conda:package:: superstr

   |downloads_superstr| |docker_superstr|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends arch-py: ``>=4.15``
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libcurl: ``>=7.83.1,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends matplotlib-base: ``>=3.4.1``
   :depends mpmath: ``>=1.2.1``
   :depends numpy: ``>=1.20.1``
   :depends pandas: ``>=1.2.2``
   :depends python: ``>=3.8.3``
   :depends scipy: ``>=1.6.1``
   :depends seaborn: ``>=0.11.1``
   :depends statsmodels: ``>=0.12.2``
   :depends tqdm: ``>=4.59``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install superstr

   and update with::

      conda update superstr

   or use the docker container::

      docker pull quay.io/biocontainers/superstr:<tag>

   (see `superstr/tags`_ for valid values for ``<tag>``)


.. |downloads_superstr| image:: https://img.shields.io/conda/dn/bioconda/superstr.svg?style=flat
   :target: https://anaconda.org/bioconda/superstr
   :alt:   (downloads)
.. |docker_superstr| image:: https://quay.io/repository/biocontainers/superstr/status
   :target: https://quay.io/repository/biocontainers/superstr
.. _`superstr/tags`: https://quay.io/repository/biocontainers/superstr?tab=tags


.. raw:: html

    <script>
        var package = "superstr";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superstr/README.html