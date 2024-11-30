:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stranger'
.. highlight: bash

stranger
========

.. conda:recipe:: stranger
   :replaces_section_title:
   :noindex:

   Annotate VCF files with STR variants with pathogenicity implications.

   :homepage: https://github.com/Clinical-Genomics/stranger
   :documentation: https://github.com/Clinical-Genomics/stranger/blob/v0.9.3/README.md
   
   :license: MIT / MIT
   :recipe: /`stranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stranger/meta.yaml>`_

   


.. conda:package:: stranger

   |downloads_stranger| |docker_stranger|

   :versions:
      
      

      ``0.9.3-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``

      

   
   :depends click: 
   :depends coloredlogs: 
   :depends importlib-resources: ``>=5.12.0``
   :depends python: ``>=3.7``
   :depends pyyaml: 
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

      mamba install stranger

   and update with::

      mamba update stranger

  To create a new environment, run::

      mamba create --name myenvname stranger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stranger:<tag>

   (see `stranger/tags`_ for valid values for ``<tag>``)


.. |downloads_stranger| image:: https://img.shields.io/conda/dn/bioconda/stranger.svg?style=flat
   :target: https://anaconda.org/bioconda/stranger
   :alt:   (downloads)
.. |docker_stranger| image:: https://quay.io/repository/biocontainers/stranger/status
   :target: https://quay.io/repository/biocontainers/stranger
.. _`stranger/tags`: https://quay.io/repository/biocontainers/stranger?tab=tags


.. raw:: html

    <script>
        var package = "stranger";
        var versions = ["0.9.3","0.9.2","0.9.2","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stranger/README.html