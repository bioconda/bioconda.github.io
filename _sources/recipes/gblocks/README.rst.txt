:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gblocks'
.. highlight: bash

gblocks
=======

.. conda:recipe:: gblocks
   :replaces_section_title:
   :noindex:

   Selection of conserved blocks from multiple alignments for their use in phylogenetic analysis.

   :homepage: http://molevol.cmima.csic.es/castresana/Gblocks.html
   :license: The software and its accompanying documentation are provided as is, without guarantee of support or maintenance.
   :recipe: /`gblocks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks/meta.yaml>`_

   


.. conda:package:: gblocks

   |downloads_gblocks| |docker_gblocks|

   :versions:
      
      

      ``0.91b-2``,  ``0.91b-1``,  ``0.91b-0``

      

   
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

      mamba install gblocks

   and update with::

      mamba update gblocks

  To create a new environment, run::

      mamba create --name myenvname gblocks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gblocks:<tag>

   (see `gblocks/tags`_ for valid values for ``<tag>``)


.. |downloads_gblocks| image:: https://img.shields.io/conda/dn/bioconda/gblocks.svg?style=flat
   :target: https://anaconda.org/bioconda/gblocks
   :alt:   (downloads)
.. |docker_gblocks| image:: https://quay.io/repository/biocontainers/gblocks/status
   :target: https://quay.io/repository/biocontainers/gblocks
.. _`gblocks/tags`: https://quay.io/repository/biocontainers/gblocks?tab=tags


.. raw:: html

    <script>
        var package = "gblocks";
        var versions = ["0.91b","0.91b","0.91b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gblocks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gblocks/README.html