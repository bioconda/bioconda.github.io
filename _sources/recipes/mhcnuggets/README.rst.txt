:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcnuggets'
.. highlight: bash

mhcnuggets
==========

.. conda:recipe:: mhcnuggets
   :replaces_section_title:
   :noindex:

   MHCnuggets\: Neoantigen peptide MHC binding prediction for class I and II

   :homepage: http://karchinlab.org/apps/mhcnuggets.html
   :license: APACHE / Apache License
   :recipe: /`mhcnuggets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnuggets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcnuggets/meta.yaml>`_

   \# MHCnuggets

   Welcome to MHCnuggets\! Presumably you\'re here to do some
   peptide\-MHC prediction and not because you were \[hungry\]\(https\:\/\/www.mcdonalds.com\/us\/en\-us\/product\/chicken\-mcnuggets\-4\-piece.html\).

   \#\#\# Usage \#\#\#
   For an overview of how to use MHCnuggets please refer to the Jupyter notebook
   called \`user\_guide.ipynb\` in the repository

   \#\#\# Installation \#\#\#

   MHCnuggets is \`pip\` installable as\:
   \`\`\`bash
   pip install mhcnuggets
   \`\`\`

   \*\*Required pacakges\:\*\*

   \* numpy
   \* scipy
   \* scikit\-learn
   \* tensorflow
   \* keras

   You might want to check if the Keras backend is configured to use
   the Tensforflow backend.


.. conda:package:: mhcnuggets

   |downloads_mhcnuggets| |docker_mhcnuggets|

   :versions:
      
      

      ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.2-0``

      

   
   :depends keras: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.6.*``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: 
   :depends varcode: 
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

      mamba install mhcnuggets

   and update with::

      mamba update mhcnuggets

  To create a new environment, run::

      mamba create --name myenvname mhcnuggets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhcnuggets:<tag>

   (see `mhcnuggets/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcnuggets| image:: https://img.shields.io/conda/dn/bioconda/mhcnuggets.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcnuggets
   :alt:   (downloads)
.. |docker_mhcnuggets| image:: https://quay.io/repository/biocontainers/mhcnuggets/status
   :target: https://quay.io/repository/biocontainers/mhcnuggets
.. _`mhcnuggets/tags`: https://quay.io/repository/biocontainers/mhcnuggets?tab=tags


.. raw:: html

    <script>
        var package = "mhcnuggets";
        var versions = ["2.4.1","2.4.0","2.3.2","2.3.1","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcnuggets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcnuggets/README.html