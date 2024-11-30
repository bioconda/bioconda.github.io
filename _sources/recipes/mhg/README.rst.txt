:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhg'
.. highlight: bash

mhg
===

.. conda:recipe:: mhg
   :replaces_section_title:
   :noindex:

   MHG is an annotation\-free graph\-based tool to merge and partition homologous groups.

   :homepage: https://github.com/NakhlehLab/Maximal-Homologous-Groups
   :license: MIT
   :recipe: /`mhg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhg/meta.yaml>`_

   


.. conda:package:: mhg

   |downloads_mhg| |docker_mhg|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.3-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 
   :depends networkx: 
   :depends numpy: ``>=1.11``
   :depends pandas: ``>=1.1.3``
   :depends python: ``>=3.6,<3.9``
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

      mamba install mhg

   and update with::

      mamba update mhg

  To create a new environment, run::

      mamba create --name myenvname mhg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhg:<tag>

   (see `mhg/tags`_ for valid values for ``<tag>``)


.. |downloads_mhg| image:: https://img.shields.io/conda/dn/bioconda/mhg.svg?style=flat
   :target: https://anaconda.org/bioconda/mhg
   :alt:   (downloads)
.. |docker_mhg| image:: https://quay.io/repository/biocontainers/mhg/status
   :target: https://quay.io/repository/biocontainers/mhg
.. _`mhg/tags`: https://quay.io/repository/biocontainers/mhg?tab=tags


.. raw:: html

    <script>
        var package = "mhg";
        var versions = ["1.1.0","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhg/README.html