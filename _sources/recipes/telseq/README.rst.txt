:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telseq'
.. highlight: bash

telseq
======

.. conda:recipe:: telseq
   :replaces_section_title:
   :noindex:

   A software for calculating telomere length

   :homepage: https://github.com/zd1/telseq
   :license: GPL-3
   :recipe: /`telseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq/meta.yaml>`_

   


.. conda:package:: telseq

   |downloads_telseq| |docker_telseq|

   :versions:
      
      

      ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install telseq

   and update with::

      mamba update telseq

  To create a new environment, run::

      mamba create --name myenvname telseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/telseq:<tag>

   (see `telseq/tags`_ for valid values for ``<tag>``)


.. |downloads_telseq| image:: https://img.shields.io/conda/dn/bioconda/telseq.svg?style=flat
   :target: https://anaconda.org/bioconda/telseq
   :alt:   (downloads)
.. |docker_telseq| image:: https://quay.io/repository/biocontainers/telseq/status
   :target: https://quay.io/repository/biocontainers/telseq
.. _`telseq/tags`: https://quay.io/repository/biocontainers/telseq?tab=tags


.. raw:: html

    <script>
        var package = "telseq";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telseq/README.html