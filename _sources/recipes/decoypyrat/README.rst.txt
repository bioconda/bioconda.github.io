:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decoypyrat'
.. highlight: bash

decoypyrat
==========

.. conda:recipe:: decoypyrat
   :replaces_section_title:
   :noindex:

   Fast Hybrid Decoy Sequence Database Creation for Proteomic Mass Spectrometery Analyses

   :homepage: https://github.com/tdido/DecoyPYrat
   :license: MIT
   :recipe: /`decoypyrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoypyrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoypyrat/meta.yaml>`_

   


.. conda:package:: decoypyrat

   |downloads_decoypyrat| |docker_decoypyrat|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends python: 
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

      mamba install decoypyrat

   and update with::

      mamba update decoypyrat

  To create a new environment, run::

      mamba create --name myenvname decoypyrat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/decoypyrat:<tag>

   (see `decoypyrat/tags`_ for valid values for ``<tag>``)


.. |downloads_decoypyrat| image:: https://img.shields.io/conda/dn/bioconda/decoypyrat.svg?style=flat
   :target: https://anaconda.org/bioconda/decoypyrat
   :alt:   (downloads)
.. |docker_decoypyrat| image:: https://quay.io/repository/biocontainers/decoypyrat/status
   :target: https://quay.io/repository/biocontainers/decoypyrat
.. _`decoypyrat/tags`: https://quay.io/repository/biocontainers/decoypyrat?tab=tags


.. raw:: html

    <script>
        var package = "decoypyrat";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decoypyrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decoypyrat/README.html