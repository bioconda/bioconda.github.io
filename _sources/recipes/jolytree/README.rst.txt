:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jolytree'
.. highlight: bash

jolytree
========

.. conda:recipe:: jolytree
   :replaces_section_title:
   :noindex:

   Fast alignment\-free phylogenetic reconstruction from genome sequences

   :homepage: https://research.pasteur.fr/fr/software/jolytree/
   :license: GPL / GPLv3
   :recipe: /`jolytree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree/meta.yaml>`_

   


.. conda:package:: jolytree

   |downloads_jolytree| |docker_jolytree|

   :versions:
      
      

      ``2.1-0``,  ``1.1b-1``,  ``1.1b-0``

      

   
   :depends fastme: ``>=2.1.5``
   :depends gawk: ``>=4.1.3``
   :depends mash: ``>=1.0.2``
   :depends req: ``>=1.2``
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

      mamba install jolytree

   and update with::

      mamba update jolytree

  To create a new environment, run::

      mamba create --name myenvname jolytree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jolytree:<tag>

   (see `jolytree/tags`_ for valid values for ``<tag>``)


.. |downloads_jolytree| image:: https://img.shields.io/conda/dn/bioconda/jolytree.svg?style=flat
   :target: https://anaconda.org/bioconda/jolytree
   :alt:   (downloads)
.. |docker_jolytree| image:: https://quay.io/repository/biocontainers/jolytree/status
   :target: https://quay.io/repository/biocontainers/jolytree
.. _`jolytree/tags`: https://quay.io/repository/biocontainers/jolytree?tab=tags


.. raw:: html

    <script>
        var package = "jolytree";
        var versions = ["2.1","1.1b","1.1b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jolytree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jolytree/README.html