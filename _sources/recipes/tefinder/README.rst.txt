:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tefinder'
.. highlight: bash

tefinder
========

.. conda:recipe:: tefinder
   :replaces_section_title:
   :noindex:

   Programs for transposable element search and annotation in large eukaryotic genome sequence.

   :homepage: https://forgemia.inra.fr/urgi-anagen/te_finder
   :license: CeCILL
   :recipe: /`tefinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tefinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tefinder/meta.yaml>`_

   


.. conda:package:: tefinder

   |downloads_tefinder| |docker_tefinder|

   :versions:
      
      

      ``2.32-0``

      

   
   :depends blast: 
   :depends blast-legacy: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
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

      mamba install tefinder

   and update with::

      mamba update tefinder

  To create a new environment, run::

      mamba create --name myenvname tefinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tefinder:<tag>

   (see `tefinder/tags`_ for valid values for ``<tag>``)


.. |downloads_tefinder| image:: https://img.shields.io/conda/dn/bioconda/tefinder.svg?style=flat
   :target: https://anaconda.org/bioconda/tefinder
   :alt:   (downloads)
.. |docker_tefinder| image:: https://quay.io/repository/biocontainers/tefinder/status
   :target: https://quay.io/repository/biocontainers/tefinder
.. _`tefinder/tags`: https://quay.io/repository/biocontainers/tefinder?tab=tags


.. raw:: html

    <script>
        var package = "tefinder";
        var versions = ["2.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tefinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tefinder/README.html