:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ndex2'
.. highlight: bash

ndex2
=====

.. conda:recipe:: ndex2
   :replaces_section_title:
   :noindex:

   Nice CX Python includes a client and a data model.

   :homepage: https://github.com/ndexbio/ndex2-client
   :documentation: https://github.com/ndexbio/ndex2-client/blob/master/README.rst
   
   :license: BSD / BSD-3-Clause
   :recipe: /`ndex2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex2/meta.yaml>`_

   


.. conda:package:: ndex2

   |downloads_ndex2| |docker_ndex2|

   :versions:
      
      

      ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``

      

   
   :depends ijson: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends requests-toolbelt: 
   :depends six: 
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

      mamba install ndex2

   and update with::

      mamba update ndex2

  To create a new environment, run::

      mamba create --name myenvname ndex2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ndex2:<tag>

   (see `ndex2/tags`_ for valid values for ``<tag>``)


.. |downloads_ndex2| image:: https://img.shields.io/conda/dn/bioconda/ndex2.svg?style=flat
   :target: https://anaconda.org/bioconda/ndex2
   :alt:   (downloads)
.. |docker_ndex2| image:: https://quay.io/repository/biocontainers/ndex2/status
   :target: https://quay.io/repository/biocontainers/ndex2
.. _`ndex2/tags`: https://quay.io/repository/biocontainers/ndex2?tab=tags


.. raw:: html

    <script>
        var package = "ndex2";
        var versions = ["3.8.0","3.7.0","3.6.0","3.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ndex2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ndex2/README.html