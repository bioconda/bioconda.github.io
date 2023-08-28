:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'entrezpy'
.. highlight: bash

entrezpy
========

.. conda:recipe:: entrezpy
   :replaces_section_title:
   :noindex:

   Entrezpy is a dedicated Python library to interact with NCBI Entrez databases

   :homepage: https://gitlab.com/ncbipy/entrezpy
   :documentation: https://entrezpy.readthedocs.io/en/master/
   
   :license: LGPL / LGPLv3
   :recipe: /`entrezpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrezpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/entrezpy/meta.yaml>`_

   


.. conda:package:: entrezpy

   |downloads_entrezpy| |docker_entrezpy|

   :versions:
      
      

      ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``

      

   
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

      mamba install entrezpy

   and update with::

      mamba update entrezpy

  To create a new environment, run::

      mamba create --name myenvname entrezpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/entrezpy:<tag>

   (see `entrezpy/tags`_ for valid values for ``<tag>``)


.. |downloads_entrezpy| image:: https://img.shields.io/conda/dn/bioconda/entrezpy.svg?style=flat
   :target: https://anaconda.org/bioconda/entrezpy
   :alt:   (downloads)
.. |docker_entrezpy| image:: https://quay.io/repository/biocontainers/entrezpy/status
   :target: https://quay.io/repository/biocontainers/entrezpy
.. _`entrezpy/tags`: https://quay.io/repository/biocontainers/entrezpy?tab=tags


.. raw:: html

    <script>
        var package = "entrezpy";
        var versions = ["2.1.3","2.1.2","2.1.1","2.0.5","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/entrezpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/entrezpy/README.html