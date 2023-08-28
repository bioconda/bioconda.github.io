:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biowdl-input-converter'
.. highlight: bash

biowdl-input-converter
======================

.. conda:recipe:: biowdl-input-converter
   :replaces_section_title:
   :noindex:

   Converting various input formats into WDL structs for BioWDL pipelines.

   :homepage: https://github.com/biowdl/biowdl-input-converter
   :documentation: https://biowdl-input-converter.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`biowdl-input-converter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biowdl-input-converter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biowdl-input-converter/meta.yaml>`_

   


.. conda:package:: biowdl-input-converter

   |downloads_biowdl-input-converter| |docker_biowdl-input-converter|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends python: ``>=3.7``
   :depends pyyaml: 
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

      mamba install biowdl-input-converter

   and update with::

      mamba update biowdl-input-converter

  To create a new environment, run::

      mamba create --name myenvname biowdl-input-converter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biowdl-input-converter:<tag>

   (see `biowdl-input-converter/tags`_ for valid values for ``<tag>``)


.. |downloads_biowdl-input-converter| image:: https://img.shields.io/conda/dn/bioconda/biowdl-input-converter.svg?style=flat
   :target: https://anaconda.org/bioconda/biowdl-input-converter
   :alt:   (downloads)
.. |docker_biowdl-input-converter| image:: https://quay.io/repository/biocontainers/biowdl-input-converter/status
   :target: https://quay.io/repository/biocontainers/biowdl-input-converter
.. _`biowdl-input-converter/tags`: https://quay.io/repository/biocontainers/biowdl-input-converter?tab=tags


.. raw:: html

    <script>
        var package = "biowdl-input-converter";
        var versions = ["0.3.0","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biowdl-input-converter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biowdl-input-converter/README.html