:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pod5'
.. highlight: bash

pod5
====

.. conda:recipe:: pod5
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies Pod5 File Format Python API and Tools.

   :homepage: https://github.com/nanoporetech/pod5-file-format
   :documentation: https://pod5-file-format.readthedocs.io/en/latest
   
   :license: OTHER / MPL-2.0
   :recipe: /`pod5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pod5/meta.yaml>`_

   POD5 File Format \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   POD5 is a file format for storing nanopore dna data in an easily accessible way. The format is able to be written in a streaming manner which allows a sequencing instrument to directly write the format.
   Data in POD5 is stored using Apache Arrow\, allowing users to consume data in many languages using standard tools.
   What does this project contain \-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
   This project contains a core library for reading and writing POD5 data\, and a toolkit for accessing this data in other languages.
   Documentation \-\-\-\-\-\-\-\-\-\-\-\-\-
   Full documentation is found at https\:\/\/pod5\-file\-format.readthedocs.io


.. conda:package:: pod5

   |downloads_pod5| |docker_pod5|

   :versions:
      
      

      ``0.3.33-0``,  ``0.3.27-0``,  ``0.3.23-0``,  ``0.3.15-0``

      

   
   :depends deprecated: 
   :depends h5py: ``>=3.11``
   :depends iso8601: 
   :depends lib-pod5: ``0.3.33``
   :depends more-itertools: 
   :depends numpy: ``>=1.21.0``
   :depends packaging: 
   :depends polars: ``>=1.20``
   :depends pyarrow: ``>=18.0.0``
   :depends python: ``>=3.8``
   :depends pytz: 
   :depends tqdm: 
   :depends vbz-h5py-plugin: 
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

      mamba install pod5

   and update with::

      mamba update pod5

  To create a new environment, run::

      mamba create --name myenvname pod5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pod5:<tag>

   (see `pod5/tags`_ for valid values for ``<tag>``)


.. |downloads_pod5| image:: https://img.shields.io/conda/dn/bioconda/pod5.svg?style=flat
   :target: https://anaconda.org/bioconda/pod5
   :alt:   (downloads)
.. |docker_pod5| image:: https://quay.io/repository/biocontainers/pod5/status
   :target: https://quay.io/repository/biocontainers/pod5
.. _`pod5/tags`: https://quay.io/repository/biocontainers/pod5?tab=tags


.. raw:: html

    <script>
        var package = "pod5";
        var versions = ["0.3.33","0.3.27","0.3.23","0.3.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pod5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pod5/README.html