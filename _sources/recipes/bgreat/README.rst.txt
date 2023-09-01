:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bgreat'
.. highlight: bash

bgreat
======

.. conda:recipe:: bgreat
   :replaces_section_title:
   :noindex:

   BGREAT2 is a read mapping tool for NGS sequencing data that align reads on a de Bruijn graph. Preliminary version described at https\:\/\/bmcbioinformatics.biomedcentral.com\/articles\/10.1186\/s12859\-016\-1103\-9 and used in Bcool a short read corrector \(https\:\/\/arxiv.org\/abs\/1711.03336\)

   :homepage: https://github.com/Malfoy/BGREAT2
   :license: AGPL-3.0
   :recipe: /`bgreat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bgreat/meta.yaml>`_

   


.. conda:package:: bgreat

   |downloads_bgreat| |docker_bgreat|

   :versions:
      
      

      ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install bgreat

   and update with::

      mamba update bgreat

  To create a new environment, run::

      mamba create --name myenvname bgreat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bgreat:<tag>

   (see `bgreat/tags`_ for valid values for ``<tag>``)


.. |downloads_bgreat| image:: https://img.shields.io/conda/dn/bioconda/bgreat.svg?style=flat
   :target: https://anaconda.org/bioconda/bgreat
   :alt:   (downloads)
.. |docker_bgreat| image:: https://quay.io/repository/biocontainers/bgreat/status
   :target: https://quay.io/repository/biocontainers/bgreat
.. _`bgreat/tags`: https://quay.io/repository/biocontainers/bgreat?tab=tags


.. raw:: html

    <script>
        var package = "bgreat";
        var versions = ["2.0.0","2.0.0","2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bgreat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bgreat/README.html