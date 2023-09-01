:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mage-tab-merger'
.. highlight: bash

mage-tab-merger
===============

.. conda:recipe:: mage-tab-merger
   :replaces_section_title:
   :noindex:

   Utility scripts to merge SDRFs\, condensed SDRFs and IDFs \(MAGE\-Tab\) for meta\-analysis and othe purposes.

   :homepage: The package home page
   :documentation: https://github.com/ebi-gene-expression-group/MAGE-Tab-merger/blob/develop/README.md
   
   :developer docs: https://github.com/ebi-gene-expression-group/MAGE-Tab-merger
   :license: MIT / MIT
   :recipe: /`mage-tab-merger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mage-tab-merger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mage-tab-merger/meta.yaml>`_

   


.. conda:package:: mage-tab-merger

   |downloads_mage-tab-merger| |docker_mage-tab-merger|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends jinja2: 
   :depends networkx: ``2.5``
   :depends pandas: 
   :depends python: 
   :depends requests: 
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

      mamba install mage-tab-merger

   and update with::

      mamba update mage-tab-merger

  To create a new environment, run::

      mamba create --name myenvname mage-tab-merger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mage-tab-merger:<tag>

   (see `mage-tab-merger/tags`_ for valid values for ``<tag>``)


.. |downloads_mage-tab-merger| image:: https://img.shields.io/conda/dn/bioconda/mage-tab-merger.svg?style=flat
   :target: https://anaconda.org/bioconda/mage-tab-merger
   :alt:   (downloads)
.. |docker_mage-tab-merger| image:: https://quay.io/repository/biocontainers/mage-tab-merger/status
   :target: https://quay.io/repository/biocontainers/mage-tab-merger
.. _`mage-tab-merger/tags`: https://quay.io/repository/biocontainers/mage-tab-merger?tab=tags


.. raw:: html

    <script>
        var package = "mage-tab-merger";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mage-tab-merger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mage-tab-merger/README.html