:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mason'
.. highlight: bash

mason
=====

.. conda:recipe:: mason
   :replaces_section_title:
   :noindex:

   Mason is a collection of tools for the simulation of biological sequences.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/mason2/README
   :license: https://github.com/seqan/seqan/tree/master/apps/mason2/LICENSE
   :recipe: /`mason <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mason/meta.yaml>`_
   :links: biotools: :biotools:`mason`, doi: :doi:`10.1371/journal.pone.0049110`

   


.. conda:package:: mason

   |downloads_mason| |docker_mason|

   :versions:
      
      

      ``2.0.9-1``,  ``2.0.9-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.7-0``

      

   
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

      mamba install mason

   and update with::

      mamba update mason

  To create a new environment, run::

      mamba create --name myenvname mason

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mason:<tag>

   (see `mason/tags`_ for valid values for ``<tag>``)


.. |downloads_mason| image:: https://img.shields.io/conda/dn/bioconda/mason.svg?style=flat
   :target: https://anaconda.org/bioconda/mason
   :alt:   (downloads)
.. |docker_mason| image:: https://quay.io/repository/biocontainers/mason/status
   :target: https://quay.io/repository/biocontainers/mason
.. _`mason/tags`: https://quay.io/repository/biocontainers/mason?tab=tags


.. raw:: html

    <script>
        var package = "mason";
        var versions = ["2.0.9","2.0.9","2.0.8","2.0.8","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mason/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mason/README.html