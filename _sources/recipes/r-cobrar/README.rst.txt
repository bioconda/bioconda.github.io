:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cobrar'
.. highlight: bash

r-cobrar
========

.. conda:recipe:: r-cobrar
   :replaces_section_title:
   :noindex:

   COnstraint\-based Reconstruction and Analysis \(COBRA\) of metabolic networks in R

   :homepage: https://github.com/Waschina/cobrar
   :documentation: https://waschina.github.io/cobrar/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-cobrar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cobrar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cobrar/meta.yaml>`_

   


.. conda:package:: r-cobrar

   |downloads_r-cobrar| |docker_r-cobrar|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends glpk: ``>=4.65``
   :depends glpk: ``>=5.0,<6.0a0``
   :depends libgcc: ``>=13``
   :depends libsbml: ``>=5.18.0``
   :depends libsbml: ``>=5.20.5,<5.21.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-cobrar

   and update with::

      mamba update r-cobrar

  To create a new environment, run::

      mamba create --name myenvname r-cobrar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-cobrar:<tag>

   (see `r-cobrar/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cobrar| image:: https://img.shields.io/conda/dn/bioconda/r-cobrar.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cobrar
   :alt:   (downloads)
.. |docker_r-cobrar| image:: https://quay.io/repository/biocontainers/r-cobrar/status
   :target: https://quay.io/repository/biocontainers/r-cobrar
.. _`r-cobrar/tags`: https://quay.io/repository/biocontainers/r-cobrar?tab=tags


.. raw:: html

    <script>
        var package = "r-cobrar";
        var versions = ["0.2.3","0.2.2","0.2.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cobrar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cobrar/README.html