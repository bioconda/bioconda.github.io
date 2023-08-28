:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomescope2'
.. highlight: bash

genomescope2
============

.. conda:recipe:: genomescope2
   :replaces_section_title:
   :noindex:

   Reference\-free profiling of polyploid genomes

   :homepage: https://github.com/tbenavi1/genomescope2.0
   :license: Apache License, Version 2.0 (Apache-2.0)
   :recipe: /`genomescope2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomescope2/meta.yaml>`_

   


.. conda:package:: genomescope2

   |downloads_genomescope2| |docker_genomescope2|

   :versions:
      
      

      ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends fonts-conda-ecosystem: 
   :depends python: ``>=3.6``
   :depends r-argparse: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-minpack.lm: 
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

      mamba install genomescope2

   and update with::

      mamba update genomescope2

  To create a new environment, run::

      mamba create --name myenvname genomescope2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomescope2:<tag>

   (see `genomescope2/tags`_ for valid values for ``<tag>``)


.. |downloads_genomescope2| image:: https://img.shields.io/conda/dn/bioconda/genomescope2.svg?style=flat
   :target: https://anaconda.org/bioconda/genomescope2
   :alt:   (downloads)
.. |docker_genomescope2| image:: https://quay.io/repository/biocontainers/genomescope2/status
   :target: https://quay.io/repository/biocontainers/genomescope2
.. _`genomescope2/tags`: https://quay.io/repository/biocontainers/genomescope2?tab=tags


.. raw:: html

    <script>
        var package = "genomescope2";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomescope2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomescope2/README.html