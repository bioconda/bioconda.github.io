:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'melt'
.. highlight: bash

melt
====

.. conda:recipe:: melt
   :replaces_section_title:
   :noindex:

   A nucleotide melt temp calculator

   :homepage: https://github.com/eclarke/melt
   :license: GNU General Public License (GPL)
   :recipe: /`melt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/melt/meta.yaml>`_

   


.. conda:package:: melt

   |downloads_melt| |docker_melt|

   :versions:
      
      

      ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install melt

   and update with::

      mamba update melt

  To create a new environment, run::

      mamba create --name myenvname melt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/melt:<tag>

   (see `melt/tags`_ for valid values for ``<tag>``)


.. |downloads_melt| image:: https://img.shields.io/conda/dn/bioconda/melt.svg?style=flat
   :target: https://anaconda.org/bioconda/melt
   :alt:   (downloads)
.. |docker_melt| image:: https://quay.io/repository/biocontainers/melt/status
   :target: https://quay.io/repository/biocontainers/melt
.. _`melt/tags`: https://quay.io/repository/biocontainers/melt?tab=tags


.. raw:: html

    <script>
        var package = "melt";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/melt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/melt/README.html