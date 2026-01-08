:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epiweeks'
.. highlight: bash

epiweeks
========

.. conda:recipe:: epiweeks
   :replaces_section_title:
   :noindex:

   Epidemiological weeks calculation based on the US CDC \(MMWR\) and ISO week numbering systems

   :homepage: https://github.com/dralshehri/epiweeks
   :license: MIT / MIT
   :recipe: /`epiweeks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epiweeks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epiweeks/meta.yaml>`_

   


.. conda:package:: epiweeks

   |downloads_epiweeks| |docker_epiweeks|

   :versions:
      
      

      ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-2``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``

      

   
   :depends python: ``>=3.10``
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

      mamba install epiweeks

   and update with::

      mamba update epiweeks

  To create a new environment, run::

      mamba create --name myenvname epiweeks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/epiweeks:<tag>

   (see `epiweeks/tags`_ for valid values for ``<tag>``)


.. |downloads_epiweeks| image:: https://img.shields.io/conda/dn/bioconda/epiweeks.svg?style=flat
   :target: https://anaconda.org/bioconda/epiweeks
   :alt:   (downloads)
.. |docker_epiweeks| image:: https://quay.io/repository/biocontainers/epiweeks/status
   :target: https://quay.io/repository/biocontainers/epiweeks
.. _`epiweeks/tags`: https://quay.io/repository/biocontainers/epiweeks?tab=tags


.. raw:: html

    <script>
        var package = "epiweeks";
        var versions = ["2.4.0","2.3.0","2.2.0","2.1.4","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epiweeks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epiweeks/README.html