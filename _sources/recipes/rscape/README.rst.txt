:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rscape'
.. highlight: bash

rscape
======

.. conda:recipe:: rscape
   :replaces_section_title:

   R\-scape \(RNA Structural Covariation Above Phylogenetic Expectation\) looks for evidence of a conserved RNA secondary structure by measuring pairwise covariations observed in an input multiple sequence alignment.

   :homepage: http://eddylab.org/R-scape/
   :license: GPLv3
   :recipe: /`rscape <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rscape/meta.yaml>`_

   


.. conda:package:: rscape

   |downloads_rscape| |docker_rscape|

   :versions: 1.2.2-2, 1.2.2-1, 1.2.2-0, 1.0.4-2, 1.0.4-1, 0.8.3-2, 0.8.3-1, 0.8.3-0, 0.6.1-4, 0.6.1-3, 0.6.1-2, 0.6.1-0, 0.3.1-0, 0.2.1-0
   
   :depends gnuplot: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rscape

   and update with::

      conda update rscape

   or use the docker container::

      docker pull quay.io/biocontainers/rscape:<tag>

   (see `rscape/tags`_ for valid values for ``<tag>``)


.. |downloads_rscape| image:: https://img.shields.io/conda/dn/bioconda/rscape.svg?style=flat
   :target: https://anaconda.org/bioconda/rscape
   :alt:   (downloads)
.. |docker_rscape| image:: https://quay.io/repository/biocontainers/rscape/status
   :target: https://quay.io/repository/biocontainers/rscape
.. _`rscape/tags`: https://quay.io/repository/biocontainers/rscape?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rscape/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rscape/README.html