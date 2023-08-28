:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcommand'
.. highlight: bash

pbcommand
=========

.. conda:recipe:: pbcommand
   :replaces_section_title:
   :noindex:

   Library for generating the CLI of various PacBio tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand/meta.yaml>`_

   


.. conda:package:: pbcommand

   |downloads_pbcommand| |docker_pbcommand|

   :versions:
      
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``0.3.29-0``,  ``0.2.17-0``

      

   
   :depends avro-python3: 
   :depends iso8601: 
   :depends numpy: ``>=1.17``
   :depends python: ``>=3.7,<3.8``
   :depends pytz: 
   :depends requests: 
   :depends setuptools: 
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

      mamba install pbcommand

   and update with::

      mamba update pbcommand

  To create a new environment, run::

      mamba create --name myenvname pbcommand

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbcommand:<tag>

   (see `pbcommand/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcommand| image:: https://img.shields.io/conda/dn/bioconda/pbcommand.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcommand
   :alt:   (downloads)
.. |docker_pbcommand| image:: https://quay.io/repository/biocontainers/pbcommand/status
   :target: https://quay.io/repository/biocontainers/pbcommand
.. _`pbcommand/tags`: https://quay.io/repository/biocontainers/pbcommand?tab=tags


.. raw:: html

    <script>
        var package = "pbcommand";
        var versions = ["2.1.1","2.1.1","2.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcommand/README.html