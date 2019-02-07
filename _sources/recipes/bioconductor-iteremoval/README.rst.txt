.. title:: Package Recipe 'bioconductor-iteremoval'
.. highlight: bash


bioconductor-iteremoval
=======================

.. conda:recipe:: bioconductor-iteremoval
   :replaces_section_title:

   The package provides a flexible algorithm to screen features of two distinct groups in consideration of overfitting and overall performance. It was originally tailored for methylation locus screening of NGS data\, and it can also be used as a generic method for feature selection. Each step of the algorithm provides a default method for simple implemention\, and the method can be replaced by a user defined function.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iteremoval.html
   :license: GPL-2
   :recipe: /`bioconductor-iteremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iteremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iteremoval/meta.yaml>`_

   


.. conda:package:: bioconductor-iteremoval

   |downloads_bioconductor-iteremoval| |docker_bioconductor-iteremoval|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2` >=2.2.1 :conda:package:`r-magrittr`  

   :required~by: |required_by_bioconductor-iteremoval|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-iteremoval

   and update with::

      conda update bioconductor-iteremoval

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-iteremoval


.. |required_by_bioconductor-iteremoval| conda:required_by:: bioconductor-iteremoval
.. |downloads_bioconductor-iteremoval| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iteremoval.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-iteremoval| image:: https://quay.io/repository/biocontainers/bioconductor-iteremoval/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iteremoval







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iteremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iteremoval/README.html

