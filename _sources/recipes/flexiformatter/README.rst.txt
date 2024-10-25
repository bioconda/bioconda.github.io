:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexiformatter'
.. highlight: bash

flexiformatter
==============

.. conda:recipe:: flexiformatter
   :replaces_section_title:
   :noindex:

   Moving flexiplex barcode and UMI to bam tags

   :homepage: https://github.com/ljwharbers/flexiformatter
   :license: MIT / MIT
   :recipe: /`flexiformatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiformatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexiformatter/meta.yaml>`_

   


.. conda:package:: flexiformatter

   |downloads_flexiformatter| |docker_flexiformatter|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends simplesam: 
   :depends typer: ``>=0.9.0``
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

      mamba install flexiformatter

   and update with::

      mamba update flexiformatter

  To create a new environment, run::

      mamba create --name myenvname flexiformatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexiformatter:<tag>

   (see `flexiformatter/tags`_ for valid values for ``<tag>``)


.. |downloads_flexiformatter| image:: https://img.shields.io/conda/dn/bioconda/flexiformatter.svg?style=flat
   :target: https://anaconda.org/bioconda/flexiformatter
   :alt:   (downloads)
.. |docker_flexiformatter| image:: https://quay.io/repository/biocontainers/flexiformatter/status
   :target: https://quay.io/repository/biocontainers/flexiformatter
.. _`flexiformatter/tags`: https://quay.io/repository/biocontainers/flexiformatter?tab=tags


.. raw:: html

    <script>
        var package = "flexiformatter";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexiformatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexiformatter/README.html