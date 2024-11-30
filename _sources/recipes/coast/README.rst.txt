:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coast'
.. highlight: bash

coast
=====

.. conda:recipe:: coast
   :replaces_section_title:
   :noindex:

   Alignment search tool that identifies similar proteomes.

   :homepage: https://gitlab.com/coast_tool/COAST
   :license: MIT / MIT
   :recipe: /`coast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast/meta.yaml>`_

   Alignment search tool that identifies similar proteomes.



.. conda:package:: coast

   |downloads_coast| |docker_coast|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10``
   :depends bokeh: ``>=2.4.0``
   :depends jinja2: ``>=3.0.0``
   :depends pandas: ``>=1.2.0``
   :depends python: 
   :depends requests: ``>=2.25.1``
   :depends seaborn: ``>=0.11.1``
   :depends tabulate: ``>=0.8.9``
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

      mamba install coast

   and update with::

      mamba update coast

  To create a new environment, run::

      mamba create --name myenvname coast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coast:<tag>

   (see `coast/tags`_ for valid values for ``<tag>``)


.. |downloads_coast| image:: https://img.shields.io/conda/dn/bioconda/coast.svg?style=flat
   :target: https://anaconda.org/bioconda/coast
   :alt:   (downloads)
.. |docker_coast| image:: https://quay.io/repository/biocontainers/coast/status
   :target: https://quay.io/repository/biocontainers/coast
.. _`coast/tags`: https://quay.io/repository/biocontainers/coast?tab=tags


.. raw:: html

    <script>
        var package = "coast";
        var versions = ["0.2.2","0.2.1","0.2.0","0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coast/README.html