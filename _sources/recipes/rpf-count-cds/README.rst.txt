:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpf-count-cds'
.. highlight: bash

rpf-count-cds
=============

.. conda:recipe:: rpf-count-cds
   :replaces_section_title:
   :noindex:

   A python script for counting RPF reads map to CDS region.

   :homepage: https://github.com/xzt41/RPF-count-CDS
   :license: MIT
   :recipe: /`rpf-count-cds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpf-count-cds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpf-count-cds/meta.yaml>`_

   


.. conda:package:: rpf-count-cds

   |downloads_rpf-count-cds| |docker_rpf-count-cds|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends htseq: 
   :depends python: 
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

      mamba install rpf-count-cds

   and update with::

      mamba update rpf-count-cds

  To create a new environment, run::

      mamba create --name myenvname rpf-count-cds

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rpf-count-cds:<tag>

   (see `rpf-count-cds/tags`_ for valid values for ``<tag>``)


.. |downloads_rpf-count-cds| image:: https://img.shields.io/conda/dn/bioconda/rpf-count-cds.svg?style=flat
   :target: https://anaconda.org/bioconda/rpf-count-cds
   :alt:   (downloads)
.. |docker_rpf-count-cds| image:: https://quay.io/repository/biocontainers/rpf-count-cds/status
   :target: https://quay.io/repository/biocontainers/rpf-count-cds
.. _`rpf-count-cds/tags`: https://quay.io/repository/biocontainers/rpf-count-cds?tab=tags


.. raw:: html

    <script>
        var package = "rpf-count-cds";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpf-count-cds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpf-count-cds/README.html