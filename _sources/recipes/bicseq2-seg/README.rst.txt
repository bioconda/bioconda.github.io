:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bicseq2-seg'
.. highlight: bash

bicseq2-seg
===========

.. conda:recipe:: bicseq2-seg
   :replaces_section_title:
   :noindex:

   BICseq2\-seg is for detecting CNVs based on the normalized data given by BICseq2\-norm.

   :homepage: http://compbio.med.harvard.edu/BIC-seq/
   :license: Custom
   :recipe: /`bicseq2-seg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-seg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-seg/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw491`

   


.. conda:package:: bicseq2-seg

   |downloads_bicseq2-seg| |docker_bicseq2-seg|

   :versions:
      
      

      ``0.7.2-5``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: 
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

      mamba install bicseq2-seg

   and update with::

      mamba update bicseq2-seg

  To create a new environment, run::

      mamba create --name myenvname bicseq2-seg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bicseq2-seg:<tag>

   (see `bicseq2-seg/tags`_ for valid values for ``<tag>``)


.. |downloads_bicseq2-seg| image:: https://img.shields.io/conda/dn/bioconda/bicseq2-seg.svg?style=flat
   :target: https://anaconda.org/bioconda/bicseq2-seg
   :alt:   (downloads)
.. |docker_bicseq2-seg| image:: https://quay.io/repository/biocontainers/bicseq2-seg/status
   :target: https://quay.io/repository/biocontainers/bicseq2-seg
.. _`bicseq2-seg/tags`: https://quay.io/repository/biocontainers/bicseq2-seg?tab=tags


.. raw:: html

    <script>
        var package = "bicseq2-seg";
        var versions = ["0.7.2","0.7.2","0.7.2","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bicseq2-seg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bicseq2-seg/README.html