:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zorro'
.. highlight: bash

zorro
=====

.. conda:recipe:: zorro
   :replaces_section_title:
   :noindex:

   ZORRO is a probabilistic masking program that assigns confidence scores to each column in a multiple sequence alignment.

   :homepage: https://sourceforge.net/projects/probmask/
   :license: Apache / Apache License 2.0
   :recipe: /`zorro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zorro/meta.yaml>`_

   


.. conda:package:: zorro

   |downloads_zorro| |docker_zorro|

   :versions:
      
      

      ``2011.12.01-5``,  ``2011.12.01-4``,  ``2011.12.01-3``,  ``2011.12.01-2``,  ``2011.12.01-1``,  ``2011.12.01-0``

      

   
   :depends fasttree: 
   :depends libgcc: ``>=13``
   :depends perl: 
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

      mamba install zorro

   and update with::

      mamba update zorro

  To create a new environment, run::

      mamba create --name myenvname zorro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zorro:<tag>

   (see `zorro/tags`_ for valid values for ``<tag>``)


.. |downloads_zorro| image:: https://img.shields.io/conda/dn/bioconda/zorro.svg?style=flat
   :target: https://anaconda.org/bioconda/zorro
   :alt:   (downloads)
.. |docker_zorro| image:: https://quay.io/repository/biocontainers/zorro/status
   :target: https://quay.io/repository/biocontainers/zorro
.. _`zorro/tags`: https://quay.io/repository/biocontainers/zorro?tab=tags


.. raw:: html

    <script>
        var package = "zorro";
        var versions = ["2011.12.01","2011.12.01","2011.12.01","2011.12.01","2011.12.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zorro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zorro/README.html