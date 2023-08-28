:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'massiveqc'
.. highlight: bash

massiveqc
=========

.. conda:recipe:: massiveqc
   :replaces_section_title:
   :noindex:

   Tools for QC massive RNA\-seq samples

   :homepage: https://github.com/shimw6828/MassiveQC
   :license: MIT / MIT
   :recipe: /`massiveqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc/meta.yaml>`_

   


.. conda:package:: massiveqc

   |downloads_massiveqc| |docker_massiveqc|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends atropos: 
   :depends bamtools: 
   :depends fastparquet: 
   :depends fastq-screen: 
   :depends hisat2: 
   :depends more-itertools: 
   :depends numpy: 
   :depends pandas: ``>=1.3.2``
   :depends python: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends shap: 
   :depends subread: 
   :depends tqdm: 
   :depends xopen: 
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

      mamba install massiveqc

   and update with::

      mamba update massiveqc

  To create a new environment, run::

      mamba create --name myenvname massiveqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/massiveqc:<tag>

   (see `massiveqc/tags`_ for valid values for ``<tag>``)


.. |downloads_massiveqc| image:: https://img.shields.io/conda/dn/bioconda/massiveqc.svg?style=flat
   :target: https://anaconda.org/bioconda/massiveqc
   :alt:   (downloads)
.. |docker_massiveqc| image:: https://quay.io/repository/biocontainers/massiveqc/status
   :target: https://quay.io/repository/biocontainers/massiveqc
.. _`massiveqc/tags`: https://quay.io/repository/biocontainers/massiveqc?tab=tags


.. raw:: html

    <script>
        var package = "massiveqc";
        var versions = ["0.1.1","0.1.0","0.0.7","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/massiveqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/massiveqc/README.html