:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometreetk'
.. highlight: bash

genometreetk
============

.. conda:recipe:: genometreetk
   :replaces_section_title:
   :noindex:

   The genome tree toolkit is a collection of methods for working with genome trees.

   :homepage: https://github.com/dparks1134/GenomeTreeTk
   :license: GPL3 / GPL3
   :recipe: /`genometreetk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk/meta.yaml>`_

   


.. conda:package:: genometreetk

   |downloads_genometreetk| |docker_genometreetk|

   :versions:
      
      

      ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends biolib: ``>=0.1.0``
   :depends blast: 
   :depends dendropy: ``>=4.0.0``
   :depends easel: 
   :depends fastani: ``>=1.3``
   :depends fasttree: 
   :depends future: 
   :depends hmmer: ``>=3.1b2``
   :depends infernal: 
   :depends mash: 
   :depends mothur: 
   :depends numpy: ``>=1.8.0``
   :depends python: ``>=3.6``
   :depends scipy: ``>=0.16.0``
   :depends ssu-align: 
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

      mamba install genometreetk

   and update with::

      mamba update genometreetk

  To create a new environment, run::

      mamba create --name myenvname genometreetk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genometreetk:<tag>

   (see `genometreetk/tags`_ for valid values for ``<tag>``)


.. |downloads_genometreetk| image:: https://img.shields.io/conda/dn/bioconda/genometreetk.svg?style=flat
   :target: https://anaconda.org/bioconda/genometreetk
   :alt:   (downloads)
.. |docker_genometreetk| image:: https://quay.io/repository/biocontainers/genometreetk/status
   :target: https://quay.io/repository/biocontainers/genometreetk
.. _`genometreetk/tags`: https://quay.io/repository/biocontainers/genometreetk?tab=tags


.. raw:: html

    <script>
        var package = "genometreetk";
        var versions = ["0.1.6","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometreetk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometreetk/README.html