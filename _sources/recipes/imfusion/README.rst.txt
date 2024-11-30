:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imfusion'
.. highlight: bash

imfusion
========

.. conda:recipe:: imfusion/0.3.2
   :replaces_section_title:
   :noindex:

   IM\-Fusion \- Tool for identifying transposon insertions and their effects from RNA\-sequencing data

   :homepage: https://github.com/jrderuiter/imfusion
   :license: MIT
   :recipe: /`imfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion>`_/`0.3.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion/0.3.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imfusion/0.3.2/meta.yaml>`_

   


.. conda:package:: imfusion

   |downloads_imfusion| |docker_imfusion|

   :versions:
      
      

      ``0.3.2-0``,  ``0.3.0-0``

      

   
   :depends bowtie: 
   :depends future: 
   :depends htseq: ``>=0.7.2``
   :depends htslib: ``<1.4``
   :depends intervaltree: 
   :depends intervaltree: 
   :depends matplotlib: 
   :depends numexpr: 
   :depends pandas: 
   :depends pathlib2: 
   :depends pyfaidx: ``>=0.4.8.1``
   :depends pysam: ``>=0.9.1``
   :depends python: ``2.7*``
   :depends scipy: 
   :depends seaborn: 
   :depends seaborn: 
   :depends star: 
   :depends stringtie: 
   :depends subread: 
   :depends toolz: 
   :depends tophat: ``>=2.1.0``
   :depends typing: 
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

      mamba install imfusion

   and update with::

      mamba update imfusion

  To create a new environment, run::

      mamba create --name myenvname imfusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/imfusion:<tag>

   (see `imfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_imfusion| image:: https://img.shields.io/conda/dn/bioconda/imfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/imfusion
   :alt:   (downloads)
.. |docker_imfusion| image:: https://quay.io/repository/biocontainers/imfusion/status
   :target: https://quay.io/repository/biocontainers/imfusion
.. _`imfusion/tags`: https://quay.io/repository/biocontainers/imfusion?tab=tags


.. raw:: html

    <script>
        var package = "imfusion";
        var versions = ["0.3.2","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imfusion/README.html