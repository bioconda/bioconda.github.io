:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocode'
.. highlight: bash

biocode
=======

.. conda:recipe:: biocode
   :replaces_section_title:
   :noindex:

   Bioinformatics code libraries and scripts

   :homepage: http://github.com/jorvis/biocode
   :license: MIT / MIT
   :recipe: /`biocode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocode/meta.yaml>`_

   


.. conda:package:: biocode

   |downloads_biocode| |docker_biocode|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends biopython: 
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends python-igraph: 
   :depends taxadb: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install biocode

   and update with::

      mamba update biocode

  To create a new environment, run::

      mamba create --name myenvname biocode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biocode:<tag>

   (see `biocode/tags`_ for valid values for ``<tag>``)


.. |downloads_biocode| image:: https://img.shields.io/conda/dn/bioconda/biocode.svg?style=flat
   :target: https://anaconda.org/bioconda/biocode
   :alt:   (downloads)
.. |docker_biocode| image:: https://quay.io/repository/biocontainers/biocode/status
   :target: https://quay.io/repository/biocontainers/biocode
.. _`biocode/tags`: https://quay.io/repository/biocontainers/biocode?tab=tags


.. raw:: html

    <script>
        var package = "biocode";
        var versions = ["0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocode/README.html