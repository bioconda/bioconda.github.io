:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cherri'
.. highlight: bash

cherri
======

.. conda:recipe:: cherri
   :replaces_section_title:
   :noindex:

   Accurate detection of functional RNA\-RNA Interactions sites

   :homepage: https://github.com/BackofenLab/Cherri
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cherri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cherri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cherri/meta.yaml>`_

   


.. conda:package:: cherri

   |downloads_cherri| |docker_cherri|

   :versions:
      
      

      ``0.8-0``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``

      

   
   :depends bedtools: 
   :depends biofilm: ``>=0.0.102``
   :depends biopython: 
   :depends eden-kernel: 
   :depends intarna: 
   :depends interlap: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends python-wget: 
   :depends scikit-learn: 
   :depends ubergauss: 
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

      mamba install cherri

   and update with::

      mamba update cherri

  To create a new environment, run::

      mamba create --name myenvname cherri

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cherri:<tag>

   (see `cherri/tags`_ for valid values for ``<tag>``)


.. |downloads_cherri| image:: https://img.shields.io/conda/dn/bioconda/cherri.svg?style=flat
   :target: https://anaconda.org/bioconda/cherri
   :alt:   (downloads)
.. |docker_cherri| image:: https://quay.io/repository/biocontainers/cherri/status
   :target: https://quay.io/repository/biocontainers/cherri
.. _`cherri/tags`: https://quay.io/repository/biocontainers/cherri?tab=tags


.. raw:: html

    <script>
        var package = "cherri";
        var versions = ["0.8","0.7","0.7","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cherri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cherri/README.html