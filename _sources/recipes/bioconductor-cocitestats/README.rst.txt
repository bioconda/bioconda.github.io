.. title:: Package Recipe 'bioconductor-cocitestats'
.. highlight: bash


bioconductor-cocitestats
========================

.. conda:recipe:: bioconductor-cocitestats
   :replaces_section_title:

   A collection of software tools for dealing with co\-citation data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CoCiteStats.html
   :license: CPL
   :recipe: /`bioconductor-cocitestats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocitestats/meta.yaml>`_

   


.. conda:package:: bioconductor-cocitestats

   |downloads_bioconductor-cocitestats| |docker_bioconductor-cocitestats|

   :versions: 1.54.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-cocitestats|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cocitestats

   and update with::

      conda update bioconductor-cocitestats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cocitestats


.. |required_by_bioconductor-cocitestats| conda:required_by:: bioconductor-cocitestats
.. |downloads_bioconductor-cocitestats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocitestats.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cocitestats| image:: https://quay.io/repository/biocontainers/bioconductor-cocitestats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocitestats







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocitestats/README.html

