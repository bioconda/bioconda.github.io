:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tsebra'
.. highlight: bash

tsebra
======

.. conda:recipe:: tsebra
   :replaces_section_title:
   :noindex:

   TSEBRA is a combiner tool that selects transcripts from gene predictions based on the support by extrisic evidence in form of introns and start\/stop codons.

   :homepage: https://github.com/Gaius-Augustus/TSEBRA
   :license: Other / Artistic-2.0
   :recipe: /`tsebra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsebra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsebra/meta.yaml>`_

   


.. conda:package:: tsebra

   |downloads_tsebra| |docker_tsebra|

   :versions:
      
      

      ``1.1.2.4-0``,  ``1.1.2.3-0``,  ``1.1.2.2-0``,  ``1.1.2.1-0``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends numpy: 
   :depends python: ``>=3.5.2``
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

      mamba install tsebra

   and update with::

      mamba update tsebra

  To create a new environment, run::

      mamba create --name myenvname tsebra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tsebra:<tag>

   (see `tsebra/tags`_ for valid values for ``<tag>``)


.. |downloads_tsebra| image:: https://img.shields.io/conda/dn/bioconda/tsebra.svg?style=flat
   :target: https://anaconda.org/bioconda/tsebra
   :alt:   (downloads)
.. |docker_tsebra| image:: https://quay.io/repository/biocontainers/tsebra/status
   :target: https://quay.io/repository/biocontainers/tsebra
.. _`tsebra/tags`: https://quay.io/repository/biocontainers/tsebra?tab=tags


.. raw:: html

    <script>
        var package = "tsebra";
        var versions = ["1.1.2.4","1.1.2.3","1.1.2.2","1.1.2.1","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tsebra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tsebra/README.html