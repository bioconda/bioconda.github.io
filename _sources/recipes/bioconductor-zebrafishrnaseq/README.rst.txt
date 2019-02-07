.. title:: Package Recipe 'bioconductor-zebrafishrnaseq'
.. highlight: bash


bioconductor-zebrafishrnaseq
============================

.. conda:recipe:: bioconductor-zebrafishrnaseq
   :replaces_section_title:

   Gene\-level read counts from RNA\-Seq for gallein\-treated and control zebrafish.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/zebrafishRNASeq.html
   :license: GPL
   :recipe: /`bioconductor-zebrafishrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafishrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafishrnaseq/meta.yaml>`_

   


.. conda:package:: bioconductor-zebrafishrnaseq

   |downloads_bioconductor-zebrafishrnaseq| |docker_bioconductor-zebrafishrnaseq|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-zebrafishrnaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zebrafishrnaseq

   and update with::

      conda update bioconductor-zebrafishrnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-zebrafishrnaseq


.. |required_by_bioconductor-zebrafishrnaseq| conda:required_by:: bioconductor-zebrafishrnaseq
.. |downloads_bioconductor-zebrafishrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zebrafishrnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-zebrafishrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-zebrafishrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zebrafishrnaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zebrafishrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zebrafishrnaseq/README.html

