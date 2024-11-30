:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lightning'
.. highlight: bash

lightning
=========

.. conda:recipe:: lightning
   :replaces_section_title:
   :noindex:

   lightning is a library for large\-scale linear classification\, regression and ranking in Python

   :homepage: http://contrib.scikit-learn.org/lightning/
   :license: Unknown
   :recipe: /`lightning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightning/meta.yaml>`_

   


.. conda:package:: lightning

   |downloads_lightning| |docker_lightning|

   :versions:
      
      

      ``0.2.dev0-0``

      

   
   :depends numpy: 
   :depends python: ``2.7*``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install lightning

   and update with::

      mamba update lightning

  To create a new environment, run::

      mamba create --name myenvname lightning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lightning:<tag>

   (see `lightning/tags`_ for valid values for ``<tag>``)


.. |downloads_lightning| image:: https://img.shields.io/conda/dn/bioconda/lightning.svg?style=flat
   :target: https://anaconda.org/bioconda/lightning
   :alt:   (downloads)
.. |docker_lightning| image:: https://quay.io/repository/biocontainers/lightning/status
   :target: https://quay.io/repository/biocontainers/lightning
.. _`lightning/tags`: https://quay.io/repository/biocontainers/lightning?tab=tags


.. raw:: html

    <script>
        var package = "lightning";
        var versions = ["0.2.dev0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightning/README.html