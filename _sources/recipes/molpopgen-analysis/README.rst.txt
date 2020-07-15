:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'molpopgen-analysis'
.. highlight: bash

molpopgen-analysis
==================

.. conda:recipe:: molpopgen-analysis
   :replaces_section_title:
   :noindex:

   Deprecated and no longer maintained programs for the \(pre\-NGS\-era\) analysis of population\-genetic data. Unless you work with Sanger data\, results will be wrong. Please check the software homepage for more details.

   :homepage: https://github.com/molpopgen/analysis
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`molpopgen-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis/meta.yaml>`_

   


.. conda:package:: molpopgen-analysis

   |downloads_molpopgen-analysis| |docker_molpopgen-analysis|

   :versions:
      
      

      ``0.8.8-4``,  ``0.8.8-3``,  ``0.8.8-2``,  ``0.8.8-1``,  ``0.8.8-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libsequence: ``1.8.4.*``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openblas: ``>=0.3.6,<0.3.7.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install molpopgen-analysis

   and update with::

      conda update molpopgen-analysis

   or use the docker container::

      docker pull quay.io/biocontainers/molpopgen-analysis:<tag>

   (see `molpopgen-analysis/tags`_ for valid values for ``<tag>``)


.. |downloads_molpopgen-analysis| image:: https://img.shields.io/conda/dn/bioconda/molpopgen-analysis.svg?style=flat
   :target: https://anaconda.org/bioconda/molpopgen-analysis
   :alt:   (downloads)
.. |docker_molpopgen-analysis| image:: https://quay.io/repository/biocontainers/molpopgen-analysis/status
   :target: https://quay.io/repository/biocontainers/molpopgen-analysis
.. _`molpopgen-analysis/tags`: https://quay.io/repository/biocontainers/molpopgen-analysis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/molpopgen-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/molpopgen-analysis/README.html