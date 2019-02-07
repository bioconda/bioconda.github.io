.. title:: Package Recipe 'sts-smctc'
.. highlight: bash


sts-smctc
=========

.. conda:recipe:: sts-smctc
   :replaces_section_title:

   A C\+\+ template class library for the efficient and convenient implementation of very general Sequential Monte Carlo algorithms.

   :homepage: https://github.com/matsengrp/smctc
   :license: GPL-3.0
   :recipe: /`sts-smctc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc/meta.yaml>`_

   


.. conda:package:: sts-smctc

   |downloads_sts-smctc| |docker_sts-smctc|

   :versions: 1.0

   :depends: :conda:package:`gsl` 1.16 

   :required~by: |required_by_sts-smctc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sts-smctc

   and update with::

      conda update sts-smctc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sts-smctc


.. |required_by_sts-smctc| conda:required_by:: sts-smctc
.. |downloads_sts-smctc| image:: https://img.shields.io/conda/dn/bioconda/sts-smctc.svg?style=flat
   :alt:   (downloads)
.. |docker_sts-smctc| image:: https://quay.io/repository/biocontainers/sts-smctc/status
   :target: https://quay.io/repository/biocontainers/sts-smctc






Notes
-----
This fork of smctc is maintained by the \[Matsen research group at the Fred Hutchinson Cancer Research Centre\]\(http\:\/\/matsen.fredhutch.org\/\) for use in the \[Sequential Tree Sampler online phylogenetics package\]\(https\:\/\/github.com\/OnlinePhylo\/sts\)


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sts-smctc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sts-smctc/README.html

