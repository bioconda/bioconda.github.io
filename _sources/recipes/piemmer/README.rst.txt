:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piemmer'
.. highlight: bash

piemmer
=======

.. conda:recipe:: piemmer
   :replaces_section_title:
   :noindex:

   A algorithm to simplify the input for principal component analysis

   :homepage: The package home page
   :documentation: https://github.com/HWChang/emmer/wiki
   
   :developer docs: https://github.com/HWChang/emmer/
   :license: BSD / BSD-3-Clause
   :recipe: /`piemmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piemmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piemmer/meta.yaml>`_

   


.. conda:package:: piemmer

   |downloads_piemmer| |docker_piemmer|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4.dev0-0``,  ``1.0.2.dev0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-bio: 
   :depends scipy: 
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

      mamba install piemmer

   and update with::

      mamba update piemmer

  To create a new environment, run::

      mamba create --name myenvname piemmer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piemmer:<tag>

   (see `piemmer/tags`_ for valid values for ``<tag>``)


.. |downloads_piemmer| image:: https://img.shields.io/conda/dn/bioconda/piemmer.svg?style=flat
   :target: https://anaconda.org/bioconda/piemmer
   :alt:   (downloads)
.. |docker_piemmer| image:: https://quay.io/repository/biocontainers/piemmer/status
   :target: https://quay.io/repository/biocontainers/piemmer
.. _`piemmer/tags`: https://quay.io/repository/biocontainers/piemmer?tab=tags


.. raw:: html

    <script>
        var package = "piemmer";
        var versions = ["1.0.5","1.0.4.dev0","1.0.2.dev0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piemmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piemmer/README.html