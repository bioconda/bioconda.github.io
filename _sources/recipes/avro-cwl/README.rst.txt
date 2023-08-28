:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-cwl'
.. highlight: bash

avro-cwl
========

.. conda:recipe:: avro-cwl
   :replaces_section_title:
   :noindex:

   Avro is a serialization and RPC framework. This package is a fork of regular avro made by the CWL team in order to fix some issues \(https\:\/\/github.com\/common\-workflow\-language\/cwltool\/issues\/524\)

   :homepage: https://pypi.python.org/pypi?:action=display&name=avro-cwl
   :license: APACHE / Apache 2.0
   :recipe: /`avro-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl/meta.yaml>`_

   


.. conda:package:: avro-cwl

   |downloads_avro-cwl| |docker_avro-cwl|

   :versions:
      
      

      ``1.8.9-0``,  ``1.8.4-1``,  ``1.8.4-0``

      

   
   :depends python: 
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

      mamba install avro-cwl

   and update with::

      mamba update avro-cwl

  To create a new environment, run::

      mamba create --name myenvname avro-cwl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/avro-cwl:<tag>

   (see `avro-cwl/tags`_ for valid values for ``<tag>``)


.. |downloads_avro-cwl| image:: https://img.shields.io/conda/dn/bioconda/avro-cwl.svg?style=flat
   :target: https://anaconda.org/bioconda/avro-cwl
   :alt:   (downloads)
.. |docker_avro-cwl| image:: https://quay.io/repository/biocontainers/avro-cwl/status
   :target: https://quay.io/repository/biocontainers/avro-cwl
.. _`avro-cwl/tags`: https://quay.io/repository/biocontainers/avro-cwl?tab=tags


.. raw:: html

    <script>
        var package = "avro-cwl";
        var versions = ["1.8.9","1.8.4","1.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-cwl/README.html