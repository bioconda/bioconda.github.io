:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioc'
.. highlight: bash

bioc
====

.. conda:recipe:: bioc
   :replaces_section_title:
   :noindex:

   bioc \- Processing BioC\, Brat\, and PubTator with Python.

   :homepage: https://github.com/bionlplab/bioc
   :license: MIT
   :recipe: /`bioc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioc/meta.yaml>`_

   


.. conda:package:: bioc

   |downloads_bioc| |docker_bioc|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends docopt: 
   :depends intervaltree: 
   :depends jsonlines: ``>=1.2.0``
   :depends lxml: ``>=4.6.3``
   :depends python: ``>=3.6``
   :depends tqdm: 
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

      mamba install bioc

   and update with::

      mamba update bioc

  To create a new environment, run::

      mamba create --name myenvname bioc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioc:<tag>

   (see `bioc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioc| image:: https://img.shields.io/conda/dn/bioconda/bioc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioc
   :alt:   (downloads)
.. |docker_bioc| image:: https://quay.io/repository/biocontainers/bioc/status
   :target: https://quay.io/repository/biocontainers/bioc
.. _`bioc/tags`: https://quay.io/repository/biocontainers/bioc?tab=tags


.. raw:: html

    <script>
        var package = "bioc";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioc/README.html