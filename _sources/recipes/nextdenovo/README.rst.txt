:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextdenovo'
.. highlight: bash

nextdenovo
==========

.. conda:recipe:: nextdenovo
   :replaces_section_title:
   :noindex:

   String graph\-based de novo assembler for long reads \(CLR\, HiFi and ONT\)

   :homepage: https://github.com/Nextomics/NextDenovo
   :documentation: https://nextdenovo.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nextdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.03.09.531669`, biotools: :biotools:`nextdenovo`, usegalaxy-eu: :usegalaxy-eu:`nextdenovo`

   


.. conda:package:: nextdenovo

   |downloads_nextdenovo| |docker_nextdenovo|

   :versions:
      
      

      ``2.5.2-5``,  ``2.5.2-4``,  ``2.5.2-3``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends paralleltask: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install nextdenovo

   and update with::

      mamba update nextdenovo

  To create a new environment, run::

      mamba create --name myenvname nextdenovo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextdenovo:<tag>

   (see `nextdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_nextdenovo| image:: https://img.shields.io/conda/dn/bioconda/nextdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/nextdenovo
   :alt:   (downloads)
.. |docker_nextdenovo| image:: https://quay.io/repository/biocontainers/nextdenovo/status
   :target: https://quay.io/repository/biocontainers/nextdenovo
.. _`nextdenovo/tags`: https://quay.io/repository/biocontainers/nextdenovo?tab=tags


.. raw:: html

    <script>
        var package = "nextdenovo";
        var versions = ["2.5.2","2.5.2","2.5.2","2.5.2","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextdenovo/README.html