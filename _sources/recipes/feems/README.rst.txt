:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feems'
.. highlight: bash

feems
=====

.. conda:recipe:: feems
   :replaces_section_title:
   :noindex:

   Fast Estimation of Effective Migration Surfaces

   :homepage: https://github.com/NovembreLab/feems
   :license: MIT
   :recipe: /`feems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feems/meta.yaml>`_

   A python package implementing a statistical method for inferring and visualizing gene\-flow in spatial population genetic data


.. conda:package:: feems

   |downloads_feems| |docker_feems|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends cartopy: ``0.18.*``
   :depends fiona: 
   :depends matplotlib-base: 
   :depends msprime: 
   :depends networkx: 
   :depends numpy: 
   :depends pyproj: 
   :depends python: ``3.9.*``
   :depends scikit-learn: 
   :depends scikit-sparse: ``0.4.*``
   :depends suitesparse: ``5.7.*``
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

      mamba install feems

   and update with::

      mamba update feems

  To create a new environment, run::

      mamba create --name myenvname feems

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/feems:<tag>

   (see `feems/tags`_ for valid values for ``<tag>``)


.. |downloads_feems| image:: https://img.shields.io/conda/dn/bioconda/feems.svg?style=flat
   :target: https://anaconda.org/bioconda/feems
   :alt:   (downloads)
.. |docker_feems| image:: https://quay.io/repository/biocontainers/feems/status
   :target: https://quay.io/repository/biocontainers/feems
.. _`feems/tags`: https://quay.io/repository/biocontainers/feems?tab=tags


.. raw:: html

    <script>
        var package = "feems";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feems/README.html