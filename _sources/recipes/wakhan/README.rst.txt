:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wakhan'
.. highlight: bash

wakhan
======

.. conda:recipe:: wakhan
   :replaces_section_title:
   :noindex:

   A tool to analyze haplotype\-specific chromosome\-scale somatic copy number aberrations and aneuploidy using long reads

   :homepage: https://github.com/KolmogorovLab/Wakhan
   :license: MIT / MIT
   :recipe: /`wakhan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wakhan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wakhan/meta.yaml>`_

   


.. conda:package:: wakhan

   |downloads_wakhan| |docker_wakhan|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bcftools: ``>=1.14``
   :depends numpy: 
   :depends pandas: 
   :depends parse-vcf: 
   :depends plotly: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends python-kaleido: 
   :depends ruptures: 
   :depends samtools: ``>=1.14``
   :depends scikit-learn: ``1.2.0``
   :depends scipy: ``1.9.2``
   :depends vcf_parser: 
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

      mamba install wakhan

   and update with::

      mamba update wakhan

  To create a new environment, run::

      mamba create --name myenvname wakhan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wakhan:<tag>

   (see `wakhan/tags`_ for valid values for ``<tag>``)


.. |downloads_wakhan| image:: https://img.shields.io/conda/dn/bioconda/wakhan.svg?style=flat
   :target: https://anaconda.org/bioconda/wakhan
   :alt:   (downloads)
.. |docker_wakhan| image:: https://quay.io/repository/biocontainers/wakhan/status
   :target: https://quay.io/repository/biocontainers/wakhan
.. _`wakhan/tags`: https://quay.io/repository/biocontainers/wakhan?tab=tags


.. raw:: html

    <script>
        var package = "wakhan";
        var versions = ["0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wakhan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wakhan/README.html