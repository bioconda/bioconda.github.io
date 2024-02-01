:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromograph'
.. highlight: bash

chromograph
===========

.. conda:recipe:: chromograph
   :replaces_section_title:
   :noindex:

   Chromograph is a python package to create PNG images from genetics data such as BED and WIG files.

   :homepage: https://github.com/Clinical-Genomics/chromograph
   :license: MIT
   :recipe: /`chromograph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromograph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromograph/meta.yaml>`_

   


.. conda:package:: chromograph

   |downloads_chromograph| |docker_chromograph|

   :versions:
      
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends matplotlib-base: ``3.5.3``
   :depends numpy: ``>=1.15``
   :depends pandas: 
   :depends pyaml: 
   :depends python: ``3.9``
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

      mamba install chromograph

   and update with::

      mamba update chromograph

  To create a new environment, run::

      mamba create --name myenvname chromograph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromograph:<tag>

   (see `chromograph/tags`_ for valid values for ``<tag>``)


.. |downloads_chromograph| image:: https://img.shields.io/conda/dn/bioconda/chromograph.svg?style=flat
   :target: https://anaconda.org/bioconda/chromograph
   :alt:   (downloads)
.. |docker_chromograph| image:: https://quay.io/repository/biocontainers/chromograph/status
   :target: https://quay.io/repository/biocontainers/chromograph
.. _`chromograph/tags`: https://quay.io/repository/biocontainers/chromograph?tab=tags


.. raw:: html

    <script>
        var package = "chromograph";
        var versions = ["1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromograph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromograph/README.html