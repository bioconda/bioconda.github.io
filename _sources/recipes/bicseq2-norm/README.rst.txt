:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bicseq2-norm'
.. highlight: bash

bicseq2-norm
============

.. conda:recipe:: bicseq2-norm
   :replaces_section_title:
   :noindex:

   BICseq2\-norm is for normalizing potential biases in the sequencing data.

   :homepage: http://compbio.med.harvard.edu/BIC-seq/
   :license: Custom
   :recipe: /`bicseq2-norm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw491`

   


.. conda:package:: bicseq2-norm

   |downloads_bicseq2-norm| |docker_bicseq2-norm|

   :versions:
      
      

      ``0.2.4-5``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
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

      mamba install bicseq2-norm

   and update with::

      mamba update bicseq2-norm

  To create a new environment, run::

      mamba create --name myenvname bicseq2-norm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bicseq2-norm:<tag>

   (see `bicseq2-norm/tags`_ for valid values for ``<tag>``)


.. |downloads_bicseq2-norm| image:: https://img.shields.io/conda/dn/bioconda/bicseq2-norm.svg?style=flat
   :target: https://anaconda.org/bioconda/bicseq2-norm
   :alt:   (downloads)
.. |docker_bicseq2-norm| image:: https://quay.io/repository/biocontainers/bicseq2-norm/status
   :target: https://quay.io/repository/biocontainers/bicseq2-norm
.. _`bicseq2-norm/tags`: https://quay.io/repository/biocontainers/bicseq2-norm?tab=tags


.. raw:: html

    <script>
        var package = "bicseq2-norm";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bicseq2-norm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bicseq2-norm/README.html