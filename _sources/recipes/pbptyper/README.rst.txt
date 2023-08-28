:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbptyper'
.. highlight: bash

pbptyper
========

.. conda:recipe:: pbptyper
   :replaces_section_title:
   :noindex:

   In silico Penicillin Binding Protein \(PBP\) typer for Streptococcus pneumoniae assemblies

   :homepage: https://github.com/rpetit3/pbptyper
   :license: MIT
   :recipe: /`pbptyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbptyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbptyper/meta.yaml>`_

   


.. conda:package:: pbptyper

   |downloads_pbptyper| |docker_pbptyper|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends blast: 
   :depends executor: 
   :depends fastani: 
   :depends python: ``>=3.7``
   :depends rich-click: 
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

      mamba install pbptyper

   and update with::

      mamba update pbptyper

  To create a new environment, run::

      mamba create --name myenvname pbptyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbptyper:<tag>

   (see `pbptyper/tags`_ for valid values for ``<tag>``)


.. |downloads_pbptyper| image:: https://img.shields.io/conda/dn/bioconda/pbptyper.svg?style=flat
   :target: https://anaconda.org/bioconda/pbptyper
   :alt:   (downloads)
.. |docker_pbptyper| image:: https://quay.io/repository/biocontainers/pbptyper/status
   :target: https://quay.io/repository/biocontainers/pbptyper
.. _`pbptyper/tags`: https://quay.io/repository/biocontainers/pbptyper?tab=tags


.. raw:: html

    <script>
        var package = "pbptyper";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbptyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbptyper/README.html