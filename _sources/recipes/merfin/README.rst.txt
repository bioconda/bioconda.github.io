:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merfin'
.. highlight: bash

merfin
======

.. conda:recipe:: merfin
   :replaces_section_title:
   :noindex:

   Improved variant filtering and polishing via k\-mer validation.

   :homepage: https://github.com/arangrhie/merfin
   :license: Apache-2.0
   :recipe: /`merfin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfin/meta.yaml>`_

   


.. conda:package:: merfin

   |downloads_merfin| |docker_merfin|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends bzip2: ``>=1.0.8``
   :depends gzip: ``>=1.11``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends meryl: ``>=1.3,<2000``
   :depends pigz: ``>=2.6``
   :depends xz: ``>=5.2.5``
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

      mamba install merfin

   and update with::

      mamba update merfin

  To create a new environment, run::

      mamba create --name myenvname merfin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/merfin:<tag>

   (see `merfin/tags`_ for valid values for ``<tag>``)


.. |downloads_merfin| image:: https://img.shields.io/conda/dn/bioconda/merfin.svg?style=flat
   :target: https://anaconda.org/bioconda/merfin
   :alt:   (downloads)
.. |docker_merfin| image:: https://quay.io/repository/biocontainers/merfin/status
   :target: https://quay.io/repository/biocontainers/merfin
.. _`merfin/tags`: https://quay.io/repository/biocontainers/merfin?tab=tags


.. raw:: html

    <script>
        var package = "merfin";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merfin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merfin/README.html