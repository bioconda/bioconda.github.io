:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'etoki'
.. highlight: bash

etoki
=====

.. conda:recipe:: etoki
   :replaces_section_title:
   :noindex:

   EToKi \(Enterobase Tool Kit\) includes methods related to Enterobase data analysis pipelines

   :homepage: https://github.com/zheminzhou/EToKi
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`etoki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki/meta.yaml>`_

   


.. conda:package:: etoki

   |downloads_etoki| |docker_etoki|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends bbmap: 
   :depends blast: 
   :depends bowtie2: 
   :depends bwa: 
   :depends click: 
   :depends curl: 
   :depends diamond: 
   :depends ete3: 
   :depends fasttree: 
   :depends flye: 
   :depends gatk: 
   :depends kraken2: 
   :depends last: 
   :depends megahit: 
   :depends mmseqs2: 
   :depends nextpolish: 
   :depends numba: 
   :depends numpy: ``1.21.6.*``
   :depends pandas: 
   :depends perl-lyve-set: 
   :depends piler-cr: 
   :depends pilon: 
   :depends psutil: 
   :depends python: ``>=3.6``
   :depends rapidnj: 
   :depends raxml: 
   :depends raxml-ng: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends simbac: 
   :depends spades: ``>=3.15``
   :depends trf: 
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

      mamba install etoki

   and update with::

      mamba update etoki

  To create a new environment, run::

      mamba create --name myenvname etoki

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/etoki:<tag>

   (see `etoki/tags`_ for valid values for ``<tag>``)


.. |downloads_etoki| image:: https://img.shields.io/conda/dn/bioconda/etoki.svg?style=flat
   :target: https://anaconda.org/bioconda/etoki
   :alt:   (downloads)
.. |docker_etoki| image:: https://quay.io/repository/biocontainers/etoki/status
   :target: https://quay.io/repository/biocontainers/etoki
.. _`etoki/tags`: https://quay.io/repository/biocontainers/etoki?tab=tags


.. raw:: html

    <script>
        var package = "etoki";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/etoki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/etoki/README.html