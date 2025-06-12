:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heliano'
.. highlight: bash

heliano
=======

.. conda:recipe:: heliano
   :replaces_section_title:
   :noindex:

   HELIANO\: A fast and accurate tool for detection of Helitron\-like elements

   :homepage: https://github.com/Zhenlisme/heliano
   :license: GNU General Public License v3.0
   :recipe: /`heliano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heliano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heliano/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae679`

   Helitron\-like elements \(HLE1 and HLE2\) are DNA transposons. 
   They have been found in diverse species and seem to play significant roles in the evolution of host genomes. 
   Although known for over twenty years\, Helitron sequences are still challenging to identify. 
   Here\, we propose HELIANO \(Helitron\-like elements annotator\) as an efficient solution for detecting Helitron\-like elements.



.. conda:package:: heliano

   |downloads_heliano| |docker_heliano|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.1-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends blast: 
   :depends cd-hit: 
   :depends dialign2: 
   :depends emboss: 
   :depends genometools-genometools: 
   :depends hmmer: 
   :depends mafft: 
   :depends pybedtools: 
   :depends python: ``>=3.9``
   :depends r-base: ``>=4.1``
   :depends r-bedtoolsr: 
   :depends r-seqinr: 
   :depends rnabob: 
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

      mamba install heliano

   and update with::

      mamba update heliano

  To create a new environment, run::

      mamba create --name myenvname heliano

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/heliano:<tag>

   (see `heliano/tags`_ for valid values for ``<tag>``)


.. |downloads_heliano| image:: https://img.shields.io/conda/dn/bioconda/heliano.svg?style=flat
   :target: https://anaconda.org/bioconda/heliano
   :alt:   (downloads)
.. |docker_heliano| image:: https://quay.io/repository/biocontainers/heliano/status
   :target: https://quay.io/repository/biocontainers/heliano
.. _`heliano/tags`: https://quay.io/repository/biocontainers/heliano?tab=tags


.. raw:: html

    <script>
        var package = "heliano";
        var versions = ["1.3.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heliano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heliano/README.html