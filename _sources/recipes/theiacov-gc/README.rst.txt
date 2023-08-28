:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'theiacov-gc'
.. highlight: bash

theiacov-gc
===========

.. conda:recipe:: theiacov-gc
   :replaces_section_title:
   :noindex:

   Command\-line version of the TheiaCov genomic characterization workflow for SARS\-CoV\-2.

   :homepage: https://github.com/theiagen/public_health_viral_genomics
   :license: AGPL / AGPL-3.0
   :recipe: /`theiacov-gc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theiacov-gc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theiacov-gc/meta.yaml>`_

   


.. conda:package:: theiacov-gc

   |downloads_theiacov-gc| |docker_theiacov-gc|

   :versions:
      
      

      ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``

      

   
   :depends cromwell: 
   :depends python: ``>=3.7``
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

      mamba install theiacov-gc

   and update with::

      mamba update theiacov-gc

  To create a new environment, run::

      mamba create --name myenvname theiacov-gc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/theiacov-gc:<tag>

   (see `theiacov-gc/tags`_ for valid values for ``<tag>``)


.. |downloads_theiacov-gc| image:: https://img.shields.io/conda/dn/bioconda/theiacov-gc.svg?style=flat
   :target: https://anaconda.org/bioconda/theiacov-gc
   :alt:   (downloads)
.. |docker_theiacov-gc| image:: https://quay.io/repository/biocontainers/theiacov-gc/status
   :target: https://quay.io/repository/biocontainers/theiacov-gc
.. _`theiacov-gc/tags`: https://quay.io/repository/biocontainers/theiacov-gc?tab=tags


.. raw:: html

    <script>
        var package = "theiacov-gc";
        var versions = ["2.3.2","2.3.1","2.3.0","2.2.0","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/theiacov-gc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/theiacov-gc/README.html