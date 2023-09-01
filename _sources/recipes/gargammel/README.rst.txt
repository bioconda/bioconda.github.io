:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gargammel'
.. highlight: bash

gargammel
=========

.. conda:recipe:: gargammel
   :replaces_section_title:
   :noindex:

   Tool for simulating ancient DNA datasets

   :homepage: https://github.com/grenaud/gargammel
   :license: GPL-3.0-only
   :recipe: /`gargammel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel/meta.yaml>`_

   gargammel is a set of programs aimed at simulating ancient DNA
   fragments. For ancient hominin samples our program can also 
   simulate various levels of present\-day human contamination and 
   microbial contamination.



.. conda:package:: gargammel

   |downloads_gargammel| |docker_gargammel|

   :versions:
      
      

      ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends art: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``1.0.2n.*``
   :depends perl: 
   :depends samtools: 
   :depends zlib: 
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

      mamba install gargammel

   and update with::

      mamba update gargammel

  To create a new environment, run::

      mamba create --name myenvname gargammel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gargammel:<tag>

   (see `gargammel/tags`_ for valid values for ``<tag>``)


.. |downloads_gargammel| image:: https://img.shields.io/conda/dn/bioconda/gargammel.svg?style=flat
   :target: https://anaconda.org/bioconda/gargammel
   :alt:   (downloads)
.. |docker_gargammel| image:: https://quay.io/repository/biocontainers/gargammel/status
   :target: https://quay.io/repository/biocontainers/gargammel
.. _`gargammel/tags`: https://quay.io/repository/biocontainers/gargammel?tab=tags


.. raw:: html

    <script>
        var package = "gargammel";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gargammel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gargammel/README.html