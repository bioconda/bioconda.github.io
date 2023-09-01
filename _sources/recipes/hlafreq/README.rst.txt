:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlafreq'
.. highlight: bash

hlafreq
=======

.. conda:recipe:: hlafreq
   :replaces_section_title:
   :noindex:

   Download and combine HLA frequency data from multiple studies

   :homepage: https://github.com/Vaccitech/HLAfreq
   :license: MIT / MIT
   :recipe: /`hlafreq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlafreq/meta.yaml>`_

   


.. conda:package:: hlafreq

   |downloads_hlafreq| |docker_hlafreq|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends arviz: 
   :depends bs4: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pymc: ``>=3``
   :depends python: ``>=3.8``
   :depends requests: 
   :depends scipy: 
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

      mamba install hlafreq

   and update with::

      mamba update hlafreq

  To create a new environment, run::

      mamba create --name myenvname hlafreq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hlafreq:<tag>

   (see `hlafreq/tags`_ for valid values for ``<tag>``)


.. |downloads_hlafreq| image:: https://img.shields.io/conda/dn/bioconda/hlafreq.svg?style=flat
   :target: https://anaconda.org/bioconda/hlafreq
   :alt:   (downloads)
.. |docker_hlafreq| image:: https://quay.io/repository/biocontainers/hlafreq/status
   :target: https://quay.io/repository/biocontainers/hlafreq
.. _`hlafreq/tags`: https://quay.io/repository/biocontainers/hlafreq?tab=tags


.. raw:: html

    <script>
        var package = "hlafreq";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlafreq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlafreq/README.html