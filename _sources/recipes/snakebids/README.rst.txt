:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakebids'
.. highlight: bash

snakebids
=========

.. conda:recipe:: snakebids
   :replaces_section_title:
   :noindex:

   BIDS integration into snakemake workflows

   :homepage: https://github.com/khanlab/snakebids
   :license: MIT
   :recipe: /`snakebids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakebids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakebids/meta.yaml>`_

   Snakebids is a Python package that extends Snakemake\, enabling 
   users to create reproducible\, scalable pipelines for processing 
   neuroimaging data in the BIDS format.



.. conda:package:: snakebids

   |downloads_snakebids| |docker_snakebids|

   :versions:
      
      

      ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.1-0``

      

   
   :depends attrs: ``>=22.2.0``
   :depends boutiques: ``>=0.5.25,<0.6.0``
   :depends copier: ``>=9.2.0``
   :depends docutils: ``!=0.21.post1``
   :depends importlib-resources: ``>=5.12.0``
   :depends jinja2-time: ``>=0.2.0``
   :depends lazy-loader: ``>=0.3``
   :depends more-itertools: ``>=8``
   :depends numpy: ``>=1.23.2``
   :depends pluggy: ``>=1.3``
   :depends pvandyken-deprecated: ``0.0.4``
   :depends pybids: ``>=0.16.0,<0.17``
   :depends python: ``>=3.8,<4.0``
   :depends requests: ``>=2.31.0``
   :depends ruamel.yaml: ``>=0.17.2``
   :depends scipy: ``>=1.10.0``
   :depends snakemake: ``>=7.18.2``
   :depends typing_extensions: ``>=3.10.0``
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

      mamba install snakebids

   and update with::

      mamba update snakebids

  To create a new environment, run::

      mamba create --name myenvname snakebids

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakebids:<tag>

   (see `snakebids/tags`_ for valid values for ``<tag>``)


.. |downloads_snakebids| image:: https://img.shields.io/conda/dn/bioconda/snakebids.svg?style=flat
   :target: https://anaconda.org/bioconda/snakebids
   :alt:   (downloads)
.. |docker_snakebids| image:: https://quay.io/repository/biocontainers/snakebids/status
   :target: https://quay.io/repository/biocontainers/snakebids
.. _`snakebids/tags`: https://quay.io/repository/biocontainers/snakebids?tab=tags


.. raw:: html

    <script>
        var package = "snakebids";
        var versions = ["0.14.0","0.14.0","0.14.0","0.13.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakebids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakebids/README.html