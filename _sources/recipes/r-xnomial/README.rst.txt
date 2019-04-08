:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xnomial'
.. highlight: bash

r-xnomial
=========

.. conda:recipe:: r-xnomial
   :replaces_section_title:

   Tests whether a set of counts fit a given expected ratio. For example\, a genetic cross might be expected to produce four types in the relative frequencies of 9\:3\:3\:1. To see whether a set of observed counts fits this expectation\, one can examine all possible outcomes with xmulti\(\) or a random sample of them with xmonte\(\) and find the probability of an observation deviating from the expectation by at least as much as the observed. As a measure of deviation from the expected\, one can use the log\-likelihood ratio\, the multinomial probability\, or the classic chi\-square statistic. A histogram of the test statistic can also be plotted and compared with the asymptotic curve.

   :homepage: https://CRAN.R-project.org/package=XNomial
   :license: GPL / GPL
   :recipe: /`r-xnomial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xnomial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xnomial/meta.yaml>`_

   


.. conda:package:: r-xnomial

   |downloads_r-xnomial| |docker_r-xnomial|

   :versions: 1.0.4-0
   
   :depends r: >=2.14
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-xnomial

   and update with::

      conda update r-xnomial

   or use the docker container::

      docker pull quay.io/biocontainers/r-xnomial:<tag>

   (see `r-xnomial/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xnomial| image:: https://img.shields.io/conda/dn/bioconda/r-xnomial.svg?style=flat
   :alt:   (downloads)
.. |docker_r-xnomial| image:: https://quay.io/repository/biocontainers/r-xnomial/status
   :target: https://quay.io/repository/biocontainers/r-xnomial
.. _`r-xnomial/tags`: https://quay.io/repository/biocontainers/r-xnomial?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xnomial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xnomial/README.html