:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-qc-raw-ont'
.. highlight: bash

atol-qc-raw-ont
===============

.. conda:recipe:: atol-qc-raw-ont
   :replaces_section_title:
   :noindex:

   Run read QC on ONT reads.

   :homepage: https://github.com/TomHarrop/atol-qc-raw-ont
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-qc-raw-ont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-ont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-qc-raw-ont/meta.yaml>`_

   


.. conda:package:: atol-qc-raw-ont

   |downloads_atol-qc-raw-ont| |docker_atol-qc-raw-ont|

   :versions:
      
      

      ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends bbmap: ``>=39.37``
   :depends filtlong: ``>=0.3.1``
   :depends gawk: 
   :depends pandas: ``>=2.3.3,<3``
   :depends porechop: ``>=0.2.4``
   :depends python: ``>=3.12,<3.13``
   :depends snakemake: ``>=9.11.6,<10``
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

      mamba install atol-qc-raw-ont

   and update with::

      mamba update atol-qc-raw-ont

  To create a new environment, run::

      mamba create --name myenvname atol-qc-raw-ont

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atol-qc-raw-ont:<tag>

   (see `atol-qc-raw-ont/tags`_ for valid values for ``<tag>``)


.. |downloads_atol-qc-raw-ont| image:: https://img.shields.io/conda/dn/bioconda/atol-qc-raw-ont.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-qc-raw-ont
   :alt:   (downloads)
.. |docker_atol-qc-raw-ont| image:: https://quay.io/repository/biocontainers/atol-qc-raw-ont/status
   :target: https://quay.io/repository/biocontainers/atol-qc-raw-ont
.. _`atol-qc-raw-ont/tags`: https://quay.io/repository/biocontainers/atol-qc-raw-ont?tab=tags


.. raw:: html

    <script>
        var package = "atol-qc-raw-ont";
        var versions = ["0.1.11","0.1.10","0.1.9","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-qc-raw-ont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-qc-raw-ont/README.html