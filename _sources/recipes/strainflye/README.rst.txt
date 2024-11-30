:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainflye'
.. highlight: bash

strainflye
==========

.. conda:recipe:: strainflye
   :replaces_section_title:
   :noindex:

   Pipeline for analyzing rare mutations in metagenomes assembled using long and accurate reads

   :homepage: https://github.com/fedarko/strainFlye
   :license: BSD / BSD-3-Clause
   :recipe: /`strainflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainflye/meta.yaml>`_

   


.. conda:package:: strainflye

   |downloads_strainflye| |docker_strainflye|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bcftools: ``>=1.7,<1.10``
   :depends click: ``>=8.0``
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends minimap2: ``>=2.10``
   :depends networkx: 
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends prodigal: 
   :depends pysam: ``<0.16``
   :depends pysamstats: 
   :depends python: ``>=3.6,<3.8``
   :depends samtools: ``>=1.7,<1.10``
   :depends scikit-bio: 
   :depends scipy: ``>=1.0``
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

      mamba install strainflye

   and update with::

      mamba update strainflye

  To create a new environment, run::

      mamba create --name myenvname strainflye

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strainflye:<tag>

   (see `strainflye/tags`_ for valid values for ``<tag>``)


.. |downloads_strainflye| image:: https://img.shields.io/conda/dn/bioconda/strainflye.svg?style=flat
   :target: https://anaconda.org/bioconda/strainflye
   :alt:   (downloads)
.. |docker_strainflye| image:: https://quay.io/repository/biocontainers/strainflye/status
   :target: https://quay.io/repository/biocontainers/strainflye
.. _`strainflye/tags`: https://quay.io/repository/biocontainers/strainflye?tab=tags


.. raw:: html

    <script>
        var package = "strainflye";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainflye/README.html