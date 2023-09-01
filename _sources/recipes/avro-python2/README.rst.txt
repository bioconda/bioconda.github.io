:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-python2'
.. highlight: bash

avro-python2
============

.. conda:recipe:: avro-python2
   :replaces_section_title:
   :noindex:

   Avro is a serialization and RPC framework.

   :homepage: http://avro.apache.org/
   :license: Apache License 2.0
   :recipe: /`avro-python2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2/meta.yaml>`_

   


.. conda:package:: avro-python2

   |downloads_avro-python2| |docker_avro-python2|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      

   
   :depends python: 
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

      mamba install avro-python2

   and update with::

      mamba update avro-python2

  To create a new environment, run::

      mamba create --name myenvname avro-python2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/avro-python2:<tag>

   (see `avro-python2/tags`_ for valid values for ``<tag>``)


.. |downloads_avro-python2| image:: https://img.shields.io/conda/dn/bioconda/avro-python2.svg?style=flat
   :target: https://anaconda.org/bioconda/avro-python2
   :alt:   (downloads)
.. |docker_avro-python2| image:: https://quay.io/repository/biocontainers/avro-python2/status
   :target: https://quay.io/repository/biocontainers/avro-python2
.. _`avro-python2/tags`: https://quay.io/repository/biocontainers/avro-python2?tab=tags


.. raw:: html

    <script>
        var package = "avro-python2";
        var versions = ["1.9.0","1.8.2","1.8.2","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-python2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-python2/README.html