:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimeo'
.. highlight: bash

mimeo
=====

.. conda:recipe:: mimeo
   :replaces_section_title:
   :noindex:

   Scan genomes for internally repeated sequences\, elements which are repetitive in another species\, or high\-identity HGT candidate regions between species.

   :homepage: https://github.com/Adamtaranto/mimeo
   :license: MIT / MIT License
   :recipe: /`mimeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimeo/meta.yaml>`_

   


.. conda:package:: mimeo

   |downloads_mimeo| |docker_mimeo|

   :versions:
      
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends pandas: ``>=0.20.3``
   :depends python: ``>=3``
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

      mamba install mimeo

   and update with::

      mamba update mimeo

  To create a new environment, run::

      mamba create --name myenvname mimeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimeo:<tag>

   (see `mimeo/tags`_ for valid values for ``<tag>``)


.. |downloads_mimeo| image:: https://img.shields.io/conda/dn/bioconda/mimeo.svg?style=flat
   :target: https://anaconda.org/bioconda/mimeo
   :alt:   (downloads)
.. |docker_mimeo| image:: https://quay.io/repository/biocontainers/mimeo/status
   :target: https://quay.io/repository/biocontainers/mimeo
.. _`mimeo/tags`: https://quay.io/repository/biocontainers/mimeo?tab=tags


.. raw:: html

    <script>
        var package = "mimeo";
        var versions = ["1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimeo/README.html