:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rerconverge'
.. highlight: bash

rerconverge
===========

.. conda:recipe:: rerconverge
   :replaces_section_title:
   :noindex:

   RERconverge is a set of software written in R that estimates the correlation between relative evolutionary rates of gene.

   :homepage: https://github.com/nclark-lab/RERconverge
   :license: GPL / GPL-3
   :recipe: /`rerconverge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rerconverge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rerconverge/meta.yaml>`_

   


.. conda:package:: rerconverge

   |downloads_rerconverge| |docker_rerconverge|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-devtools: 
   :depends r-geiger: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-phangorn: 
   :depends r-phytools: 
   :depends r-rcpparmadillo: 
   :depends r-weights: 
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

      mamba install rerconverge

   and update with::

      mamba update rerconverge

  To create a new environment, run::

      mamba create --name myenvname rerconverge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rerconverge:<tag>

   (see `rerconverge/tags`_ for valid values for ``<tag>``)


.. |downloads_rerconverge| image:: https://img.shields.io/conda/dn/bioconda/rerconverge.svg?style=flat
   :target: https://anaconda.org/bioconda/rerconverge
   :alt:   (downloads)
.. |docker_rerconverge| image:: https://quay.io/repository/biocontainers/rerconverge/status
   :target: https://quay.io/repository/biocontainers/rerconverge
.. _`rerconverge/tags`: https://quay.io/repository/biocontainers/rerconverge?tab=tags


.. raw:: html

    <script>
        var package = "rerconverge";
        var versions = ["0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rerconverge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rerconverge/README.html