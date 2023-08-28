:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isva'
.. highlight: bash

r-isva
======

.. conda:recipe:: r-isva
   :replaces_section_title:
   :noindex:

   Independent Surrogate Variable Analysis is an algorithm for feature selection in the presence of potential confounding factors \(see Teschendorff AE et al 2011\, \<doi\: 10.1093\/bioinformatics\/btr171\>\).

   :homepage: https://CRAN.R-project.org/package=isva
   :license: GPL2 / GPL-2
   :recipe: /`r-isva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isva/meta.yaml>`_

   


.. conda:package:: r-isva

   |downloads_r-isva| |docker_r-isva|

   :versions:
      
      

      ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``

      

   
   :depends bioconductor-qvalue: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fastica: 
   :depends r-jade: 
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

      mamba install r-isva

   and update with::

      mamba update r-isva

  To create a new environment, run::

      mamba create --name myenvname r-isva

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-isva:<tag>

   (see `r-isva/tags`_ for valid values for ``<tag>``)


.. |downloads_r-isva| image:: https://img.shields.io/conda/dn/bioconda/r-isva.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isva
   :alt:   (downloads)
.. |docker_r-isva| image:: https://quay.io/repository/biocontainers/r-isva/status
   :target: https://quay.io/repository/biocontainers/r-isva
.. _`r-isva/tags`: https://quay.io/repository/biocontainers/r-isva?tab=tags


.. raw:: html

    <script>
        var package = "r-isva";
        var versions = ["1.9","1.9","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isva/README.html