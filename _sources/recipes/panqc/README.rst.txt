:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panqc'
.. highlight: bash

panqc
=====

.. conda:recipe:: panqc
   :replaces_section_title:
   :noindex:

   A toolkit for quality control \& adjustment of nucleotide redundancy in bacterial pan\-genome analyses


   :homepage: https://github.com/maxgmarin/panqc
   :license: MIT / MIT
   :recipe: /`panqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panqc/meta.yaml>`_

   panqc is a pan\-genome quality control toolkit that evaluates and corrects
   for nucleotide redundancy in pan\-genome analyses. The panqc Nucleotide
   Redundancy Correction \(NRC\) pipeline adjusts for redundancy at the DNA
   level within pan\-genome estimates by comparing genes classified as absent
   at the amino acid level against their corresponding assemblies at the
   nucleotide level and by clustering genes using k\-mer based nucleotide
   similarity metrics.



.. conda:package:: panqc

   |downloads_panqc| |docker_panqc|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends colored: 
   :depends mappy: ``2.26``
   :depends mmh3: 
   :depends networkx: 
   :depends pandas: 
   :depends python: 
   :depends screed: 
   :depends tqdm: 
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

      mamba install panqc

   and update with::

      mamba update panqc

  To create a new environment, run::

      mamba create --name myenvname panqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panqc:<tag>

   (see `panqc/tags`_ for valid values for ``<tag>``)


.. |downloads_panqc| image:: https://img.shields.io/conda/dn/bioconda/panqc.svg?style=flat
   :target: https://anaconda.org/bioconda/panqc
   :alt:   (downloads)
.. |docker_panqc| image:: https://quay.io/repository/biocontainers/panqc/status
   :target: https://quay.io/repository/biocontainers/panqc
.. _`panqc/tags`: https://quay.io/repository/biocontainers/panqc?tab=tags


.. raw:: html

    <script>
        var package = "panqc";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panqc/README.html