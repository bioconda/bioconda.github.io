:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio'
.. highlight: bash

bio
===

.. conda:recipe:: bio
   :replaces_section_title:
   :noindex:

   Command\-line utilities to make bioinformatics explorations more enjoyable.

   :homepage: https://github.com/ialbert/bio
   :license: MIT / MIT
   :recipe: /`bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio/meta.yaml>`_

   


.. conda:package:: bio

   |downloads_bio| |docker_bio|

   :versions:
      
      

      ``1.7.1-0``

      

   
   :depends biopython: ``>=1.80``
   :depends gprofiler-official: 
   :depends mygene: 
   :depends pandas: 
   :depends pooch: 
   :depends python: ``>=3.10``
   :depends requests: 
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

      mamba install bio

   and update with::

      mamba update bio

  To create a new environment, run::

      mamba create --name myenvname bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bio:<tag>

   (see `bio/tags`_ for valid values for ``<tag>``)


.. |downloads_bio| image:: https://img.shields.io/conda/dn/bioconda/bio.svg?style=flat
   :target: https://anaconda.org/bioconda/bio
   :alt:   (downloads)
.. |docker_bio| image:: https://quay.io/repository/biocontainers/bio/status
   :target: https://quay.io/repository/biocontainers/bio
.. _`bio/tags`: https://quay.io/repository/biocontainers/bio?tab=tags


.. raw:: html

    <script>
        var package = "bio";
        var versions = ["1.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio/README.html