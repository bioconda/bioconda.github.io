:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcc'
.. highlight: bash

dcc
===

.. conda:recipe:: dcc
   :replaces_section_title:
   :noindex:

   DCC is a python package intended to detect and quantify circRNAs with high specificity

   :homepage: https://github.com/dieterich-lab/DCC
   :license: GPL-3.0
   :recipe: /`dcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcc/meta.yaml>`_

   


.. conda:package:: dcc

   |downloads_dcc| |docker_dcc|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends htseq: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.6``
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

      mamba install dcc

   and update with::

      mamba update dcc

  To create a new environment, run::

      mamba create --name myenvname dcc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dcc:<tag>

   (see `dcc/tags`_ for valid values for ``<tag>``)


.. |downloads_dcc| image:: https://img.shields.io/conda/dn/bioconda/dcc.svg?style=flat
   :target: https://anaconda.org/bioconda/dcc
   :alt:   (downloads)
.. |docker_dcc| image:: https://quay.io/repository/biocontainers/dcc/status
   :target: https://quay.io/repository/biocontainers/dcc
.. _`dcc/tags`: https://quay.io/repository/biocontainers/dcc?tab=tags


.. raw:: html

    <script>
        var package = "dcc";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcc/README.html