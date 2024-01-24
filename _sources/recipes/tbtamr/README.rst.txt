:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbtamr'
.. highlight: bash

tbtamr
======

.. conda:recipe:: tbtamr
   :replaces_section_title:
   :noindex:

   A tool implementing TB\-Profiler for reporting of genomic DST for M. tuberculosis in a CPHL

   :homepage: https://github.com/MDU-PHL/tbtamr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tbtamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbtamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbtamr/meta.yaml>`_

   


.. conda:package:: tbtamr

   |downloads_tbtamr| |docker_tbtamr|

   :versions:
      
      

      ``0.0.4-1``,  ``0.0.4-0``

      

   
   :depends bcftools: 
   :depends bedtools: 
   :depends bwa: 
   :depends csvtk: 
   :depends delly: 
   :depends freebayes: 
   :depends pandas: 
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends requests: 
   :depends samclip: 
   :depends samtools: ``1.12.*``
   :depends snpeff: ``5.0.*``
   :depends tqdm: 
   :depends xlsxwriter: 
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

      mamba install tbtamr

   and update with::

      mamba update tbtamr

  To create a new environment, run::

      mamba create --name myenvname tbtamr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tbtamr:<tag>

   (see `tbtamr/tags`_ for valid values for ``<tag>``)


.. |downloads_tbtamr| image:: https://img.shields.io/conda/dn/bioconda/tbtamr.svg?style=flat
   :target: https://anaconda.org/bioconda/tbtamr
   :alt:   (downloads)
.. |docker_tbtamr| image:: https://quay.io/repository/biocontainers/tbtamr/status
   :target: https://quay.io/repository/biocontainers/tbtamr
.. _`tbtamr/tags`: https://quay.io/repository/biocontainers/tbtamr?tab=tags


.. raw:: html

    <script>
        var package = "tbtamr";
        var versions = ["0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbtamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbtamr/README.html