:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gassst'
.. highlight: bash

gassst
======

.. conda:recipe:: gassst
   :replaces_section_title:
   :noindex:

   GASSST \: Global Alignment Short Sequence Search Tool

   :homepage: https://www.irisa.fr/symbiose/projects/gassst/
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`gassst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gassst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gassst/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btq485`

   


.. conda:package:: gassst

   |downloads_gassst| |docker_gassst|

   :versions:
      
      

      ``1.28-2``,  ``1.28-1``,  ``1.28-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install gassst

   and update with::

      mamba update gassst

  To create a new environment, run::

      mamba create --name myenvname gassst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gassst:<tag>

   (see `gassst/tags`_ for valid values for ``<tag>``)


.. |downloads_gassst| image:: https://img.shields.io/conda/dn/bioconda/gassst.svg?style=flat
   :target: https://anaconda.org/bioconda/gassst
   :alt:   (downloads)
.. |docker_gassst| image:: https://quay.io/repository/biocontainers/gassst/status
   :target: https://quay.io/repository/biocontainers/gassst
.. _`gassst/tags`: https://quay.io/repository/biocontainers/gassst?tab=tags


.. raw:: html

    <script>
        var package = "gassst";
        var versions = ["1.28","1.28","1.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gassst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gassst/README.html