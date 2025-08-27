:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustyread'
.. highlight: bash

rustyread
=========

.. conda:recipe:: rustyread
   :replaces_section_title:
   :noindex:

   Rustyread\, a long\-read simulator

   :homepage: https://github.com/natir/rustyread
   :license: MIT / MIT
   :recipe: /`rustyread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustyread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustyread/meta.yaml>`_

   


.. conda:package:: rustyread

   |downloads_rustyread| |docker_rustyread|

   :versions:
      
      

      ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends liblzma: ``>=5.6.3,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install rustyread

   and update with::

      mamba update rustyread

  To create a new environment, run::

      mamba create --name myenvname rustyread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rustyread:<tag>

   (see `rustyread/tags`_ for valid values for ``<tag>``)


.. |downloads_rustyread| image:: https://img.shields.io/conda/dn/bioconda/rustyread.svg?style=flat
   :target: https://anaconda.org/bioconda/rustyread
   :alt:   (downloads)
.. |docker_rustyread| image:: https://quay.io/repository/biocontainers/rustyread/status
   :target: https://quay.io/repository/biocontainers/rustyread
.. _`rustyread/tags`: https://quay.io/repository/biocontainers/rustyread?tab=tags


.. raw:: html

    <script>
        var package = "rustyread";
        var versions = ["0.4.1","0.4.1","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustyread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustyread/README.html