:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purple-bio'
.. highlight: bash

purple-bio
==========

.. conda:recipe:: purple-bio
   :replaces_section_title:
   :noindex:

   Picking Unique Relevant Peptides for viraL Experiments

   :homepage: https://gitlab.com/HartkopfF/Purple
   :license: LGPL / GNU Lesser General Public v3 or later (LGPLv3+)
   :recipe: /`purple-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purple-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purple-bio/meta.yaml>`_

   


.. conda:package:: purple-bio

   |downloads_purple-bio| |docker_purple-bio|

   :versions:
      
      

      ``0.4.2.5-0``,  ``0.4.2.1-0``

      

   
   :depends biopython: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends tqdm: 
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

      mamba install purple-bio

   and update with::

      mamba update purple-bio

  To create a new environment, run::

      mamba create --name myenvname purple-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/purple-bio:<tag>

   (see `purple-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_purple-bio| image:: https://img.shields.io/conda/dn/bioconda/purple-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/purple-bio
   :alt:   (downloads)
.. |docker_purple-bio| image:: https://quay.io/repository/biocontainers/purple-bio/status
   :target: https://quay.io/repository/biocontainers/purple-bio
.. _`purple-bio/tags`: https://quay.io/repository/biocontainers/purple-bio?tab=tags


.. raw:: html

    <script>
        var package = "purple-bio";
        var versions = ["0.4.2.5","0.4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purple-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purple-bio/README.html