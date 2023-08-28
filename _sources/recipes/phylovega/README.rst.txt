:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylovega'
.. highlight: bash

phylovega
=========

.. conda:recipe:: phylovega
   :replaces_section_title:
   :noindex:

   Interactive Phylogenetic trees in Vega.

   :homepage: https://github.com/Zsailer/phylovega
   :license: MIT / MIT
   :recipe: /`phylovega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega/meta.yaml>`_

   


.. conda:package:: phylovega

   |downloads_phylovega| |docker_phylovega|

   :versions:
      
      

      ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends phylopandas: 
   :depends python: ``>=3.4.0``
   :depends vega: 
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

      mamba install phylovega

   and update with::

      mamba update phylovega

  To create a new environment, run::

      mamba create --name myenvname phylovega

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylovega:<tag>

   (see `phylovega/tags`_ for valid values for ``<tag>``)


.. |downloads_phylovega| image:: https://img.shields.io/conda/dn/bioconda/phylovega.svg?style=flat
   :target: https://anaconda.org/bioconda/phylovega
   :alt:   (downloads)
.. |docker_phylovega| image:: https://quay.io/repository/biocontainers/phylovega/status
   :target: https://quay.io/repository/biocontainers/phylovega
.. _`phylovega/tags`: https://quay.io/repository/biocontainers/phylovega?tab=tags


.. raw:: html

    <script>
        var package = "phylovega";
        var versions = ["0.3","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylovega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylovega/README.html