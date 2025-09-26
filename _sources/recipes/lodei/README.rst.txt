:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lodei'
.. highlight: bash

lodei
=====

.. conda:recipe:: lodei
   :replaces_section_title:
   :noindex:

   Analyze differentially edited A\-to\-I regions in two sets of RNA\-seq samples.

   :homepage: https://github.com/rna-editing1/lodei
   :license: GPL-3.0-or-later
   :recipe: /`lodei <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lodei>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lodei/meta.yaml>`_

   


.. conda:package:: lodei

   |downloads_lodei| |docker_lodei|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends matplotlib-base: 
   :depends pandas: 
   :depends pysamstats: 
   :depends python: 
   :depends samtools: 
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

      mamba install lodei

   and update with::

      mamba update lodei

  To create a new environment, run::

      mamba create --name myenvname lodei

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lodei:<tag>

   (see `lodei/tags`_ for valid values for ``<tag>``)


.. |downloads_lodei| image:: https://img.shields.io/conda/dn/bioconda/lodei.svg?style=flat
   :target: https://anaconda.org/bioconda/lodei
   :alt:   (downloads)
.. |docker_lodei| image:: https://quay.io/repository/biocontainers/lodei/status
   :target: https://quay.io/repository/biocontainers/lodei
.. _`lodei/tags`: https://quay.io/repository/biocontainers/lodei?tab=tags


.. raw:: html

    <script>
        var package = "lodei";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lodei/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lodei/README.html