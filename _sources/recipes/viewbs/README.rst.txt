:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viewbs'
.. highlight: bash

viewbs
======

.. conda:recipe:: viewbs
   :replaces_section_title:
   :noindex:

   ViewBS is a powerful toolkit for visualization of high\-throughput bisulfite sequencing data

   :homepage: https://github.com/xie186/ViewBS
   :license: GPL / GPLv3
   :recipe: /`viewbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viewbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viewbs/meta.yaml>`_

   


.. conda:package:: viewbs

   |downloads_viewbs| |docker_viewbs|

   :versions:
      
      

      ``0.1.11-3``,  ``0.1.11-2``,  ``0.1.11-1``,  ``0.1.11-0``,  ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bio-db-hts: ``>=3.0.1``
   :depends perl-bioperl: ``>=1.7.2``
   :depends r-base: ``>=3.6.3``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-pheatmap: 
   :depends r-reshape2: 
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

      mamba install viewbs

   and update with::

      mamba update viewbs

  To create a new environment, run::

      mamba create --name myenvname viewbs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viewbs:<tag>

   (see `viewbs/tags`_ for valid values for ``<tag>``)


.. |downloads_viewbs| image:: https://img.shields.io/conda/dn/bioconda/viewbs.svg?style=flat
   :target: https://anaconda.org/bioconda/viewbs
   :alt:   (downloads)
.. |docker_viewbs| image:: https://quay.io/repository/biocontainers/viewbs/status
   :target: https://quay.io/repository/biocontainers/viewbs
.. _`viewbs/tags`: https://quay.io/repository/biocontainers/viewbs?tab=tags


.. raw:: html

    <script>
        var package = "viewbs";
        var versions = ["0.1.11","0.1.11","0.1.11","0.1.11","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viewbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viewbs/README.html