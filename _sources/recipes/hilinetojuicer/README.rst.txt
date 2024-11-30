:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hilinetojuicer'
.. highlight: bash

hilinetojuicer
==============

.. conda:recipe:: hilinetojuicer
   :replaces_section_title:
   :noindex:

   Convert HiLine SAM alignments to Juicer format

   :homepage: https://pypi.org/project/HiLineToJuicer/0.0.2/
   :license: MIT
   :recipe: /`hilinetojuicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer/meta.yaml>`_

   


.. conda:package:: hilinetojuicer

   |downloads_hilinetojuicer| |docker_hilinetojuicer|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends click: ``>=8.0.1``
   :depends coreutils: ``>=8.32``
   :depends pysam: ``>=0.17.0``
   :depends python: ``>=3.8``
   :depends samtools: ``>=1.12``
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

      mamba install hilinetojuicer

   and update with::

      mamba update hilinetojuicer

  To create a new environment, run::

      mamba create --name myenvname hilinetojuicer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hilinetojuicer:<tag>

   (see `hilinetojuicer/tags`_ for valid values for ``<tag>``)


.. |downloads_hilinetojuicer| image:: https://img.shields.io/conda/dn/bioconda/hilinetojuicer.svg?style=flat
   :target: https://anaconda.org/bioconda/hilinetojuicer
   :alt:   (downloads)
.. |docker_hilinetojuicer| image:: https://quay.io/repository/biocontainers/hilinetojuicer/status
   :target: https://quay.io/repository/biocontainers/hilinetojuicer
.. _`hilinetojuicer/tags`: https://quay.io/repository/biocontainers/hilinetojuicer?tab=tags


.. raw:: html

    <script>
        var package = "hilinetojuicer";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hilinetojuicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hilinetojuicer/README.html