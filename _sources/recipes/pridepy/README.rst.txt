:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pridepy'
.. highlight: bash

pridepy
=======

.. conda:recipe:: pridepy
   :replaces_section_title:
   :noindex:

   Python Client library for PRIDE Rest API

   :homepage: https://github.com/PRIDE-Archive/pridepy
   :license: APACHE / Apache-2.0
   :recipe: /`pridepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pridepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pridepy/meta.yaml>`_

   pridepy is a Python client library that enables users to download and
   search proteomics data from the PRIDE database. It supports multiple
   download protocols including FTP\, Aspera\, Globus\, and S3.



.. conda:package:: pridepy

   |downloads_pridepy| |docker_pridepy|

   :versions:
      
      

      ``0.0.12-0``

      

   
   :depends boto3: ``>=1.34.0,<2.0.0``
   :depends botocore: ``>=1.34.0,<2.0.0``
   :depends click: ``>=8.1.7,<9.0.0``
   :depends httpx: ``>=0.27.0,<0.28.0``
   :depends python: ``>=3.9``
   :depends ratelimit: ``>=2.2.1,<3.0.0``
   :depends requests: ``>=2.31.0,<3.0.0``
   :depends tqdm: ``>=4.66.1,<5.0.0``
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

      mamba install pridepy

   and update with::

      mamba update pridepy

  To create a new environment, run::

      mamba create --name myenvname pridepy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pridepy:<tag>

   (see `pridepy/tags`_ for valid values for ``<tag>``)


.. |downloads_pridepy| image:: https://img.shields.io/conda/dn/bioconda/pridepy.svg?style=flat
   :target: https://anaconda.org/bioconda/pridepy
   :alt:   (downloads)
.. |docker_pridepy| image:: https://quay.io/repository/biocontainers/pridepy/status
   :target: https://quay.io/repository/biocontainers/pridepy
.. _`pridepy/tags`: https://quay.io/repository/biocontainers/pridepy?tab=tags


.. raw:: html

    <script>
        var package = "pridepy";
        var versions = ["0.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pridepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pridepy/README.html