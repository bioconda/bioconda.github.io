:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cistrome_beta'
.. highlight: bash

cistrome_beta
=============

.. conda:recipe:: cistrome_beta
   :replaces_section_title:
   :noindex:

   Binding and Expression Target Analysis of ChIP\-seq TF with differential gene expression

   :homepage: https://github.com/hanfeisun/BETA
   :license: This code is free software; you can redistribute it and/or modify it.
   :recipe: /`cistrome_beta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome_beta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome_beta/meta.yaml>`_

   


.. conda:package:: cistrome_beta

   |downloads_cistrome_beta| |docker_cistrome_beta|

   :versions:
      
      

      ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends r-base: 
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

      mamba install cistrome_beta

   and update with::

      mamba update cistrome_beta

  To create a new environment, run::

      mamba create --name myenvname cistrome_beta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cistrome_beta:<tag>

   (see `cistrome_beta/tags`_ for valid values for ``<tag>``)


.. |downloads_cistrome_beta| image:: https://img.shields.io/conda/dn/bioconda/cistrome_beta.svg?style=flat
   :target: https://anaconda.org/bioconda/cistrome_beta
   :alt:   (downloads)
.. |docker_cistrome_beta| image:: https://quay.io/repository/biocontainers/cistrome_beta/status
   :target: https://quay.io/repository/biocontainers/cistrome_beta
.. _`cistrome_beta/tags`: https://quay.io/repository/biocontainers/cistrome_beta?tab=tags


.. raw:: html

    <script>
        var package = "cistrome_beta";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cistrome_beta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cistrome_beta/README.html