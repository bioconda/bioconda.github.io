:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xyalign'
.. highlight: bash

xyalign
=======

.. conda:recipe:: xyalign
   :replaces_section_title:
   :noindex:

   Command line tools and python library to infer ploidy\, correct for sex chromosome complement\, and work with NGS data

   :homepage: https://github.com/WilsonSayresLab/XYalign
   :license: GPL / GPL-3.0
   :recipe: /`xyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign/meta.yaml>`_

   


.. conda:package:: xyalign

   |downloads_xyalign| |docker_xyalign|

   :versions:
      
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-2``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.0.0-0``

      

   
   :depends bbmap: 
   :depends bedtools: 
   :depends bwa: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends platypus-variant: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``<3``
   :depends sambamba: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install xyalign

   and update with::

      mamba update xyalign

  To create a new environment, run::

      mamba create --name myenvname xyalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xyalign:<tag>

   (see `xyalign/tags`_ for valid values for ``<tag>``)


.. |downloads_xyalign| image:: https://img.shields.io/conda/dn/bioconda/xyalign.svg?style=flat
   :target: https://anaconda.org/bioconda/xyalign
   :alt:   (downloads)
.. |docker_xyalign| image:: https://quay.io/repository/biocontainers/xyalign/status
   :target: https://quay.io/repository/biocontainers/xyalign
.. _`xyalign/tags`: https://quay.io/repository/biocontainers/xyalign?tab=tags


.. raw:: html

    <script>
        var package = "xyalign";
        var versions = ["1.1.5","1.1.5","1.1.4","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xyalign/README.html