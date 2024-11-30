:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transtermhp'
.. highlight: bash

transtermhp
===========

.. conda:recipe:: transtermhp
   :replaces_section_title:
   :noindex:

   TransTermHP finds rho\-independent transcription terminators in bacterial genomes

   :homepage: http://transterm.cbcb.umd.edu/index.php
   :license: GPL
   :recipe: /`transtermhp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transtermhp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transtermhp/meta.yaml>`_

   


.. conda:package:: transtermhp

   |downloads_transtermhp| |docker_transtermhp|

   :versions:
      
      

      ``2.09-1``,  ``2.09-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
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

      mamba install transtermhp

   and update with::

      mamba update transtermhp

  To create a new environment, run::

      mamba create --name myenvname transtermhp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transtermhp:<tag>

   (see `transtermhp/tags`_ for valid values for ``<tag>``)


.. |downloads_transtermhp| image:: https://img.shields.io/conda/dn/bioconda/transtermhp.svg?style=flat
   :target: https://anaconda.org/bioconda/transtermhp
   :alt:   (downloads)
.. |docker_transtermhp| image:: https://quay.io/repository/biocontainers/transtermhp/status
   :target: https://quay.io/repository/biocontainers/transtermhp
.. _`transtermhp/tags`: https://quay.io/repository/biocontainers/transtermhp?tab=tags


.. raw:: html

    <script>
        var package = "transtermhp";
        var versions = ["2.09","2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transtermhp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transtermhp/README.html