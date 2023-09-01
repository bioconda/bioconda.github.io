:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ndex-python'
.. highlight: bash

ndex-python
===========

.. conda:recipe:: ndex-python
   :replaces_section_title:
   :noindex:

   NDEx Python includes a client and a data model.

   :homepage: https://github.com/ndexbio/ndex-python
   :license: BSD / BSD License
   :recipe: /`ndex-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python/meta.yaml>`_

   


.. conda:package:: ndex-python

   |downloads_ndex-python| |docker_ndex-python|

   :versions:
      
      

      ``3.0.11.23-2``,  ``3.0.11.23-1``,  ``3.0.11.23-0``

      

   
   :depends networkx: 
   :depends python: ``<3``
   :depends requests: 
   :depends requests-toolbelt: 
   :depends urllib3: ``>=1.16``
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

      mamba install ndex-python

   and update with::

      mamba update ndex-python

  To create a new environment, run::

      mamba create --name myenvname ndex-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ndex-python:<tag>

   (see `ndex-python/tags`_ for valid values for ``<tag>``)


.. |downloads_ndex-python| image:: https://img.shields.io/conda/dn/bioconda/ndex-python.svg?style=flat
   :target: https://anaconda.org/bioconda/ndex-python
   :alt:   (downloads)
.. |docker_ndex-python| image:: https://quay.io/repository/biocontainers/ndex-python/status
   :target: https://quay.io/repository/biocontainers/ndex-python
.. _`ndex-python/tags`: https://quay.io/repository/biocontainers/ndex-python?tab=tags


.. raw:: html

    <script>
        var package = "ndex-python";
        var versions = ["3.0.11.23","3.0.11.23","3.0.11.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ndex-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ndex-python/README.html