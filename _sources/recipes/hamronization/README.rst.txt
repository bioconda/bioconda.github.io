:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hamronization'
.. highlight: bash

hamronization
=============

.. conda:recipe:: hamronization
   :replaces_section_title:
   :noindex:

   Tool to convert and summarize AMR gene detection outputs using the hAMRonization specification

   :homepage: https://github.com/pha4ge/hAMRonization
   :documentation: https://github.com/pha4ge/hAMRonization/blob/master/README.md
   
   :license: LGPL / GNU Lesser General Public v3 (LGPLv3)
   :recipe: /`hamronization <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamronization>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hamronization/meta.yaml>`_

   


.. conda:package:: hamronization

   |downloads_hamronization| |docker_hamronization|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``

      

   
   :depends pandas: 
   :depends python: ``>=3.7``
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

      mamba install hamronization

   and update with::

      mamba update hamronization

  To create a new environment, run::

      mamba create --name myenvname hamronization

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hamronization:<tag>

   (see `hamronization/tags`_ for valid values for ``<tag>``)


.. |downloads_hamronization| image:: https://img.shields.io/conda/dn/bioconda/hamronization.svg?style=flat
   :target: https://anaconda.org/bioconda/hamronization
   :alt:   (downloads)
.. |docker_hamronization| image:: https://quay.io/repository/biocontainers/hamronization/status
   :target: https://quay.io/repository/biocontainers/hamronization
.. _`hamronization/tags`: https://quay.io/repository/biocontainers/hamronization?tab=tags


.. raw:: html

    <script>
        var package = "hamronization";
        var versions = ["1.1.1","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hamronization/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hamronization/README.html