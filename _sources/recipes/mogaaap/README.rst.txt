:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mogaaap'
.. highlight: bash

mogaaap
=======

.. conda:recipe:: mogaaap
   :replaces_section_title:
   :noindex:

   MoGAAAP\: Modular Genome Assembly\, Annotation and quality Assessment Pipeline

   :homepage: https://github.com/dirkjanvw/MoGAAAP
   :license: GPL / GPL-3.0-only
   :recipe: /`mogaaap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mogaaap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mogaaap/meta.yaml>`_

   


.. conda:package:: mogaaap

   |downloads_mogaaap| |docker_mogaaap|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends apptainer: ``>=1.3``
   :depends python: ``3.11.*``
   :depends snakemake: ``>=8.0.0``
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

      mamba install mogaaap

   and update with::

      mamba update mogaaap

  To create a new environment, run::

      mamba create --name myenvname mogaaap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mogaaap:<tag>

   (see `mogaaap/tags`_ for valid values for ``<tag>``)


.. |downloads_mogaaap| image:: https://img.shields.io/conda/dn/bioconda/mogaaap.svg?style=flat
   :target: https://anaconda.org/bioconda/mogaaap
   :alt:   (downloads)
.. |docker_mogaaap| image:: https://quay.io/repository/biocontainers/mogaaap/status
   :target: https://quay.io/repository/biocontainers/mogaaap
.. _`mogaaap/tags`: https://quay.io/repository/biocontainers/mogaaap?tab=tags


.. raw:: html

    <script>
        var package = "mogaaap";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mogaaap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mogaaap/README.html