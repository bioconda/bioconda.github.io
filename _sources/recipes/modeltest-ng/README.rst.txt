:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modeltest-ng'
.. highlight: bash

modeltest-ng
============

.. conda:recipe:: modeltest-ng
   :replaces_section_title:
   :noindex:

   ModelTest\-NG is a tool for selecting the best\-fit model of evolution for DNA and protein alignments.

   :homepage: https://github.com/ddarriba/modeltest
   :documentation: https://github.com/ddarriba/modeltest/wiki
   
   :license: GPL / GPL-3.0
   :recipe: /`modeltest-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msz189`, doi: :doi:`10.1093/sysbio/syu084`

   


.. conda:package:: modeltest-ng

   |downloads_modeltest-ng| |docker_modeltest-ng|

   :versions:
      
      

      ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=4.1.5,<5.0a0``
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

      mamba install modeltest-ng

   and update with::

      mamba update modeltest-ng

  To create a new environment, run::

      mamba create --name myenvname modeltest-ng

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/modeltest-ng:<tag>

   (see `modeltest-ng/tags`_ for valid values for ``<tag>``)


.. |downloads_modeltest-ng| image:: https://img.shields.io/conda/dn/bioconda/modeltest-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/modeltest-ng
   :alt:   (downloads)
.. |docker_modeltest-ng| image:: https://quay.io/repository/biocontainers/modeltest-ng/status
   :target: https://quay.io/repository/biocontainers/modeltest-ng
.. _`modeltest-ng/tags`: https://quay.io/repository/biocontainers/modeltest-ng?tab=tags


.. raw:: html

    <script>
        var package = "modeltest-ng";
        var versions = ["0.1.7","0.1.7","0.1.7","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modeltest-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modeltest-ng/README.html