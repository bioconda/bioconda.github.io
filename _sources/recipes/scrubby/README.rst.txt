:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrubby'
.. highlight: bash

scrubby
=======

.. conda:recipe:: scrubby
   :replaces_section_title:
   :noindex:

   Read depletion\/extraction and database cleaning using k\-mer and alignment methods

   :homepage: https://github.com/esteinig/scrubby
   :license: MIT / MIT
   :recipe: /`scrubby <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrubby>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrubby/meta.yaml>`_

   


.. conda:package:: scrubby

   |downloads_scrubby| |docker_scrubby|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends kraken2: ``2.1.2.*``
   :depends libgcc-ng: ``>=12``
   :depends minimap2: ``2.24.*``
   :depends strobealign: ``0.8.0.*``
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

      mamba install scrubby

   and update with::

      mamba update scrubby

  To create a new environment, run::

      mamba create --name myenvname scrubby

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scrubby:<tag>

   (see `scrubby/tags`_ for valid values for ``<tag>``)


.. |downloads_scrubby| image:: https://img.shields.io/conda/dn/bioconda/scrubby.svg?style=flat
   :target: https://anaconda.org/bioconda/scrubby
   :alt:   (downloads)
.. |docker_scrubby| image:: https://quay.io/repository/biocontainers/scrubby/status
   :target: https://quay.io/repository/biocontainers/scrubby
.. _`scrubby/tags`: https://quay.io/repository/biocontainers/scrubby?tab=tags


.. raw:: html

    <script>
        var package = "scrubby";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrubby/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrubby/README.html