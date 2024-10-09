:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'civicpy'
.. highlight: bash

civicpy
=======

.. conda:recipe:: civicpy
   :replaces_section_title:
   :noindex:

   CIViC variant knowledgebase analysis toolkit.

   :homepage: http://civicpy.org
   :documentation: https://docs.civicpy.org/en/latest/
   
   :developer docs: https://github.com/griffithlab/civicpy
   :license: MIT / MIT
   :recipe: /`civicpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/civicpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/civicpy/meta.yaml>`_

   


.. conda:package:: civicpy

   |downloads_civicpy| |docker_civicpy|

   :versions:
      
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends backports-datetime-fromisoformat: ``2.0.0.*``
   :depends click: 
   :depends deprecation: 
   :depends networkx: 
   :depends obonet: ``0.2.3.*``
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends requests: 
   :depends vcfpy: 
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

      mamba install civicpy

   and update with::

      mamba update civicpy

  To create a new environment, run::

      mamba create --name myenvname civicpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/civicpy:<tag>

   (see `civicpy/tags`_ for valid values for ``<tag>``)


.. |downloads_civicpy| image:: https://img.shields.io/conda/dn/bioconda/civicpy.svg?style=flat
   :target: https://anaconda.org/bioconda/civicpy
   :alt:   (downloads)
.. |docker_civicpy| image:: https://quay.io/repository/biocontainers/civicpy/status
   :target: https://quay.io/repository/biocontainers/civicpy
.. _`civicpy/tags`: https://quay.io/repository/biocontainers/civicpy?tab=tags


.. raw:: html

    <script>
        var package = "civicpy";
        var versions = ["3.1.2","3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/civicpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/civicpy/README.html