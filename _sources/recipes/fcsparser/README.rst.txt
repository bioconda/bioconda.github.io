:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fcsparser'
.. highlight: bash

fcsparser
=========

.. conda:recipe:: fcsparser
   :replaces_section_title:
   :noindex:

   A python package for reading raw fcs files

   :homepage: https://github.com/eyurtsev/fcsparser
   :license: MIT / MIT
   :recipe: /`fcsparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcsparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fcsparser/meta.yaml>`_

   


.. conda:package:: fcsparser

   |downloads_fcsparser| |docker_fcsparser|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
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

      mamba install fcsparser

   and update with::

      mamba update fcsparser

  To create a new environment, run::

      mamba create --name myenvname fcsparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fcsparser:<tag>

   (see `fcsparser/tags`_ for valid values for ``<tag>``)


.. |downloads_fcsparser| image:: https://img.shields.io/conda/dn/bioconda/fcsparser.svg?style=flat
   :target: https://anaconda.org/bioconda/fcsparser
   :alt:   (downloads)
.. |docker_fcsparser| image:: https://quay.io/repository/biocontainers/fcsparser/status
   :target: https://quay.io/repository/biocontainers/fcsparser
.. _`fcsparser/tags`: https://quay.io/repository/biocontainers/fcsparser?tab=tags


.. raw:: html

    <script>
        var package = "fcsparser";
        var versions = ["0.2.6","0.2.4","0.2.3","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fcsparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fcsparser/README.html