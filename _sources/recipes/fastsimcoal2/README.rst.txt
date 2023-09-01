:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastsimcoal2'
.. highlight: bash

fastsimcoal2
============

.. conda:recipe:: fastsimcoal2
   :replaces_section_title:
   :noindex:

   fast sequential markov coalescent simulation of genomic data under complex evolutionary models

   :homepage: http://cmpg.unibe.ch/software/fastsimcoal27/
   :license: GPL
   :recipe: /`fastsimcoal2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimcoal2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastsimcoal2/meta.yaml>`_

   


.. conda:package:: fastsimcoal2

   |downloads_fastsimcoal2| |docker_fastsimcoal2|

   :versions:
      
      

      ``27093-0``

      

   
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

      mamba install fastsimcoal2

   and update with::

      mamba update fastsimcoal2

  To create a new environment, run::

      mamba create --name myenvname fastsimcoal2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastsimcoal2:<tag>

   (see `fastsimcoal2/tags`_ for valid values for ``<tag>``)


.. |downloads_fastsimcoal2| image:: https://img.shields.io/conda/dn/bioconda/fastsimcoal2.svg?style=flat
   :target: https://anaconda.org/bioconda/fastsimcoal2
   :alt:   (downloads)
.. |docker_fastsimcoal2| image:: https://quay.io/repository/biocontainers/fastsimcoal2/status
   :target: https://quay.io/repository/biocontainers/fastsimcoal2
.. _`fastsimcoal2/tags`: https://quay.io/repository/biocontainers/fastsimcoal2?tab=tags


.. raw:: html

    <script>
        var package = "fastsimcoal2";
        var versions = ["27093"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastsimcoal2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastsimcoal2/README.html