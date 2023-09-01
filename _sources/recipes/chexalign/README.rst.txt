:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chexalign'
.. highlight: bash

chexalign
=========

.. conda:recipe:: chexalign
   :replaces_section_title:
   :noindex:

   ChExAlign is used for alignment and quantification of ChIP\-exo crosslinking patterns.

   :homepage: https://github.com/seqcode/chexalign
   :license: MIT
   :recipe: /`chexalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexalign/meta.yaml>`_

   ChExAlign is a computational framework that aligns ChIP\-exo crosslinking patterns from multiple proteins across a set of regulatory regions\, and which detects and quantifies protein\-DNA crosslinking events within the aligned profiles. The output of the alignment approach is a set of composite profiles that represent the crosslinking signatures of the complex across analyzed regulatory regions. We then use a probabilistic mixture model to deconvolve individual crosslinking events within the aligned ChIP\-exo profiles\, enabling consistent measurements of protein\-DNA crosslinking strengths across multiple proteins.


.. conda:package:: chexalign

   |downloads_chexalign| |docker_chexalign|

   :versions:
      
      

      ``0.12-1``,  ``0.12-0``,  ``0.11-0``

      

   
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

      mamba install chexalign

   and update with::

      mamba update chexalign

  To create a new environment, run::

      mamba create --name myenvname chexalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chexalign:<tag>

   (see `chexalign/tags`_ for valid values for ``<tag>``)


.. |downloads_chexalign| image:: https://img.shields.io/conda/dn/bioconda/chexalign.svg?style=flat
   :target: https://anaconda.org/bioconda/chexalign
   :alt:   (downloads)
.. |docker_chexalign| image:: https://quay.io/repository/biocontainers/chexalign/status
   :target: https://quay.io/repository/biocontainers/chexalign
.. _`chexalign/tags`: https://quay.io/repository/biocontainers/chexalign?tab=tags


.. raw:: html

    <script>
        var package = "chexalign";
        var versions = ["0.12","0.12","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chexalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chexalign/README.html