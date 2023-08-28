:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transrate'
.. highlight: bash

transrate
=========

.. conda:recipe:: transrate
   :replaces_section_title:
   :noindex:

   Reference free quality assessment of de\-novo transcriptome assemblies

   :homepage: https://github.com/blahah/transrate/
   :license: MIT
   :recipe: /`transrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.196469.115`

   


.. conda:package:: transrate

   |downloads_transrate| |docker_transrate|

   :versions:
      
      

      ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends blast: ``2.2.31.*``
   :depends boost: ``1.60.*``
   :depends libgcc-ng: ``>=12``
   :depends rb-bundler: 
   :depends ruby: ``>=2``
   :depends ruby: ``>=2.5.7,<2.6.0a0``
   :depends salmon: ``0.6.0.*``
   :depends snap-aligner: ``1.0dev.96.*``
   :depends transrate-tools: ``1.0.0.*``
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

      mamba install transrate

   and update with::

      mamba update transrate

  To create a new environment, run::

      mamba create --name myenvname transrate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transrate:<tag>

   (see `transrate/tags`_ for valid values for ``<tag>``)


.. |downloads_transrate| image:: https://img.shields.io/conda/dn/bioconda/transrate.svg?style=flat
   :target: https://anaconda.org/bioconda/transrate
   :alt:   (downloads)
.. |docker_transrate| image:: https://quay.io/repository/biocontainers/transrate/status
   :target: https://quay.io/repository/biocontainers/transrate
.. _`transrate/tags`: https://quay.io/repository/biocontainers/transrate?tab=tags


.. raw:: html

    <script>
        var package = "transrate";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate/README.html