:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'auriclass'
.. highlight: bash

auriclass
=========

.. conda:recipe:: auriclass
   :replaces_section_title:
   :noindex:

   AuriClass is a tool for quickly predicting the clade of a Candida auris genome.

   :homepage: https://rivm-bioinformatics.github.io/auriclass/
   :developer docs: https://github.com/RIVM-bioinformatics/auriclass
   :license: AGPL / GNU Affero General Public v3
   :recipe: /`auriclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auriclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auriclass/meta.yaml>`_

   


.. conda:package:: auriclass

   |downloads_auriclass| |docker_auriclass|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-0``

      

   
   :depends mash: ``>=2``
   :depends mypy: 
   :depends pandas: ``>=2``
   :depends pandas-stubs: 
   :depends pip: 
   :depends pyfastx: 
   :depends pytest: 
   :depends python: ``>=3.10``
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

      mamba install auriclass

   and update with::

      mamba update auriclass

  To create a new environment, run::

      mamba create --name myenvname auriclass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/auriclass:<tag>

   (see `auriclass/tags`_ for valid values for ``<tag>``)


.. |downloads_auriclass| image:: https://img.shields.io/conda/dn/bioconda/auriclass.svg?style=flat
   :target: https://anaconda.org/bioconda/auriclass
   :alt:   (downloads)
.. |docker_auriclass| image:: https://quay.io/repository/biocontainers/auriclass/status
   :target: https://quay.io/repository/biocontainers/auriclass
.. _`auriclass/tags`: https://quay.io/repository/biocontainers/auriclass?tab=tags


.. raw:: html

    <script>
        var package = "auriclass";
        var versions = ["0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/auriclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/auriclass/README.html