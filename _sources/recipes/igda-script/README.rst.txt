:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igda-script'
.. highlight: bash

igda-script
===========

.. conda:recipe:: igda-script
   :replaces_section_title:
   :noindex:

   The wrapper script of iGDA to detect and phase minor SNVs from long\-read sequencing data

   :homepage: https://github.com/zhixingfeng/shell
   :license: GPL2
   :recipe: /`igda-script <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igda-script>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igda-script/meta.yaml>`_

   


.. conda:package:: igda-script

   |downloads_igda-script| |docker_igda-script|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends r-base: 
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

      mamba install igda-script

   and update with::

      mamba update igda-script

  To create a new environment, run::

      mamba create --name myenvname igda-script

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/igda-script:<tag>

   (see `igda-script/tags`_ for valid values for ``<tag>``)


.. |downloads_igda-script| image:: https://img.shields.io/conda/dn/bioconda/igda-script.svg?style=flat
   :target: https://anaconda.org/bioconda/igda-script
   :alt:   (downloads)
.. |docker_igda-script| image:: https://quay.io/repository/biocontainers/igda-script/status
   :target: https://quay.io/repository/biocontainers/igda-script
.. _`igda-script/tags`: https://quay.io/repository/biocontainers/igda-script?tab=tags


.. raw:: html

    <script>
        var package = "igda-script";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igda-script/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igda-script/README.html