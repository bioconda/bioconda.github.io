:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afwdist'
.. highlight: bash

afwdist
=======

.. conda:recipe:: afwdist
   :replaces_section_title:
   :noindex:

   A lightweight tool to calculate a pairwise distance metric based on fixed and non\-fixed allele frequencies.

   :homepage: https://github.com/PathoGenOmics-Lab/afwdist
   :license: GPL3 / GPL-3.0-only
   :recipe: /`afwdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afwdist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afwdist/meta.yaml>`_

   


.. conda:package:: afwdist

   |downloads_afwdist| |docker_afwdist|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install afwdist

   and update with::

      mamba update afwdist

  To create a new environment, run::

      mamba create --name myenvname afwdist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/afwdist:<tag>

   (see `afwdist/tags`_ for valid values for ``<tag>``)


.. |downloads_afwdist| image:: https://img.shields.io/conda/dn/bioconda/afwdist.svg?style=flat
   :target: https://anaconda.org/bioconda/afwdist
   :alt:   (downloads)
.. |docker_afwdist| image:: https://quay.io/repository/biocontainers/afwdist/status
   :target: https://quay.io/repository/biocontainers/afwdist
.. _`afwdist/tags`: https://quay.io/repository/biocontainers/afwdist?tab=tags


.. raw:: html

    <script>
        var package = "afwdist";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afwdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afwdist/README.html