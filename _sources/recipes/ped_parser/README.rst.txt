:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ped_parser'
.. highlight: bash

ped_parser
==========

.. conda:recipe:: ped_parser
   :replaces_section_title:
   :noindex:

   A ped file parser.

   :homepage: https://github.com/moonso/ped_parser
   :license: BSD License
   :recipe: /`ped_parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ped_parser/meta.yaml>`_

   


.. conda:package:: ped_parser

   |downloads_ped_parser| |docker_ped_parser|

   :versions:
      
      

      ``1.6.6-2``,  ``1.6.6-1``,  ``1.6.6-0``,  ``1.6.5-1``,  ``1.6.5-0``

      

   
   :depends click: 
   :depends pytest: 
   :depends python: 
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

      mamba install ped_parser

   and update with::

      mamba update ped_parser

  To create a new environment, run::

      mamba create --name myenvname ped_parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ped_parser:<tag>

   (see `ped_parser/tags`_ for valid values for ``<tag>``)


.. |downloads_ped_parser| image:: https://img.shields.io/conda/dn/bioconda/ped_parser.svg?style=flat
   :target: https://anaconda.org/bioconda/ped_parser
   :alt:   (downloads)
.. |docker_ped_parser| image:: https://quay.io/repository/biocontainers/ped_parser/status
   :target: https://quay.io/repository/biocontainers/ped_parser
.. _`ped_parser/tags`: https://quay.io/repository/biocontainers/ped_parser?tab=tags


.. raw:: html

    <script>
        var package = "ped_parser";
        var versions = ["1.6.6","1.6.6","1.6.6","1.6.5","1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ped_parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ped_parser/README.html