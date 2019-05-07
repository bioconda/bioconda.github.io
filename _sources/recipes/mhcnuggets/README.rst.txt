:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcnuggets'
.. highlight: bash

mhcnuggets
==========

.. conda:recipe:: mhcnuggets
   :replaces_section_title:

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

   :versions: 2.2-0
   
   :depends keras: 
   :depends numpy: >=1.16.1
   :depends python: >=2.7,<2.8.0a0
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: 1.13.1.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mhcnuggets

   and update with::

      conda update mhcnuggets

   or use the docker container::

      docker pull quay.io/biocontainers/mhcnuggets:<tag>

   (see `mhcnuggets/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcnuggets| image:: https://img.shields.io/conda/dn/bioconda/mhcnuggets.svg?style=flat
   :alt:   (downloads)
.. |docker_mhcnuggets| image:: https://quay.io/repository/biocontainers/mhcnuggets/status
   :target: https://quay.io/repository/biocontainers/mhcnuggets
.. _`mhcnuggets/tags`: https://quay.io/repository/biocontainers/mhcnuggets?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcnuggets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcnuggets/README.html