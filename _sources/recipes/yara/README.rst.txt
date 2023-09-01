:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yara'
.. highlight: bash

yara
====

.. conda:recipe:: yara
   :replaces_section_title:
   :noindex:

   Yara is an exact tool for aligning DNA sequencing reads to reference genomes.

   :homepage: https://github.com/seqan/seqan/blob/develop/apps/yara/README.rst
   :license: BSD / https://raw.githubusercontent.com/seqan/seqan/develop/apps/yara/LICENSE
   :recipe: /`yara <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yara/meta.yaml>`_
   :links: biotools: :biotools:`yara`, doi: :doi:`10.1093/nar/gkt005`

   


.. conda:package:: yara

   |downloads_yara| |docker_yara|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.9.10-1``,  ``0.9.10-0``,  ``0.9.9-0``,  ``0.9.6-0``

      

   
   :depends bzip2: 
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

      mamba install yara

   and update with::

      mamba update yara

  To create a new environment, run::

      mamba create --name myenvname yara

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yara:<tag>

   (see `yara/tags`_ for valid values for ``<tag>``)


.. |downloads_yara| image:: https://img.shields.io/conda/dn/bioconda/yara.svg?style=flat
   :target: https://anaconda.org/bioconda/yara
   :alt:   (downloads)
.. |docker_yara| image:: https://quay.io/repository/biocontainers/yara/status
   :target: https://quay.io/repository/biocontainers/yara
.. _`yara/tags`: https://quay.io/repository/biocontainers/yara?tab=tags


.. raw:: html

    <script>
        var package = "yara";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","0.9.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yara/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yara/README.html