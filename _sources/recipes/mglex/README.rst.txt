:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mglex'
.. highlight: bash

mglex
=====

.. conda:recipe:: mglex
   :replaces_section_title:
   :noindex:

   MGLEX \- MetaGenome Likelihood EXtractor

   :homepage: https://github.com/fungs/mglex
   :license: GPL / GPL-3.0
   :recipe: /`mglex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mglex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mglex/meta.yaml>`_

   


.. conda:package:: mglex

   |downloads_mglex| |docker_mglex|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends docopt: ``>=0.6.2``
   :depends numpy: ``>=1.8.2``
   :depends python: ``>=3``
   :depends scipy: ``>=0.13.3``
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

      mamba install mglex

   and update with::

      mamba update mglex

  To create a new environment, run::

      mamba create --name myenvname mglex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mglex:<tag>

   (see `mglex/tags`_ for valid values for ``<tag>``)


.. |downloads_mglex| image:: https://img.shields.io/conda/dn/bioconda/mglex.svg?style=flat
   :target: https://anaconda.org/bioconda/mglex
   :alt:   (downloads)
.. |docker_mglex| image:: https://quay.io/repository/biocontainers/mglex/status
   :target: https://quay.io/repository/biocontainers/mglex
.. _`mglex/tags`: https://quay.io/repository/biocontainers/mglex?tab=tags


.. raw:: html

    <script>
        var package = "mglex";
        var versions = ["0.2.1","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mglex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mglex/README.html