:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyimzml'
.. highlight: bash

pyimzml
=======

.. conda:recipe:: pyimzml
   :replaces_section_title:
   :noindex:

   Parser for conversion of imzML 1.1.0 files

   :homepage: https://github.com/alexandrovteam/pyimzML
   :license: Apache / Apache-2.0
   :recipe: /`pyimzml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimzml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyimzml/meta.yaml>`_

   


.. conda:package:: pyimzml

   |downloads_pyimzml| |docker_pyimzml|

   :versions:
      
      

      ``1.5.1-0``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends numpy: 
   :depends python: 
   :depends wheezy.template: 
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

      mamba install pyimzml

   and update with::

      mamba update pyimzml

  To create a new environment, run::

      mamba create --name myenvname pyimzml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyimzml:<tag>

   (see `pyimzml/tags`_ for valid values for ``<tag>``)


.. |downloads_pyimzml| image:: https://img.shields.io/conda/dn/bioconda/pyimzml.svg?style=flat
   :target: https://anaconda.org/bioconda/pyimzml
   :alt:   (downloads)
.. |docker_pyimzml| image:: https://quay.io/repository/biocontainers/pyimzml/status
   :target: https://quay.io/repository/biocontainers/pyimzml
.. _`pyimzml/tags`: https://quay.io/repository/biocontainers/pyimzml?tab=tags


.. raw:: html

    <script>
        var package = "pyimzml";
        var versions = ["1.5.1","1.2.6","1.2.6","1.2.6","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyimzml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyimzml/README.html