:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dawg'
.. highlight: bash

dawg
====

.. conda:recipe:: dawg
   :replaces_section_title:

   DNA Assembly with Gaps \(Dawg\) is an application designed to simulate the evolution of recombinant DNA sequences in continuous time based on the robust general time reversible model with gamma and invariant rate heterogeneity and a novel length\-dependent model of gap formation.

   :homepage: https://github.com/reedacartwright/dawg
   :license: GPL-2
   :recipe: /`dawg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dawg/meta.yaml>`_

   


.. conda:package:: dawg

   |downloads_dawg| |docker_dawg|

   :versions: 2.0.beta1-1, 2.0.beta1-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dawg

   and update with::

      conda update dawg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dawg:<tag>

   (see `dawg/tags`_ for valid values for ``<tag>``)


.. |downloads_dawg| image:: https://img.shields.io/conda/dn/bioconda/dawg.svg?style=flat
   :alt:   (downloads)
.. |docker_dawg| image:: https://quay.io/repository/biocontainers/dawg/status
   :target: https://quay.io/repository/biocontainers/dawg
.. _`dawg/tags`: https://quay.io/repository/biocontainers/dawg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dawg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dawg/README.html