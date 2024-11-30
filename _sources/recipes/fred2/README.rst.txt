:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fred2'
.. highlight: bash

fred2
=====

.. conda:recipe:: fred2
   :replaces_section_title:
   :noindex:

   Python\-based framework for computational immunomics.

   :homepage: https://fred-2.github.io
   :license: BSD
   :recipe: /`fred2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fred2/meta.yaml>`_

   


.. conda:package:: fred2

   |downloads_fred2| |docker_fred2|

   :versions:
      
      

      ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-1``,  ``2.0.2-2``,  ``2.0.2-1``

      

   
   :depends biopython: 
   :depends pandas: 
   :depends pymysql: 
   :depends pyomo: 
   :depends pysvmlight: 
   :depends python: ``<3``
   :depends pyvcf: 
   :depends svmlight: 
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

      mamba install fred2

   and update with::

      mamba update fred2

  To create a new environment, run::

      mamba create --name myenvname fred2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fred2:<tag>

   (see `fred2/tags`_ for valid values for ``<tag>``)


.. |downloads_fred2| image:: https://img.shields.io/conda/dn/bioconda/fred2.svg?style=flat
   :target: https://anaconda.org/bioconda/fred2
   :alt:   (downloads)
.. |docker_fred2| image:: https://quay.io/repository/biocontainers/fred2/status
   :target: https://quay.io/repository/biocontainers/fred2
.. _`fred2/tags`: https://quay.io/repository/biocontainers/fred2?tab=tags


.. raw:: html

    <script>
        var package = "fred2";
        var versions = ["2.0.7","2.0.6","2.0.5","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fred2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fred2/README.html