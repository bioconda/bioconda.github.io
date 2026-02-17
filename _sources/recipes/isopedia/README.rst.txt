:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isopedia'
.. highlight: bash

isopedia
========

.. conda:recipe:: isopedia
   :replaces_section_title:
   :noindex:

   Simultaneous exploration of thousands of long\-read transcriptomes by read\-level indexing

   :homepage: https://github.com/zhengxinchang/isopedia
   :license: MIT / MIT
   :recipe: /`isopedia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isopedia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isopedia/meta.yaml>`_

   Simultaneous exploration of thousands of long\-read transcriptomes by read\-level indexing



.. conda:package:: isopedia

   |downloads_isopedia| |docker_isopedia|

   :versions:
      
      

      ``1.6.5-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.18.0,<9.0a0``
   :depends libgcc: ``>=14``
   :depends liblzma: ``>=5.8.2,<6.0a0``
   :depends libstdcxx: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openssl: ``>=3.5.5,<4.0a0``
   :depends python: ``>=3.6``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install isopedia

   and update with::

      mamba update isopedia

  To create a new environment, run::

      mamba create --name myenvname isopedia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isopedia:<tag>

   (see `isopedia/tags`_ for valid values for ``<tag>``)


.. |downloads_isopedia| image:: https://img.shields.io/conda/dn/bioconda/isopedia.svg?style=flat
   :target: https://anaconda.org/bioconda/isopedia
   :alt:   (downloads)
.. |docker_isopedia| image:: https://quay.io/repository/biocontainers/isopedia/status
   :target: https://quay.io/repository/biocontainers/isopedia
.. _`isopedia/tags`: https://quay.io/repository/biocontainers/isopedia?tab=tags


.. raw:: html

    <script>
        var package = "isopedia";
        var versions = ["1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isopedia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isopedia/README.html