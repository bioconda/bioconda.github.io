:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyphy'
.. highlight: bash

phyphy
======

.. conda:recipe:: phyphy
   :replaces_section_title:
   :noindex:

   Facilitating the execution and parsing of standard HyPhy \(\>\=2.3.7\) analyses

   :homepage: https://github.com/sjspielman/phyphy
   :license: OTHER / BSD-3-Clause
   :recipe: /`phyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyphy/meta.yaml>`_

   


.. conda:package:: phyphy

   |downloads_phyphy| |docker_phyphy|

   :versions:
      
      

      ``0.4.3-0``

      

   
   :depends ete3: ``>=3.1``
   :depends python: 
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

      mamba install phyphy

   and update with::

      mamba update phyphy

  To create a new environment, run::

      mamba create --name myenvname phyphy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phyphy:<tag>

   (see `phyphy/tags`_ for valid values for ``<tag>``)


.. |downloads_phyphy| image:: https://img.shields.io/conda/dn/bioconda/phyphy.svg?style=flat
   :target: https://anaconda.org/bioconda/phyphy
   :alt:   (downloads)
.. |docker_phyphy| image:: https://quay.io/repository/biocontainers/phyphy/status
   :target: https://quay.io/repository/biocontainers/phyphy
.. _`phyphy/tags`: https://quay.io/repository/biocontainers/phyphy?tab=tags


.. raw:: html

    <script>
        var package = "phyphy";
        var versions = ["0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyphy/README.html