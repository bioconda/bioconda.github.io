:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domclust'
.. highlight: bash

domclust
========

.. conda:recipe:: domclust
   :replaces_section_title:
   :noindex:

   Effective tool for orthologous grouping in multiple genomes.

   :homepage: https://mbgd.nibb.ac.jp/domclust
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`domclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domclust/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkj448`

   


.. conda:package:: domclust

   |downloads_domclust| |docker_domclust|

   :versions:
      
      

      ``1.2.8-0``,  ``1.2.8a-1``,  ``1.2.8a-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install domclust

   and update with::

      mamba update domclust

  To create a new environment, run::

      mamba create --name myenvname domclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/domclust:<tag>

   (see `domclust/tags`_ for valid values for ``<tag>``)


.. |downloads_domclust| image:: https://img.shields.io/conda/dn/bioconda/domclust.svg?style=flat
   :target: https://anaconda.org/bioconda/domclust
   :alt:   (downloads)
.. |docker_domclust| image:: https://quay.io/repository/biocontainers/domclust/status
   :target: https://quay.io/repository/biocontainers/domclust
.. _`domclust/tags`: https://quay.io/repository/biocontainers/domclust?tab=tags


.. raw:: html

    <script>
        var package = "domclust";
        var versions = ["1.2.8","1.2.8a","1.2.8a","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domclust/README.html