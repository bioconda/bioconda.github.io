:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samshee'
.. highlight: bash

samshee
=======

.. conda:recipe:: samshee
   :replaces_section_title:
   :noindex:

   A schema\-agnostic parser and writer for illumina sample sheets v2.

   :homepage: https://github.com/lit-regensburg/samshee
   :license: MIT
   :recipe: /`samshee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samshee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samshee/meta.yaml>`_

   


.. conda:package:: samshee

   |downloads_samshee| |docker_samshee|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends jsonschema: ``>=4.19``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.31.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install samshee

   and update with::

      mamba update samshee

  To create a new environment, run::

      mamba create --name myenvname samshee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samshee:<tag>

   (see `samshee/tags`_ for valid values for ``<tag>``)


.. |downloads_samshee| image:: https://img.shields.io/conda/dn/bioconda/samshee.svg?style=flat
   :target: https://anaconda.org/bioconda/samshee
   :alt:   (downloads)
.. |docker_samshee| image:: https://quay.io/repository/biocontainers/samshee/status
   :target: https://quay.io/repository/biocontainers/samshee
.. _`samshee/tags`: https://quay.io/repository/biocontainers/samshee?tab=tags


.. raw:: html

    <script>
        var package = "samshee";
        var versions = ["0.2.3","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samshee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samshee/README.html