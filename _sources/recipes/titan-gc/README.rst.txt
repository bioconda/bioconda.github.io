:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titan-gc'
.. highlight: bash

titan-gc
========

.. conda:recipe:: titan-gc
   :replaces_section_title:
   :noindex:

   Command\-line version of the Titan genomic characterization workflow for viral pathogens of concern.

   :homepage: https://github.com/theiagen/public_health_viral_genomics
   :license: AGPL / AGPL-3.0
   :recipe: /`titan-gc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc/meta.yaml>`_

   


.. conda:package:: titan-gc

   |downloads_titan-gc| |docker_titan-gc|

   :versions:
      
      

      ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends cromwell: 
   :depends python: ``>=3.7``
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

      mamba install titan-gc

   and update with::

      mamba update titan-gc

  To create a new environment, run::

      mamba create --name myenvname titan-gc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/titan-gc:<tag>

   (see `titan-gc/tags`_ for valid values for ``<tag>``)


.. |downloads_titan-gc| image:: https://img.shields.io/conda/dn/bioconda/titan-gc.svg?style=flat
   :target: https://anaconda.org/bioconda/titan-gc
   :alt:   (downloads)
.. |docker_titan-gc| image:: https://quay.io/repository/biocontainers/titan-gc/status
   :target: https://quay.io/repository/biocontainers/titan-gc
.. _`titan-gc/tags`: https://quay.io/repository/biocontainers/titan-gc?tab=tags


.. raw:: html

    <script>
        var package = "titan-gc";
        var versions = ["1.5.3","1.5.3","1.5.2","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titan-gc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titan-gc/README.html