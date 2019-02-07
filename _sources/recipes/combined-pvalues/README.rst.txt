.. title:: Package Recipe 'combined-pvalues'
.. highlight: bash


combined-pvalues
================

.. conda:recipe:: combined-pvalues
   :replaces_section_title:

   A library to combine\, analyze\, group and correct p\-values in BED files.
   Unique tools involve correction for spatial autocorrelation.
   This is useful for ChIP\-Seq probes and Tiling arrays\, or any data with spatial correlation.

   :homepage: https://github.com/brentp/combined-pvalues
   :license: MIT
   :recipe: /`combined-pvalues <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/combined-pvalues>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/combined-pvalues/meta.yaml>`_

   


.. conda:package:: combined-pvalues

   |downloads_combined-pvalues| |docker_combined-pvalues|

   :versions: 0.48, 0.46

   :depends: :conda:package:`interlap`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`scipy`  :conda:package:`toolshed`  

   :required~by: |required_by_combined-pvalues|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install combined-pvalues

   and update with::

      conda update combined-pvalues

   or use the docker container::

      docker pull quay.io/repository/biocontainers/combined-pvalues


.. |required_by_combined-pvalues| conda:required_by:: combined-pvalues
.. |downloads_combined-pvalues| image:: https://img.shields.io/conda/dn/bioconda/combined-pvalues.svg?style=flat
   :alt:   (downloads)
.. |docker_combined-pvalues| image:: https://quay.io/repository/biocontainers/combined-pvalues/status
   :target: https://quay.io/repository/biocontainers/combined-pvalues







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/combined-pvalues/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/combined-pvalues/README.html

