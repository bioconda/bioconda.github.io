:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bel-resources'
.. highlight: bash

bel-resources
=============

.. conda:recipe:: bel-resources
   :replaces_section_title:
   :noindex:

   Utilities for BEL resource files.

   :homepage: https://github.com/pybel/bel-resources
   :license: MIT / MIT
   :recipe: /`bel-resources <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources/meta.yaml>`_

   


.. conda:package:: bel-resources

   |downloads_bel-resources| |docker_bel-resources|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends multisplitby: 
   :depends python: ``>=3.5``
   :depends requests: 
   :depends requests-file: 
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

      mamba install bel-resources

   and update with::

      mamba update bel-resources

  To create a new environment, run::

      mamba create --name myenvname bel-resources

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bel-resources:<tag>

   (see `bel-resources/tags`_ for valid values for ``<tag>``)


.. |downloads_bel-resources| image:: https://img.shields.io/conda/dn/bioconda/bel-resources.svg?style=flat
   :target: https://anaconda.org/bioconda/bel-resources
   :alt:   (downloads)
.. |docker_bel-resources| image:: https://quay.io/repository/biocontainers/bel-resources/status
   :target: https://quay.io/repository/biocontainers/bel-resources
.. _`bel-resources/tags`: https://quay.io/repository/biocontainers/bel-resources?tab=tags


.. raw:: html

    <script>
        var package = "bel-resources";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bel-resources/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bel-resources/README.html