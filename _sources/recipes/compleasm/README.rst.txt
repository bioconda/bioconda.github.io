:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'compleasm'
.. highlight: bash

compleasm
=========

.. conda:recipe:: compleasm
   :replaces_section_title:
   :noindex:

   Compleasm\: a faster and more accurate reimplementation of BUSCO

   :homepage: https://github.com/huangnengCSU/compleasm
   :license: Apache License 2.0
   :recipe: /`compleasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compleasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/compleasm/meta.yaml>`_

   


.. conda:package:: compleasm

   |downloads_compleasm| |docker_compleasm|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``

      

   
   :depends dendropy: ``<4.6.0``
   :depends hmmer: 
   :depends miniprot: ``>=0.11``
   :depends pandas: 
   :depends python: 
   :depends sepp: 
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

      mamba install compleasm

   and update with::

      mamba update compleasm

  To create a new environment, run::

      mamba create --name myenvname compleasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/compleasm:<tag>

   (see `compleasm/tags`_ for valid values for ``<tag>``)


.. |downloads_compleasm| image:: https://img.shields.io/conda/dn/bioconda/compleasm.svg?style=flat
   :target: https://anaconda.org/bioconda/compleasm
   :alt:   (downloads)
.. |docker_compleasm| image:: https://quay.io/repository/biocontainers/compleasm/status
   :target: https://quay.io/repository/biocontainers/compleasm
.. _`compleasm/tags`: https://quay.io/repository/biocontainers/compleasm?tab=tags


.. raw:: html

    <script>
        var package = "compleasm";
        var versions = ["0.2.6","0.2.5","0.2.4","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/compleasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/compleasm/README.html