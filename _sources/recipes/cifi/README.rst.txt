:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cifi'
.. highlight: bash

cifi
====

.. conda:recipe:: cifi
   :replaces_section_title:
   :noindex:

   CiFi \- toolkit for downstream processing of CiFi long reads

   :homepage: https://github.com/mr-eyes/cifi-toolkit
   :license: MIT / MIT
   :recipe: /`cifi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cifi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cifi/meta.yaml>`_

   


.. conda:package:: cifi

   |downloads_cifi| |docker_cifi|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends click: ``>=8.0``
   :depends htslib: ``>=1.23,<1.24.0a0``
   :depends jinja2: ``>=3.0``
   :depends libgcc: ``>=14``
   :depends libstdcxx: ``>=14``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install cifi

   and update with::

      mamba update cifi

  To create a new environment, run::

      mamba create --name myenvname cifi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cifi:<tag>

   (see `cifi/tags`_ for valid values for ``<tag>``)


.. |downloads_cifi| image:: https://img.shields.io/conda/dn/bioconda/cifi.svg?style=flat
   :target: https://anaconda.org/bioconda/cifi
   :alt:   (downloads)
.. |docker_cifi| image:: https://quay.io/repository/biocontainers/cifi/status
   :target: https://quay.io/repository/biocontainers/cifi
.. _`cifi/tags`: https://quay.io/repository/biocontainers/cifi?tab=tags


.. raw:: html

    <script>
        var package = "cifi";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cifi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cifi/README.html