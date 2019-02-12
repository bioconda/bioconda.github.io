:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mdp'
.. highlight: bash

bioconductor-mdp
================

.. conda:recipe:: bioconductor-mdp
   :replaces_section_title:

   The Molecular Degree of Perturbation webtool quantifies the heterogeneity of samples. It takes a data.frame of omic data that contains at least two classes \(control and test\) and assigns a score to all samples based on how perturbed they are compared to the controls. It is based on the Molecular Distance to Health \(Pankla et al. 2009\)\, and expands on this algorithm by adding the options to calculate the z\-score using the modified z\-score \(using median absolute deviation\)\, change the z\-score zeroing threshold\, and look at genes that are most perturbed in the test versus control classes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mdp.html
   :license: GPL-3
   :recipe: /`bioconductor-mdp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mdp/meta.yaml>`_

   


.. conda:package:: bioconductor-mdp

   |downloads_bioconductor-mdp| |docker_bioconductor-mdp|

   :versions: 1.2.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-ggplot2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mdp

   and update with::

      conda update bioconductor-mdp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mdp:<tag>

   (see `bioconductor-mdp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mdp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mdp.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mdp| image:: https://quay.io/repository/biocontainers/bioconductor-mdp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mdp
.. _`bioconductor-mdp/tags`: https://quay.io/repository/biocontainers/bioconductor-mdp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mdp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mdp/README.html