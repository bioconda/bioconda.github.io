:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squigualiser'
.. highlight: bash

squigualiser
============

.. conda:recipe:: squigualiser
   :replaces_section_title:
   :noindex:

   Visualise ONT raw signals

   :homepage: https://github.com/hiruna72/squigualiser
   :license: MIT
   :recipe: /`squigualiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigualiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigualiser/meta.yaml>`_

   


.. conda:package:: squigualiser

   |downloads_squigualiser| |docker_squigualiser|

   :versions:
      
      

      ``0.6.3-0``

      

   
   :depends bokeh: ``3.1.1``
   :depends matplotlib-base: ``3.7``
   :depends numpy: 
   :depends pyfaidx: 
   :depends pyfastx: 
   :depends pysam: 
   :depends pyslow5: 
   :depends python: ``>=3.8``
   :depends seaborn: 
   :depends selenium: 
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

      mamba install squigualiser

   and update with::

      mamba update squigualiser

  To create a new environment, run::

      mamba create --name myenvname squigualiser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squigualiser:<tag>

   (see `squigualiser/tags`_ for valid values for ``<tag>``)


.. |downloads_squigualiser| image:: https://img.shields.io/conda/dn/bioconda/squigualiser.svg?style=flat
   :target: https://anaconda.org/bioconda/squigualiser
   :alt:   (downloads)
.. |docker_squigualiser| image:: https://quay.io/repository/biocontainers/squigualiser/status
   :target: https://quay.io/repository/biocontainers/squigualiser
.. _`squigualiser/tags`: https://quay.io/repository/biocontainers/squigualiser?tab=tags


.. raw:: html

    <script>
        var package = "squigualiser";
        var versions = ["0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squigualiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squigualiser/README.html