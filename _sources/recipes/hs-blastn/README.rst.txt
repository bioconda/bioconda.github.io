:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hs-blastn'
.. highlight: bash

hs-blastn
=========

.. conda:recipe:: hs-blastn
   :replaces_section_title:
   :noindex:

   hs\-blastn\, a fast and accurate nucleotide\-nucleotide sequences aligner.

   :homepage: https://github.com/chenying2016/queries
   :license: GPL-3.0
   :recipe: /`hs-blastn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hs-blastn/meta.yaml>`_

   


.. conda:package:: hs-blastn

   |downloads_hs-blastn| |docker_hs-blastn|

   :versions:
      
      

      ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``

      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install hs-blastn

   and update with::

      mamba update hs-blastn

  To create a new environment, run::

      mamba create --name myenvname hs-blastn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hs-blastn:<tag>

   (see `hs-blastn/tags`_ for valid values for ``<tag>``)


.. |downloads_hs-blastn| image:: https://img.shields.io/conda/dn/bioconda/hs-blastn.svg?style=flat
   :target: https://anaconda.org/bioconda/hs-blastn
   :alt:   (downloads)
.. |docker_hs-blastn| image:: https://quay.io/repository/biocontainers/hs-blastn/status
   :target: https://quay.io/repository/biocontainers/hs-blastn
.. _`hs-blastn/tags`: https://quay.io/repository/biocontainers/hs-blastn?tab=tags


.. raw:: html

    <script>
        var package = "hs-blastn";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hs-blastn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hs-blastn/README.html