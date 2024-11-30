:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grimer'
.. highlight: bash

grimer
======

.. conda:recipe:: grimer
   :replaces_section_title:
   :noindex:

   GRIMER performs analysis of microbiome studies and generates a portable and interactive dashboard

   :homepage: https://github.com/pirovc/grimer
   :license: MIT / MIT License
   :recipe: /`grimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grimer/meta.yaml>`_

   GRIMER performs analysis of microbiome studies and generates a portable and interactive dashboard 
   integrating annotation\, taxonomy and metadata with focus on contamination detection. 



.. conda:package:: grimer

   |downloads_grimer| |docker_grimer|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-decontam: ``1.10.0``
   :depends biom-format: ``>=2.1.10``
   :depends bokeh: ``2.2.3``
   :depends jinja2: ``3.0.3``
   :depends markdown: 
   :depends multitax: ``>=1.2.1``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends r-base: ``>=4.0.0``
   :depends r-optparse: ``1.6.6``
   :depends scikit-bio: ``>=0.5.6``
   :depends scipy: ``>=1.6.0``
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

      mamba install grimer

   and update with::

      mamba update grimer

  To create a new environment, run::

      mamba create --name myenvname grimer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grimer:<tag>

   (see `grimer/tags`_ for valid values for ``<tag>``)


.. |downloads_grimer| image:: https://img.shields.io/conda/dn/bioconda/grimer.svg?style=flat
   :target: https://anaconda.org/bioconda/grimer
   :alt:   (downloads)
.. |docker_grimer| image:: https://quay.io/repository/biocontainers/grimer/status
   :target: https://quay.io/repository/biocontainers/grimer
.. _`grimer/tags`: https://quay.io/repository/biocontainers/grimer?tab=tags


.. raw:: html

    <script>
        var package = "grimer";
        var versions = ["1.1.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grimer/README.html