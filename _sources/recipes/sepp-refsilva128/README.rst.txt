:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sepp-refsilva128'
.. highlight: bash

sepp-refsilva128
================

.. conda:recipe:: sepp-refsilva128
   :replaces_section_title:
   :noindex:

   SATe\-enabled phylogenetic placement

   :homepage: https://github.com/smirarab/sepp-refs
   :license: GPL3 / GPLv3
   :recipe: /`sepp-refsilva128 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refsilva128>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sepp-refsilva128/meta.yaml>`_
   :links: biotools: :biotools:`sepp-refsilva128`

   


.. conda:package:: sepp-refsilva128

   |downloads_sepp-refsilva128| |docker_sepp-refsilva128|

   :versions:
      
      

      ``4.5.1-1``,  ``4.5.1-0``,  ``4.3.6-0``

      

   
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

      mamba install sepp-refsilva128

   and update with::

      mamba update sepp-refsilva128

  To create a new environment, run::

      mamba create --name myenvname sepp-refsilva128

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sepp-refsilva128:<tag>

   (see `sepp-refsilva128/tags`_ for valid values for ``<tag>``)


.. |downloads_sepp-refsilva128| image:: https://img.shields.io/conda/dn/bioconda/sepp-refsilva128.svg?style=flat
   :target: https://anaconda.org/bioconda/sepp-refsilva128
   :alt:   (downloads)
.. |docker_sepp-refsilva128| image:: https://quay.io/repository/biocontainers/sepp-refsilva128/status
   :target: https://quay.io/repository/biocontainers/sepp-refsilva128
.. _`sepp-refsilva128/tags`: https://quay.io/repository/biocontainers/sepp-refsilva128?tab=tags


.. raw:: html

    <script>
        var package = "sepp-refsilva128";
        var versions = ["4.5.1","4.5.1","4.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sepp-refsilva128/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sepp-refsilva128/README.html