:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tesorter'
.. highlight: bash

tesorter
========

.. conda:recipe:: tesorter
   :replaces_section_title:
   :noindex:

   Lineage\-level classification of transposable elements using conserved protein domains.

   :homepage: https://github.com/zhangrengang/TEsorter
   :documentation: https://github.com/zhangrengang/TEsorter/blob/v1.4.7/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tesorter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesorter/meta.yaml>`_
   :links: doi: :doi:`10.1093/hr/uhac017`, biotools: :biotools:`TEsorter`

   


.. conda:package:: tesorter

   |downloads_tesorter| |docker_tesorter|

   :versions:
      
      

      ``1.4.7-1``,  ``1.4.7-0``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.3.0-0``,  ``1.2.5.2-0``

      

   
   :depends biopython: 
   :depends drmaa: 
   :depends hmmer: 
   :depends pp: 
   :depends python: ``>=3``
   :depends rmblast: 
   :depends xopen: 
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

      mamba install tesorter

   and update with::

      mamba update tesorter

  To create a new environment, run::

      mamba create --name myenvname tesorter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tesorter:<tag>

   (see `tesorter/tags`_ for valid values for ``<tag>``)


.. |downloads_tesorter| image:: https://img.shields.io/conda/dn/bioconda/tesorter.svg?style=flat
   :target: https://anaconda.org/bioconda/tesorter
   :alt:   (downloads)
.. |docker_tesorter| image:: https://quay.io/repository/biocontainers/tesorter/status
   :target: https://quay.io/repository/biocontainers/tesorter
.. _`tesorter/tags`: https://quay.io/repository/biocontainers/tesorter?tab=tags


.. raw:: html

    <script>
        var package = "tesorter";
        var versions = ["1.4.7","1.4.7","1.4.6","1.4.6","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tesorter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tesorter/README.html