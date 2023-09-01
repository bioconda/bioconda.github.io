:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qhery'
.. highlight: bash

qhery
=====

.. conda:recipe:: qhery
   :replaces_section_title:
   :noindex:

   Identification of mutations in SARS\-CoV\-2 associated with resistance to treatment.

   :homepage: http://github.com/mjsull/qhery/
   :license: GPL-3.0-only
   :recipe: /`qhery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qhery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qhery/meta.yaml>`_

   


.. conda:package:: qhery

   |downloads_qhery| |docker_qhery|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends bcftools: ``>=1.15.1``
   :depends blast: ``>=2.2``
   :depends lofreq: ``>=2.1.5``
   :depends nextclade: ``>=2.5.0``
   :depends pysam: ``>=0.19.1``
   :depends python: ``>=3.6``
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

      mamba install qhery

   and update with::

      mamba update qhery

  To create a new environment, run::

      mamba create --name myenvname qhery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qhery:<tag>

   (see `qhery/tags`_ for valid values for ``<tag>``)


.. |downloads_qhery| image:: https://img.shields.io/conda/dn/bioconda/qhery.svg?style=flat
   :target: https://anaconda.org/bioconda/qhery
   :alt:   (downloads)
.. |docker_qhery| image:: https://quay.io/repository/biocontainers/qhery/status
   :target: https://quay.io/repository/biocontainers/qhery
.. _`qhery/tags`: https://quay.io/repository/biocontainers/qhery?tab=tags


.. raw:: html

    <script>
        var package = "qhery";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qhery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qhery/README.html