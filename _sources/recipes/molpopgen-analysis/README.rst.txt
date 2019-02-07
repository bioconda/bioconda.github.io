.. title:: Package Recipe 'molpopgen-analysis'
.. highlight: bash


molpopgen-analysis
==================

.. conda:recipe:: molpopgen-analysis
   :replaces_section_title:

   Deprecated and no longer maintained programs for the \(pre\-NGS\-era\) analysis of population\-genetic data. Unless you work with Sanger data\, results will be wrong. Please check the software homepage for more details.

   :homepage: https://github.com/molpopgen/analysis
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`molpopgen-analysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/molpopgen-analysis/meta.yaml>`_

   


.. conda:package:: molpopgen-analysis

   |downloads_molpopgen-analysis| |docker_molpopgen-analysis|

   :versions: 0.8.8

   :depends: :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`libsequence` 1.8.4 

   :required~by: |required_by_molpopgen-analysis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install molpopgen-analysis

   and update with::

      conda update molpopgen-analysis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/molpopgen-analysis


.. |required_by_molpopgen-analysis| conda:required_by:: molpopgen-analysis
.. |downloads_molpopgen-analysis| image:: https://img.shields.io/conda/dn/bioconda/molpopgen-analysis.svg?style=flat
   :alt:   (downloads)
.. |docker_molpopgen-analysis| image:: https://quay.io/repository/biocontainers/molpopgen-analysis/status
   :target: https://quay.io/repository/biocontainers/molpopgen-analysis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/molpopgen-analysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/molpopgen-analysis/README.html

