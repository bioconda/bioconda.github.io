:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ancestry_hmm'
.. highlight: bash

ancestry_hmm
============

.. conda:recipe:: ancestry_hmm
   :replaces_section_title:
   :noindex:

   Software for local ancestry inference

   :homepage: https://github.com/russcd/Ancestry_HMM
   :license: GPL3
   :recipe: /`ancestry_hmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ancestry_hmm/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pgen.1006529`

   A hidden Markov model approach for simultaneously estimating local ancestry and admixture
   time using next generation sequence data in samples of arbitrary ploidy.



.. conda:package:: ancestry_hmm

   |downloads_ancestry_hmm| |docker_ancestry_hmm|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends armadillo: ``>=14.2,<15.0a0``
   :depends libcxx: ``>=18``
   :depends selam: 
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

      mamba install ancestry_hmm

   and update with::

      mamba update ancestry_hmm

  To create a new environment, run::

      mamba create --name myenvname ancestry_hmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ancestry_hmm:<tag>

   (see `ancestry_hmm/tags`_ for valid values for ``<tag>``)


.. |downloads_ancestry_hmm| image:: https://img.shields.io/conda/dn/bioconda/ancestry_hmm.svg?style=flat
   :target: https://anaconda.org/bioconda/ancestry_hmm
   :alt:   (downloads)
.. |docker_ancestry_hmm| image:: https://quay.io/repository/biocontainers/ancestry_hmm/status
   :target: https://quay.io/repository/biocontainers/ancestry_hmm
.. _`ancestry_hmm/tags`: https://quay.io/repository/biocontainers/ancestry_hmm?tab=tags


.. raw:: html

    <script>
        var package = "ancestry_hmm";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ancestry_hmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ancestry_hmm/README.html