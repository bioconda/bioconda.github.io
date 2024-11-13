:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-chord'
.. highlight: bash

hmftools-chord
==============

.. conda:recipe:: hmftools-chord
   :replaces_section_title:
   :noindex:

   Predict HRD using somatic mutations contexts

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/chord/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-chord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-chord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-chord/meta.yaml>`_

   


.. conda:package:: hmftools-chord

   |downloads_hmftools-chord| |docker_hmftools-chord|

   :versions:
      
      

      ``2.1.0_beta-2``,  ``2.1.0_beta-0``

      

   
   :depends openjdk: ``>=8``
   :depends r-base: 
   :depends r-randomforest: 
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

      mamba install hmftools-chord

   and update with::

      mamba update hmftools-chord

  To create a new environment, run::

      mamba create --name myenvname hmftools-chord

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-chord:<tag>

   (see `hmftools-chord/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-chord| image:: https://img.shields.io/conda/dn/bioconda/hmftools-chord.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-chord
   :alt:   (downloads)
.. |docker_hmftools-chord| image:: https://quay.io/repository/biocontainers/hmftools-chord/status
   :target: https://quay.io/repository/biocontainers/hmftools-chord
.. _`hmftools-chord/tags`: https://quay.io/repository/biocontainers/hmftools-chord?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-chord";
        var versions = ["2.1.0_beta","2.1.0_beta"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-chord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-chord/README.html