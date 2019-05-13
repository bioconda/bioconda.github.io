:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pcalg'
.. highlight: bash

r-pcalg
=======

.. conda:recipe:: r-pcalg
   :replaces_section_title:

   Functions for causal structure learning and causal inference using graphical models. The main algorithms for causal structure learning are PC \(for observational data without hidden variables\)\, FCI and RFCI \(for observational data with hidden variables\)\, and GIES \(for a mix of data from observational studies \(i.e. observational data\) and data from experiments involving interventions \(i.e. interventional data\) without hidden variables\). For causal inference the IDA algorithm\, the Generalized Backdoor Criterion \(GBC\)\, the Generalized Adjustment Criterion \(GAC\) and some related functions are implemented. Functions for incorporating background knowledge are provided.

   :homepage: http://pcalg.r-forge.r-project.org/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-pcalg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pcalg/meta.yaml>`_

   


.. conda:package:: r-pcalg

   |downloads_r-pcalg| |docker_r-pcalg|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pcalg

   and update with::

      conda update r-pcalg

   or use the docker container::

      docker pull quay.io/biocontainers/r-pcalg:<tag>

   (see `r-pcalg/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pcalg| image:: https://img.shields.io/conda/dn/bioconda/r-pcalg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pcalg
   :alt:   (downloads)
.. |docker_r-pcalg| image:: https://quay.io/repository/biocontainers/r-pcalg/status
   :target: https://quay.io/repository/biocontainers/r-pcalg
.. _`r-pcalg/tags`: https://quay.io/repository/biocontainers/r-pcalg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pcalg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pcalg/README.html