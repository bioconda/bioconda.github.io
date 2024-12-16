:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seshat'
.. highlight: bash

seshat
======

.. conda:recipe:: seshat
   :replaces_section_title:
   :noindex:

   Tools for programmatically annotating VCFs with the Seshat TP53 database.

   :homepage: https://github.com/clintval/tp53
   :license: MIT / MIT
   :recipe: /`seshat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seshat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seshat/meta.yaml>`_

   


.. conda:package:: seshat

   |downloads_seshat| |docker_seshat|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends beautifulsoup4: ``>=4.12``
   :depends google-api-python-client: ``>=2.151``
   :depends google-auth-httplib2: ``>=0.2``
   :depends google-auth-oauthlib: ``>=1.2.1``
   :depends lxml: ``>=5.3``
   :depends openjdk: ``>=11``
   :depends python: ``>=3.11``
   :depends python-chromedriver-binary: ``>=130``
   :depends selenium: ``>=3.141.0``
   :depends types-beautifulsoup4: ``>=4.12``
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

      mamba install seshat

   and update with::

      mamba update seshat

  To create a new environment, run::

      mamba create --name myenvname seshat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seshat:<tag>

   (see `seshat/tags`_ for valid values for ``<tag>``)


.. |downloads_seshat| image:: https://img.shields.io/conda/dn/bioconda/seshat.svg?style=flat
   :target: https://anaconda.org/bioconda/seshat
   :alt:   (downloads)
.. |docker_seshat| image:: https://quay.io/repository/biocontainers/seshat/status
   :target: https://quay.io/repository/biocontainers/seshat
.. _`seshat/tags`: https://quay.io/repository/biocontainers/seshat?tab=tags


.. raw:: html

    <script>
        var package = "seshat";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seshat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seshat/README.html