:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ancestry_hmm-s'
.. highlight: bash

ancestry_hmm-s
==============

.. conda:recipe:: ancestry_hmm-s
   :replaces_section_title:
   :noindex:

   Inferring adaptive introgression from genomic data using hidden Markov models

   :homepage: https://github.com/jesvedberg/Ancestry_HMM-S
   :license: GPL3
   :recipe: /`ancestry_hmm-s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm-s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm-s/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.08.02.232934`

   Ancestry\_HMM\-S is a program designed to infer adaptive introgression from
   genomic data. It can both identify loci that has increased in frequency due
   to selection and quantify the strength of selection that has acted upon
   each locus.



.. conda:package:: ancestry_hmm-s

   |downloads_ancestry_hmm-s| |docker_ancestry_hmm-s|

   :versions:
      
      

      ``0.9.0.2-4``,  ``0.9.0.2-3``,  ``0.9.0.2-2``,  ``0.9.0.2-1``,  ``0.9.0.2-0``

      

   
   :depends armadillo: ``>=12.2,<13.0a0``
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

      mamba install ancestry_hmm-s

   and update with::

      mamba update ancestry_hmm-s

  To create a new environment, run::

      mamba create --name myenvname ancestry_hmm-s

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ancestry_hmm-s:<tag>

   (see `ancestry_hmm-s/tags`_ for valid values for ``<tag>``)


.. |downloads_ancestry_hmm-s| image:: https://img.shields.io/conda/dn/bioconda/ancestry_hmm-s.svg?style=flat
   :target: https://anaconda.org/bioconda/ancestry_hmm-s
   :alt:   (downloads)
.. |docker_ancestry_hmm-s| image:: https://quay.io/repository/biocontainers/ancestry_hmm-s/status
   :target: https://quay.io/repository/biocontainers/ancestry_hmm-s
.. _`ancestry_hmm-s/tags`: https://quay.io/repository/biocontainers/ancestry_hmm-s?tab=tags


.. raw:: html

    <script>
        var package = "ancestry_hmm-s";
        var versions = ["0.9.0.2","0.9.0.2","0.9.0.2","0.9.0.2","0.9.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ancestry_hmm-s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ancestry_hmm-s/README.html