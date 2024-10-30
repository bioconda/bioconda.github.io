:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jarvis3'
.. highlight: bash

jarvis3
=======

.. conda:recipe:: jarvis3
   :replaces_section_title:
   :noindex:

   Improved encoder for genomic sequences.

   :homepage: https://github.com/cobilab/jarvis3
   :license: GPL3 / GPL3
   :recipe: /`jarvis3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis3/meta.yaml>`_

   


.. conda:package:: jarvis3

   |downloads_jarvis3| |docker_jarvis3|

   :versions:
      
      

      ``3.7-1``,  ``3.7-0``

      

   
   :depends libgcc: ``>=12``
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

      mamba install jarvis3

   and update with::

      mamba update jarvis3

  To create a new environment, run::

      mamba create --name myenvname jarvis3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jarvis3:<tag>

   (see `jarvis3/tags`_ for valid values for ``<tag>``)


.. |downloads_jarvis3| image:: https://img.shields.io/conda/dn/bioconda/jarvis3.svg?style=flat
   :target: https://anaconda.org/bioconda/jarvis3
   :alt:   (downloads)
.. |docker_jarvis3| image:: https://quay.io/repository/biocontainers/jarvis3/status
   :target: https://quay.io/repository/biocontainers/jarvis3
.. _`jarvis3/tags`: https://quay.io/repository/biocontainers/jarvis3?tab=tags


.. raw:: html

    <script>
        var package = "jarvis3";
        var versions = ["3.7","3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jarvis3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jarvis3/README.html