:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prinseq'
.. highlight: bash

prinseq
=======

.. conda:recipe:: prinseq
   :replaces_section_title:
   :noindex:

   PRINSEQ can be used to filter\, reformat\, or trim your genomic and metagenomic sequence data

   :homepage: http://prinseq.sourceforge.net/
   :license: GPLv3
   :recipe: /`prinseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prinseq/meta.yaml>`_

   


.. conda:package:: prinseq

   |downloads_prinseq| |docker_prinseq|

   :versions:
      
      

      ``0.20.4-5``,  ``0.20.4-4``,  ``0.20.4-3``,  ``0.20.4-2``,  ``0.20.4-1``,  ``0.20.4-0``

      

   
   :depends perl: 
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

      mamba install prinseq

   and update with::

      mamba update prinseq

  To create a new environment, run::

      mamba create --name myenvname prinseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prinseq:<tag>

   (see `prinseq/tags`_ for valid values for ``<tag>``)


.. |downloads_prinseq| image:: https://img.shields.io/conda/dn/bioconda/prinseq.svg?style=flat
   :target: https://anaconda.org/bioconda/prinseq
   :alt:   (downloads)
.. |docker_prinseq| image:: https://quay.io/repository/biocontainers/prinseq/status
   :target: https://quay.io/repository/biocontainers/prinseq
.. _`prinseq/tags`: https://quay.io/repository/biocontainers/prinseq?tab=tags


.. raw:: html

    <script>
        var package = "prinseq";
        var versions = ["0.20.4","0.20.4","0.20.4","0.20.4","0.20.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prinseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prinseq/README.html