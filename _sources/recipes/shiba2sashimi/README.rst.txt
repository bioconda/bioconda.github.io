:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiba2sashimi'
.. highlight: bash

shiba2sashimi
=============

.. conda:recipe:: shiba2sashimi
   :replaces_section_title:
   :noindex:

   A utility for creating sashimi plot from Shiba output

   :homepage: https://github.com/Sika-Zheng-Lab/shiba2sashimi
   :license: MIT
   :recipe: /`shiba2sashimi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba2sashimi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba2sashimi/meta.yaml>`_

   A utility to create Sashimi plots\, a publication\-quality visualization of RNA\-seq data\, from Shiba output.


.. conda:package:: shiba2sashimi

   |downloads_shiba2sashimi| |docker_shiba2sashimi|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends matplotlib-base: ``>=3.1.0``
   :depends numpy: ``>=1.18.0,<2.0.0``
   :depends pysam: ``>=0.22.0``
   :depends python: 
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

      mamba install shiba2sashimi

   and update with::

      mamba update shiba2sashimi

  To create a new environment, run::

      mamba create --name myenvname shiba2sashimi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shiba2sashimi:<tag>

   (see `shiba2sashimi/tags`_ for valid values for ``<tag>``)


.. |downloads_shiba2sashimi| image:: https://img.shields.io/conda/dn/bioconda/shiba2sashimi.svg?style=flat
   :target: https://anaconda.org/bioconda/shiba2sashimi
   :alt:   (downloads)
.. |docker_shiba2sashimi| image:: https://quay.io/repository/biocontainers/shiba2sashimi/status
   :target: https://quay.io/repository/biocontainers/shiba2sashimi
.. _`shiba2sashimi/tags`: https://quay.io/repository/biocontainers/shiba2sashimi?tab=tags


.. raw:: html

    <script>
        var package = "shiba2sashimi";
        var versions = ["0.1.6","0.1.5","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiba2sashimi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiba2sashimi/README.html