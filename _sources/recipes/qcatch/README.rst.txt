:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcatch'
.. highlight: bash

qcatch
======

.. conda:recipe:: qcatch
   :replaces_section_title:
   :noindex:

   QCatch\: Quality Control downstream of alevin\-fry \/ simpleaf.

   :homepage: https://github.com/COMBINE-lab/QCatch
   :license: BSD / BSD-3-Clause
   :recipe: /`qcatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcatch/meta.yaml>`_

   


.. conda:package:: qcatch

   |downloads_qcatch| |docker_qcatch|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``

      

   
   :depends beautifulsoup4: ``4.13.3``
   :depends numpy: ``2.1.3``
   :depends pandas: ``2.2.3``
   :depends plotly: ``6.0.0``
   :depends pyroe: ``0.9.0``
   :depends python: ``3.12.9``
   :depends python-igraph: ``0.11.8``
   :depends requests: 
   :depends scanpy: ``1.10.4``
   :depends scipy: ``1.15.2``
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

      mamba install qcatch

   and update with::

      mamba update qcatch

  To create a new environment, run::

      mamba create --name myenvname qcatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qcatch:<tag>

   (see `qcatch/tags`_ for valid values for ``<tag>``)


.. |downloads_qcatch| image:: https://img.shields.io/conda/dn/bioconda/qcatch.svg?style=flat
   :target: https://anaconda.org/bioconda/qcatch
   :alt:   (downloads)
.. |docker_qcatch| image:: https://quay.io/repository/biocontainers/qcatch/status
   :target: https://quay.io/repository/biocontainers/qcatch
.. _`qcatch/tags`: https://quay.io/repository/biocontainers/qcatch?tab=tags


.. raw:: html

    <script>
        var package = "qcatch";
        var versions = ["0.2.5","0.2.4","0.2.3","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcatch/README.html