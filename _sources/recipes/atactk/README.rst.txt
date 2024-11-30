:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atactk'
.. highlight: bash

atactk
======

.. conda:recipe:: atactk
   :replaces_section_title:
   :noindex:

   A toolkit for working with ATAC\-seq data.

   :homepage: http://theparkerlab.org/
   :license: GPL / GPL-3.0-or-later
   :recipe: /`atactk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atactk/meta.yaml>`_

   


.. conda:package:: atactk

   |downloads_atactk| |docker_atactk|

   :versions:
      
      

      ``0.1.9-0``,  ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends pysam: ``>=0.15.0``
   :depends python: 
   :depends python-levenshtein: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
   :depends sexpdata: 
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

      mamba install atactk

   and update with::

      mamba update atactk

  To create a new environment, run::

      mamba create --name myenvname atactk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atactk:<tag>

   (see `atactk/tags`_ for valid values for ``<tag>``)


.. |downloads_atactk| image:: https://img.shields.io/conda/dn/bioconda/atactk.svg?style=flat
   :target: https://anaconda.org/bioconda/atactk
   :alt:   (downloads)
.. |docker_atactk| image:: https://quay.io/repository/biocontainers/atactk/status
   :target: https://quay.io/repository/biocontainers/atactk
.. _`atactk/tags`: https://quay.io/repository/biocontainers/atactk?tab=tags


.. raw:: html

    <script>
        var package = "atactk";
        var versions = ["0.1.9","0.1.6","0.1.6","0.1.6","0.1.6"];
    </script>





Notes
-----
Adds 3 scripts\, namely \"trim\_adapters\"\, \"make\_cut\_matrix\" and \"plot\_aggregate\_matrix.R\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atactk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atactk/README.html