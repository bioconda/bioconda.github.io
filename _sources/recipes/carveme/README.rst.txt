:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carveme'
.. highlight: bash

carveme
=======

.. conda:recipe:: carveme
   :replaces_section_title:
   :noindex:

   CarveMe\: automated genome\-scale metabolic model reconstruction

   :homepage: https://github.com/cdanielmachado/carveme
   :documentation: https://carveme.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`carveme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carveme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carveme/meta.yaml>`_

   


.. conda:package:: carveme

   |downloads_carveme| |docker_carveme|

   :versions:
      
      

      ``1.6.6-0``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``

      

   
   :depends diamond: 
   :depends numpy: 
   :depends pandas: 
   :depends pyscipopt: 
   :depends python: ``>=3.8``
   :depends reframed: ``>=1.5.1``
   :depends requests: 
   :depends scip: 
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

      mamba install carveme

   and update with::

      mamba update carveme

  To create a new environment, run::

      mamba create --name myenvname carveme

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/carveme:<tag>

   (see `carveme/tags`_ for valid values for ``<tag>``)


.. |downloads_carveme| image:: https://img.shields.io/conda/dn/bioconda/carveme.svg?style=flat
   :target: https://anaconda.org/bioconda/carveme
   :alt:   (downloads)
.. |docker_carveme| image:: https://quay.io/repository/biocontainers/carveme/status
   :target: https://quay.io/repository/biocontainers/carveme
.. _`carveme/tags`: https://quay.io/repository/biocontainers/carveme?tab=tags


.. raw:: html

    <script>
        var package = "carveme";
        var versions = ["1.6.6","1.6.5","1.6.4","1.6.3","1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carveme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carveme/README.html