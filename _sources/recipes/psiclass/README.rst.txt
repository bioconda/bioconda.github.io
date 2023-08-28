:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psiclass'
.. highlight: bash

psiclass
========

.. conda:recipe:: psiclass
   :replaces_section_title:
   :noindex:

   Simultaneous multi\-sample transcript assembler for RNA\-seq data

   :homepage: https://github.com/splicebox/PsiCLASS
   :license: GPL-3.0-only
   :recipe: /`psiclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psiclass/meta.yaml>`_

   


.. conda:package:: psiclass

   |downloads_psiclass| |docker_psiclass|

   :versions:
      
      

      ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
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

      mamba install psiclass

   and update with::

      mamba update psiclass

  To create a new environment, run::

      mamba create --name myenvname psiclass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psiclass:<tag>

   (see `psiclass/tags`_ for valid values for ``<tag>``)


.. |downloads_psiclass| image:: https://img.shields.io/conda/dn/bioconda/psiclass.svg?style=flat
   :target: https://anaconda.org/bioconda/psiclass
   :alt:   (downloads)
.. |docker_psiclass| image:: https://quay.io/repository/biocontainers/psiclass/status
   :target: https://quay.io/repository/biocontainers/psiclass
.. _`psiclass/tags`: https://quay.io/repository/biocontainers/psiclass?tab=tags


.. raw:: html

    <script>
        var package = "psiclass";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psiclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psiclass/README.html