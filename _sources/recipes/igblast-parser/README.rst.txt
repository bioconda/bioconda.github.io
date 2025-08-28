:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast-parser'
.. highlight: bash

igblast-parser
==============

.. conda:recipe:: igblast-parser
   :replaces_section_title:
   :noindex:

   Parser of Igblast results into a csv file

   :homepage: https://github.com/aerijman/igblast-parser
   :license: MIT
   :recipe: /`igblast-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast-parser/meta.yaml>`_

   


.. conda:package:: igblast-parser

   |downloads_igblast-parser| |docker_igblast-parser|

   :versions:
      
      

      ``0.0.4-6``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install igblast-parser

   and update with::

      mamba update igblast-parser

  To create a new environment, run::

      mamba create --name myenvname igblast-parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igblast-parser:<tag>

   (see `igblast-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_igblast-parser| image:: https://img.shields.io/conda/dn/bioconda/igblast-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/igblast-parser
   :alt:   (downloads)
.. |docker_igblast-parser| image:: https://quay.io/repository/biocontainers/igblast-parser/status
   :target: https://quay.io/repository/biocontainers/igblast-parser
.. _`igblast-parser/tags`: https://quay.io/repository/biocontainers/igblast-parser?tab=tags


.. raw:: html

    <script>
        var package = "igblast-parser";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast-parser/README.html