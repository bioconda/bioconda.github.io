:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyloblitz'
.. highlight: bash

phyloblitz
==========

.. conda:recipe:: phyloblitz
   :replaces_section_title:
   :noindex:

   Rapid SSU rRNA marker gene screening of long read metagenomes.

   :homepage: https://github.com/kbseah/phyloblitz
   :documentation: https://github.com/kbseah/phyloblitz#readme
   
   :license: MIT / MIT
   :recipe: /`phyloblitz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloblitz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyloblitz/meta.yaml>`_

   


.. conda:package:: phyloblitz

   |downloads_phyloblitz| |docker_phyloblitz|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends isonclust3: ``>=0.3.0,<0.4``
   :depends matplotlib-base: ``>=3.10.8,<4``
   :depends minimap2: ``>=2.30,<3``
   :depends mistune: ``>=3.1.4,<4``
   :depends numpy: ``>=2.3.5,<3``
   :depends oxli: ``>=0.3.0,<0.4``
   :depends pyfastx: ``>=2.2.0,<3``
   :depends pymarkovclustering: ``>=0.1.1,<0.2``
   :depends pysam: ``>=0.23.3,<0.24``
   :depends python: ``>=3.10,<3.14``
   :depends rich-click: ``>=1.9.4,<2``
   :depends spoa: ``>=4.1.5,<5``
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

      mamba install phyloblitz

   and update with::

      mamba update phyloblitz

  To create a new environment, run::

      mamba create --name myenvname phyloblitz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyloblitz:<tag>

   (see `phyloblitz/tags`_ for valid values for ``<tag>``)


.. |downloads_phyloblitz| image:: https://img.shields.io/conda/dn/bioconda/phyloblitz.svg?style=flat
   :target: https://anaconda.org/bioconda/phyloblitz
   :alt:   (downloads)
.. |docker_phyloblitz| image:: https://quay.io/repository/biocontainers/phyloblitz/status
   :target: https://quay.io/repository/biocontainers/phyloblitz
.. _`phyloblitz/tags`: https://quay.io/repository/biocontainers/phyloblitz?tab=tags


.. raw:: html

    <script>
        var package = "phyloblitz";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyloblitz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyloblitz/README.html