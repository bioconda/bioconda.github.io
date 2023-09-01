:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrml2isa'
.. highlight: bash

nmrml2isa
=========

.. conda:recipe:: nmrml2isa
   :replaces_section_title:
   :noindex:

   nmrml2isa \- nmrML to ISA\-Tab parsing tool

   :homepage: http://github.com/ISA-tools/nmrml2isa
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`nmrml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrml2isa/meta.yaml>`_

   


.. conda:package:: nmrml2isa

   |downloads_nmrml2isa| |docker_nmrml2isa|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends lxml: 
   :depends openpyxl: 
   :depends pronto: 
   :depends python: ``>=3``
   :depends six: 
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

      mamba install nmrml2isa

   and update with::

      mamba update nmrml2isa

  To create a new environment, run::

      mamba create --name myenvname nmrml2isa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nmrml2isa:<tag>

   (see `nmrml2isa/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrml2isa| image:: https://img.shields.io/conda/dn/bioconda/nmrml2isa.svg?style=flat
   :target: https://anaconda.org/bioconda/nmrml2isa
   :alt:   (downloads)
.. |docker_nmrml2isa| image:: https://quay.io/repository/biocontainers/nmrml2isa/status
   :target: https://quay.io/repository/biocontainers/nmrml2isa
.. _`nmrml2isa/tags`: https://quay.io/repository/biocontainers/nmrml2isa?tab=tags


.. raw:: html

    <script>
        var package = "nmrml2isa";
        var versions = ["0.3.1","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrml2isa/README.html