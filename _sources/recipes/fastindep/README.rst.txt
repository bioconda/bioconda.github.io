:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastindep'
.. highlight: bash

fastindep
=========

.. conda:recipe:: fastindep
   :replaces_section_title:
   :noindex:

   A fast random heuristic algorithm for identifying large sets of unrelated individuals and unrelated markers

   :homepage: https://github.com/endrebak/fastindep
   :license: MIT
   :recipe: /`fastindep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastindep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastindep/meta.yaml>`_

   


.. conda:package:: fastindep

   |downloads_fastindep| |docker_fastindep|

   :versions:
      
      

      ``1.0.0-6``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install fastindep

   and update with::

      mamba update fastindep

  To create a new environment, run::

      mamba create --name myenvname fastindep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastindep:<tag>

   (see `fastindep/tags`_ for valid values for ``<tag>``)


.. |downloads_fastindep| image:: https://img.shields.io/conda/dn/bioconda/fastindep.svg?style=flat
   :target: https://anaconda.org/bioconda/fastindep
   :alt:   (downloads)
.. |docker_fastindep| image:: https://quay.io/repository/biocontainers/fastindep/status
   :target: https://quay.io/repository/biocontainers/fastindep
.. _`fastindep/tags`: https://quay.io/repository/biocontainers/fastindep?tab=tags


.. raw:: html

    <script>
        var package = "fastindep";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastindep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastindep/README.html