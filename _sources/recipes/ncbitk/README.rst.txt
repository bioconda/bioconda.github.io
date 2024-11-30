:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbitk'
.. highlight: bash

ncbitk
======

.. conda:recipe:: ncbitk
   :replaces_section_title:
   :noindex:

   A tool kit for accessing NCBI\'s GenBank

   :homepage: https://github.com/andrewsanchez/NCBITK
   :license: MIT / MIT License
   :recipe: /`ncbitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk/meta.yaml>`_

   


.. conda:package:: ncbitk

   |downloads_ncbitk| |docker_ncbitk|

   :versions:
      
      

      ``1.0a17-0``

      

   
   :depends biopython: ``>=1.68``
   :depends click: 
   :depends numpy: ``>=1.12.0``
   :depends pandas: ``>=0.19.2``
   :depends python: ``>=3``
   :depends python-dateutil: ``>=2.6.0``
   :depends pytz: ``>=2016.10``
   :depends six: ``>=1.10.0``
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

      mamba install ncbitk

   and update with::

      mamba update ncbitk

  To create a new environment, run::

      mamba create --name myenvname ncbitk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbitk:<tag>

   (see `ncbitk/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbitk| image:: https://img.shields.io/conda/dn/bioconda/ncbitk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbitk
   :alt:   (downloads)
.. |docker_ncbitk| image:: https://quay.io/repository/biocontainers/ncbitk/status
   :target: https://quay.io/repository/biocontainers/ncbitk
.. _`ncbitk/tags`: https://quay.io/repository/biocontainers/ncbitk?tab=tags


.. raw:: html

    <script>
        var package = "ncbitk";
        var versions = ["1.0a17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbitk/README.html