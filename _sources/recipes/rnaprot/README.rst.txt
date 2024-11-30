:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaprot'
.. highlight: bash

rnaprot
=======

.. conda:recipe:: rnaprot
   :replaces_section_title:
   :noindex:

   Modelling RBP binding preferences to predict RPB binding sites

   :homepage: https://github.com/BackofenLab/RNAProt
   :license: MIT
   :recipe: /`rnaprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaprot/meta.yaml>`_

   


.. conda:package:: rnaprot

   |downloads_rnaprot| |docker_rnaprot|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``

      

   
   :depends bedtools: 
   :depends hpbandster: 
   :depends logomaker: 
   :depends markdown: ``<=3.2.2``
   :depends plotly: 
   :depends python: ``>=3.8``
   :depends pytorch: ``>=1.8``
   :depends scikit-learn: 
   :depends seaborn: 
   :depends ucsc-bigwigaverageoverbed: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
   :depends ushuffle: 
   :depends viennarna: 
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

      mamba install rnaprot

   and update with::

      mamba update rnaprot

  To create a new environment, run::

      mamba create --name myenvname rnaprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnaprot:<tag>

   (see `rnaprot/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaprot| image:: https://img.shields.io/conda/dn/bioconda/rnaprot.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaprot
   :alt:   (downloads)
.. |docker_rnaprot| image:: https://quay.io/repository/biocontainers/rnaprot/status
   :target: https://quay.io/repository/biocontainers/rnaprot
.. _`rnaprot/tags`: https://quay.io/repository/biocontainers/rnaprot?tab=tags


.. raw:: html

    <script>
        var package = "rnaprot";
        var versions = ["0.5","0.5","0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaprot/README.html