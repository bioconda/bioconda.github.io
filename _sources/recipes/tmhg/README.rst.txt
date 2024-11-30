:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmhg'
.. highlight: bash

tmhg
====

.. conda:recipe:: tmhg
   :replaces_section_title:
   :noindex:

   tMHG\-Finder is a tree\-guided tool to partition whole genomes into maximal homologous groups.

   :homepage: https://github.com/yongze-yin/tMHG-Finder
   :license: MIT / MIT
   :recipe: /`tmhg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmhg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmhg/meta.yaml>`_

   


.. conda:package:: tmhg

   |downloads_tmhg| |docker_tmhg|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bedtools: ``>=2.31.1``
   :depends biopython: 
   :depends blast: 
   :depends dendropy: 
   :depends mafft: 
   :depends mash: 
   :depends networkx: 
   :depends numpy: ``>=1.11``
   :depends pandas: ``>=1.1.3``
   :depends pathos: 
   :depends python: ``>=3.7``
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

      mamba install tmhg

   and update with::

      mamba update tmhg

  To create a new environment, run::

      mamba create --name myenvname tmhg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tmhg:<tag>

   (see `tmhg/tags`_ for valid values for ``<tag>``)


.. |downloads_tmhg| image:: https://img.shields.io/conda/dn/bioconda/tmhg.svg?style=flat
   :target: https://anaconda.org/bioconda/tmhg
   :alt:   (downloads)
.. |docker_tmhg| image:: https://quay.io/repository/biocontainers/tmhg/status
   :target: https://quay.io/repository/biocontainers/tmhg
.. _`tmhg/tags`: https://quay.io/repository/biocontainers/tmhg?tab=tags


.. raw:: html

    <script>
        var package = "tmhg";
        var versions = ["1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmhg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmhg/README.html