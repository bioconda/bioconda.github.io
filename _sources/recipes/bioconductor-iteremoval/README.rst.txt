:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iteremoval'
.. highlight: bash

bioconductor-iteremoval
=======================

.. conda:recipe:: bioconductor-iteremoval
   :replaces_section_title:
   :noindex:

   Iteration removal method for feature selection

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/iteremoval.html
   :license: GPL-2
   :recipe: /`bioconductor-iteremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iteremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iteremoval/meta.yaml>`_

   The package provides a flexible algorithm to screen features of two distinct groups in consideration of overfitting and overall performance. It was originally tailored for methylation locus screening of NGS data\, and it can also be used as a generic method for feature selection. Each step of the algorithm provides a default method for simple implemention\, and the method can be replaced by a user defined function.


.. conda:package:: bioconductor-iteremoval

   |downloads_bioconductor-iteremoval| |docker_bioconductor-iteremoval|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iteremoval

   and update with::

      conda update bioconductor-iteremoval

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iteremoval:<tag>

   (see `bioconductor-iteremoval/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iteremoval| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iteremoval.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iteremoval
   :alt:   (downloads)
.. |docker_bioconductor-iteremoval| image:: https://quay.io/repository/biocontainers/bioconductor-iteremoval/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iteremoval
.. _`bioconductor-iteremoval/tags`: https://quay.io/repository/biocontainers/bioconductor-iteremoval?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iteremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iteremoval/README.html