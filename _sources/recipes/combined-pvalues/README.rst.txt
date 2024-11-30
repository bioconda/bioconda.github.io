:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'combined-pvalues'
.. highlight: bash

combined-pvalues
================

.. conda:recipe:: combined-pvalues
   :replaces_section_title:
   :noindex:

   A library to combine\, analyze\, group and correct p\-values in BED files.
   Unique tools involve correction for spatial autocorrelation.
   This is useful for ChIP\-Seq probes and Tiling arrays\, or any data with spatial correlation.

   :homepage: https://github.com/brentp/combined-pvalues
   :license: MIT
   :recipe: /`combined-pvalues <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/combined-pvalues>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/combined-pvalues/meta.yaml>`_

   


.. conda:package:: combined-pvalues

   |downloads_combined-pvalues| |docker_combined-pvalues|

   :versions:
      
      

      ``0.50.6-0``,  ``0.50.5-0``,  ``0.50.2-0``,  ``0.50.0-0``,  ``0.48-3``,  ``0.48-2``,  ``0.48-0``,  ``0.46-0``

      

   
   :depends interlap: 
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
   :depends toolshed: 
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

      mamba install combined-pvalues

   and update with::

      mamba update combined-pvalues

  To create a new environment, run::

      mamba create --name myenvname combined-pvalues

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/combined-pvalues:<tag>

   (see `combined-pvalues/tags`_ for valid values for ``<tag>``)


.. |downloads_combined-pvalues| image:: https://img.shields.io/conda/dn/bioconda/combined-pvalues.svg?style=flat
   :target: https://anaconda.org/bioconda/combined-pvalues
   :alt:   (downloads)
.. |docker_combined-pvalues| image:: https://quay.io/repository/biocontainers/combined-pvalues/status
   :target: https://quay.io/repository/biocontainers/combined-pvalues
.. _`combined-pvalues/tags`: https://quay.io/repository/biocontainers/combined-pvalues?tab=tags


.. raw:: html

    <script>
        var package = "combined-pvalues";
        var versions = ["0.50.6","0.50.5","0.50.2","0.50.0","0.48"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/combined-pvalues/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/combined-pvalues/README.html