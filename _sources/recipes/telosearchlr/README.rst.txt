:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telosearchlr'
.. highlight: bash

telosearchlr
============

.. conda:recipe:: telosearchlr
   :replaces_section_title:
   :noindex:

   TeloSearchLR \(telomere search using long sequencing reads\) is a Python script for aiding the identificaiton of telomeric repeat motifs.

   :homepage: https://github.com/gchchung/TeloSearchLR
   :license: Academic and Non-Commercial Research Use
   :recipe: /`telosearchlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telosearchlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telosearchlr/meta.yaml>`_

   


.. conda:package:: telosearchlr

   |downloads_telosearchlr| |docker_telosearchlr|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bio: 
   :depends pillow: 
   :depends plotly: 
   :depends python: ``>=3.9``
   :depends svgutils: 
   :depends tidehunter: 
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

      mamba install telosearchlr

   and update with::

      mamba update telosearchlr

  To create a new environment, run::

      mamba create --name myenvname telosearchlr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/telosearchlr:<tag>

   (see `telosearchlr/tags`_ for valid values for ``<tag>``)


.. |downloads_telosearchlr| image:: https://img.shields.io/conda/dn/bioconda/telosearchlr.svg?style=flat
   :target: https://anaconda.org/bioconda/telosearchlr
   :alt:   (downloads)
.. |docker_telosearchlr| image:: https://quay.io/repository/biocontainers/telosearchlr/status
   :target: https://quay.io/repository/biocontainers/telosearchlr
.. _`telosearchlr/tags`: https://quay.io/repository/biocontainers/telosearchlr?tab=tags


.. raw:: html

    <script>
        var package = "telosearchlr";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telosearchlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telosearchlr/README.html