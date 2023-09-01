:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotricer'
.. highlight: bash

ribotricer
==========

.. conda:recipe:: ribotricer
   :replaces_section_title:
   :noindex:

   Python package to detect translating ORF from Ribo\-seq data

   :homepage: https://github.com/smithlabcode/ribotricer
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ribotricer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotricer/meta.yaml>`_

   Ribotricer is a method for detecting actively\-translating 
   ORFs by directly leveraging the three\-nucleotide periodicity of
   Ribo\-seq data. It accurately identifies both short and long
   active ORFs.



.. conda:package:: ribotricer

   |downloads_ribotricer| |docker_ribotricer|

   :versions:
      
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends click: ``>=6.0``
   :depends click-help-colors: ``>=0.3``
   :depends matplotlib-base: ``>=2.1.0``
   :depends numpy: ``>=1.11.0``
   :depends pandas: ``>=0.20.3``
   :depends pyfaidx: ``>=0.5.0``
   :depends pysam: ``>=0.11.2.2``
   :depends python: ``>3``
   :depends quicksect: ``>=0.2.0``
   :depends scipy: ``>=0.19.1``
   :depends tqdm: ``>=4.23.4``
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

      mamba install ribotricer

   and update with::

      mamba update ribotricer

  To create a new environment, run::

      mamba create --name myenvname ribotricer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribotricer:<tag>

   (see `ribotricer/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotricer| image:: https://img.shields.io/conda/dn/bioconda/ribotricer.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotricer
   :alt:   (downloads)
.. |docker_ribotricer| image:: https://quay.io/repository/biocontainers/ribotricer/status
   :target: https://quay.io/repository/biocontainers/ribotricer
.. _`ribotricer/tags`: https://quay.io/repository/biocontainers/ribotricer?tab=tags


.. raw:: html

    <script>
        var package = "ribotricer";
        var versions = ["1.3.3","1.3.2","1.3.1","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotricer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotricer/README.html