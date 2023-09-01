:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funcannot'
.. highlight: bash

funcannot
=========

.. conda:recipe:: funcannot
   :replaces_section_title:
   :noindex:

   Annotates cDNA\, protein\, mutation type\, and other funcational changes to variants in a VCF file with pre\-existing gene annotations \(see\:genepender\).

   :homepage: https://github.com/BioTools-Tek/funcannot
   :license: GPLv3
   :recipe: /`funcannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot/meta.yaml>`_

   


.. conda:package:: funcannot

   |downloads_funcannot| |docker_funcannot|

   :versions:
      
      

      ``v2.8-1``,  ``v2.8-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends qt: ``4.8.7.*``
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

      mamba install funcannot

   and update with::

      mamba update funcannot

  To create a new environment, run::

      mamba create --name myenvname funcannot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/funcannot:<tag>

   (see `funcannot/tags`_ for valid values for ``<tag>``)


.. |downloads_funcannot| image:: https://img.shields.io/conda/dn/bioconda/funcannot.svg?style=flat
   :target: https://anaconda.org/bioconda/funcannot
   :alt:   (downloads)
.. |docker_funcannot| image:: https://quay.io/repository/biocontainers/funcannot/status
   :target: https://quay.io/repository/biocontainers/funcannot
.. _`funcannot/tags`: https://quay.io/repository/biocontainers/funcannot?tab=tags


.. raw:: html

    <script>
        var package = "funcannot";
        var versions = ["v2.8","v2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funcannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funcannot/README.html