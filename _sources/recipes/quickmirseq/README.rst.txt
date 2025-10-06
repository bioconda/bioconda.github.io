:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quickmirseq'
.. highlight: bash

quickmirseq
===========

.. conda:recipe:: quickmirseq
   :replaces_section_title:
   :noindex:

   A pipeline for fast and accurate quantification of both known miRNAs and isomiRs by joint processing multiple samples

   :homepage: https://sourceforge.net/projects/quickmirseq/
   :license: GPL-3.0-or-later
   :recipe: /`quickmirseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickmirseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quickmirseq/meta.yaml>`_

   


.. conda:package:: quickmirseq

   |downloads_quickmirseq| |docker_quickmirseq|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bowtie: 
   :depends cutadapt: 
   :depends perl: 
   :depends perl-compress-raw-zlib: 
   :depends perl-config-simple: 
   :depends perl-mime-base64: 
   :depends perl-parallel-forkmanager: 
   :depends r-base: 
   :depends r-ggplot2: 
   :depends r-latticeextra: 
   :depends r-reshape2: 
   :depends r-scales: 
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

      mamba install quickmirseq

   and update with::

      mamba update quickmirseq

  To create a new environment, run::

      mamba create --name myenvname quickmirseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quickmirseq:<tag>

   (see `quickmirseq/tags`_ for valid values for ``<tag>``)


.. |downloads_quickmirseq| image:: https://img.shields.io/conda/dn/bioconda/quickmirseq.svg?style=flat
   :target: https://anaconda.org/bioconda/quickmirseq
   :alt:   (downloads)
.. |docker_quickmirseq| image:: https://quay.io/repository/biocontainers/quickmirseq/status
   :target: https://quay.io/repository/biocontainers/quickmirseq
.. _`quickmirseq/tags`: https://quay.io/repository/biocontainers/quickmirseq?tab=tags


.. raw:: html

    <script>
        var package = "quickmirseq";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quickmirseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quickmirseq/README.html