:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequnwinder'
.. highlight: bash

sequnwinder
===========

.. conda:recipe:: sequnwinder
   :replaces_section_title:
   :noindex:

   SeqUnwinder is a framework for characterizing class\-discriminative motifs in a collection of genomic loci that have several \(overlapping\) annotation labels.

   :homepage: http://mahonylab.org/software/sequnwinder/
   :license: MIT
   :recipe: /`sequnwinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequnwinder/meta.yaml>`_

   


.. conda:package:: sequnwinder

   |downloads_sequnwinder| |docker_sequnwinder|

   :versions:
      
      

      ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
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

      mamba install sequnwinder

   and update with::

      mamba update sequnwinder

  To create a new environment, run::

      mamba create --name myenvname sequnwinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequnwinder:<tag>

   (see `sequnwinder/tags`_ for valid values for ``<tag>``)


.. |downloads_sequnwinder| image:: https://img.shields.io/conda/dn/bioconda/sequnwinder.svg?style=flat
   :target: https://anaconda.org/bioconda/sequnwinder
   :alt:   (downloads)
.. |docker_sequnwinder| image:: https://quay.io/repository/biocontainers/sequnwinder/status
   :target: https://quay.io/repository/biocontainers/sequnwinder
.. _`sequnwinder/tags`: https://quay.io/repository/biocontainers/sequnwinder?tab=tags


.. raw:: html

    <script>
        var package = "sequnwinder";
        var versions = ["0.1.4","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequnwinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequnwinder/README.html