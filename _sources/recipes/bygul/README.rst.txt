:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bygul'
.. highlight: bash

bygul
=====

.. conda:recipe:: bygul
   :replaces_section_title:
   :noindex:

   Bygul is an amplicon read simulating tool that can generate different sample read proportions based on user input.

   :homepage: https://github.com/andersen-lab/Bygul
   :license: BSD / BSD-2-Clause
   :recipe: /`bygul <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bygul>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bygul/meta.yaml>`_

   


.. conda:package:: bygul

   |downloads_bygul| |docker_bygul|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends mason: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends tqdm: 
   :depends wgsim: 
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

      mamba install bygul

   and update with::

      mamba update bygul

  To create a new environment, run::

      mamba create --name myenvname bygul

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bygul:<tag>

   (see `bygul/tags`_ for valid values for ``<tag>``)


.. |downloads_bygul| image:: https://img.shields.io/conda/dn/bioconda/bygul.svg?style=flat
   :target: https://anaconda.org/bioconda/bygul
   :alt:   (downloads)
.. |docker_bygul| image:: https://quay.io/repository/biocontainers/bygul/status
   :target: https://quay.io/repository/biocontainers/bygul
.. _`bygul/tags`: https://quay.io/repository/biocontainers/bygul?tab=tags


.. raw:: html

    <script>
        var package = "bygul";
        var versions = ["1.0.6","1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bygul/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bygul/README.html