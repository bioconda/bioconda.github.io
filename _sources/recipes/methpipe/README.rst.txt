:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methpipe'
.. highlight: bash

methpipe
========

.. conda:recipe:: methpipe
   :replaces_section_title:
   :noindex:

   A pipeline for analyzing DNA methylation data from bisulfite sequencing.

   :homepage: https://github.com/smithlabcode/methpipe
   :license: GPL-3 / GPL-3
   :recipe: /`methpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methpipe/meta.yaml>`_

   


.. conda:package:: methpipe

   |downloads_methpipe| |docker_methpipe|

   :versions:
      
      

      ``5.0.1-3``,  ``5.0.1-2``,  ``5.0.1-1``,  ``5.0.1-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install methpipe

   and update with::

      mamba update methpipe

  To create a new environment, run::

      mamba create --name myenvname methpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/methpipe:<tag>

   (see `methpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_methpipe| image:: https://img.shields.io/conda/dn/bioconda/methpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/methpipe
   :alt:   (downloads)
.. |docker_methpipe| image:: https://quay.io/repository/biocontainers/methpipe/status
   :target: https://quay.io/repository/biocontainers/methpipe
.. _`methpipe/tags`: https://quay.io/repository/biocontainers/methpipe?tab=tags


.. raw:: html

    <script>
        var package = "methpipe";
        var versions = ["5.0.1","5.0.1","5.0.1","5.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methpipe/README.html