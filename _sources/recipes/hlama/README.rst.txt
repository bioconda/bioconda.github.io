:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlama'
.. highlight: bash

hlama
=====

.. conda:recipe:: hlama
   :replaces_section_title:
   :noindex:

   Simple matching of HTS samples based on HLA typing

   :homepage: https://github.com/bihealth/hlama
   :license: MIT
   :recipe: /`hlama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlama/meta.yaml>`_

   


.. conda:package:: hlama

   |downloads_hlama| |docker_hlama|

   :versions:
      
      

      ``3.0.1-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3-0``

      

   
   :depends optitype: ``>=1.2``
   :depends python: ``>=3.5,<3.6.0a0``
   :depends snakemake: ``3.7.1``
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

      mamba install hlama

   and update with::

      mamba update hlama

  To create a new environment, run::

      mamba create --name myenvname hlama

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hlama:<tag>

   (see `hlama/tags`_ for valid values for ``<tag>``)


.. |downloads_hlama| image:: https://img.shields.io/conda/dn/bioconda/hlama.svg?style=flat
   :target: https://anaconda.org/bioconda/hlama
   :alt:   (downloads)
.. |docker_hlama| image:: https://quay.io/repository/biocontainers/hlama/status
   :target: https://quay.io/repository/biocontainers/hlama
.. _`hlama/tags`: https://quay.io/repository/biocontainers/hlama?tab=tags


.. raw:: html

    <script>
        var package = "hlama";
        var versions = ["3.0.1","0.3.1","0.3.1","0.3.1","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlama/README.html