:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'famseq'
.. highlight: bash

famseq
======

.. conda:recipe:: famseq
   :replaces_section_title:
   :noindex:

   Peng G\, Fan Y\, Palculict TB\, Shen P\, Ruteshouser EC\, Chi A\, Davis RW\, Huff V\, Scharfe C\, Wang W. Rare variant detection using family\-based sequencing analysis. Proceedings of the National Academy of Sciences. 2013 Mar 5\;110\(10\)\:3985\-90

   :homepage: http://bioinformatics.mdanderson.org/main/FamSeq
   :license: GPL-3
   :recipe: /`famseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/famseq/meta.yaml>`_

   


.. conda:package:: famseq

   |downloads_famseq| |docker_famseq|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
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

      mamba install famseq

   and update with::

      mamba update famseq

  To create a new environment, run::

      mamba create --name myenvname famseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/famseq:<tag>

   (see `famseq/tags`_ for valid values for ``<tag>``)


.. |downloads_famseq| image:: https://img.shields.io/conda/dn/bioconda/famseq.svg?style=flat
   :target: https://anaconda.org/bioconda/famseq
   :alt:   (downloads)
.. |docker_famseq| image:: https://quay.io/repository/biocontainers/famseq/status
   :target: https://quay.io/repository/biocontainers/famseq
.. _`famseq/tags`: https://quay.io/repository/biocontainers/famseq?tab=tags


.. raw:: html

    <script>
        var package = "famseq";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/famseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/famseq/README.html